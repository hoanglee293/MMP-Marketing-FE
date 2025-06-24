"use client"

import { useState } from "react"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import { Pencil, ChevronDown, ChevronUp } from "lucide-react"
import { createStaking, getStakingPlans } from "@/services/api/StakingService"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { TelegramWalletService } from "@/services/api"
import { useWsWalletBalance } from "@/hooks/useWsWalletBalance"
import { useLang } from "@/lang/useLang"
import { useStakingContext } from "@/contexts/StakingContext"

export default function DepositPanel() {
    const [depositAmount, setDepositAmount] = useState<string>("0.00")
    const [stakeMonths, setStakeMonths] = useState<string>("")
    const [stakeName, setStakeName] = useState<string>("")
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)
    const [selectedStake, setSelectedStake] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { t } = useLang()
    const queryClient = useQueryClient()
    const { refreshStakingData } = useStakingContext()

    const { data: stakingPlans } = useQuery({
        queryKey: ["staking-plans"],
        queryFn: getStakingPlans,
    })

    const { data: myWallet, refetch: refetchMyWallet } = useQuery({
        queryKey: ['myWallet'],
        queryFn: () => TelegramWalletService.getmyWallet(),
      })
    
    
    const { balances } = useWsWalletBalance(myWallet?.sol_address);
    // Transform stakingPlans to stakeOptions format
    const stakeOptions = stakingPlans ? stakingPlans.map((plan: any) => ({
        value: plan.id,
        label: `${plan.name} (${plan.period_days} days)`,
        period_days: plan.period_days,
        interest_rate: plan.interest_rate,
        name: plan.name
    })) : []

    const handleStakeSelect = (value: string, months: string, name: string) => {
        setSelectedStake(value)
        setStakeMonths(months)
        setStakeName(name)
        setIsSelectOpen(false)
    }

    const handleStake = async () => {
        if (!selectedStake || !depositAmount || Number(depositAmount) <= 0) {
            return
        }

        setIsLoading(true)
        try {
            await createStaking({ 
                staking_plan_id: Number(selectedStake), 
                amount_staked: Number(depositAmount), 
                lock_months: Number(stakeMonths) / 30 
            })
            
            // Phương án 1: Invalidate và refetch các queries liên quan (React Query)
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["list-staking"] }),
                queryClient.invalidateQueries({ queryKey: ["staking-plans"] }),
                queryClient.invalidateQueries({ queryKey: ["myWallet"] }),
                refetchMyWallet()
            ])
            
            // Phương án 2: Trigger refresh thông qua Context
            refreshStakingData()
            
            // Reset form
            setDepositAmount("0.00")
            setSelectedStake("")
            setStakeMonths("")
            setStakeName("")
            
        } catch (error) {
            console.error("Error creating staking:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-purple-500/20 flex-1 flex flex-col justify-between">
            <div className="text-center mb-3 sm:mb-5">
                <h2 className="bg-gradient-purple-cyan bg-clip-text text-xl sm:text-2xl lg:text-3xl font-bold leading-7 text-center mb-1 sm:mb-2 font-tektur">{t("stake.depositMmp")}</h2>
                <h3 className="bg-gradient-purple-cyan bg-clip-text text-xl sm:text-2xl lg:text-3xl font-bold leading-7 font-tektur text-center mb-1 sm:mb-2">{t("stake.earnContinuously")}</h3>
            </div>

            <div className="flex-1 flex flex-col">
                {/* Available Balance */}
                <p className="text-center text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                    {t("stake.availableBalance")} <span className="font-bold text-sm sm:text-base bg-gradient-purple-cyan bg-clip-text">{balances?.mmp} MMP</span>
                </p>

                {/* Deposit Section */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="bg-dark-100 rounded-xl flex justify-start flex-col p-3 sm:p-4 border border-gray-700/50">
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">{t("stake.deposit")}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="/mmp-logo.png" alt="MMP" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                                <div className="text-white font-medium pt-1 text-sm sm:text-base">MMP</div>
                            </div>
                            <div className="text-right">
                                <input 
                                    type="number" 
                                    min={0} 
                                    className="bg-transparent text-base sm:text-lg border-none max-w-[80px] sm:max-w-[100px] font-bold text-white outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right" 
                                    value={depositAmount} 
                                    onChange={(e) => setDepositAmount(e.target.value)} 
                                />
                                <p className="text-xs text-gray-400">≈ {Number(depositAmount) / 1000} USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Custom Select */}
                    <div className="relative">
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">{t("stake.depositTerm")}</p>
                        <div className="bg-gradient-purple-cyan rounded-xl p-[1px]">
                            <div
                                className="bg-black rounded-xl px-3 sm:px-4 py-2 sm:py-3 cursor-pointer transition-all duration-200 hover:border-gray-600/70"
                                onClick={() => setIsSelectOpen(!isSelectOpen)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-neutral font-medium kati-font text-xs sm:text-sm truncate">
                                            {selectedStake ? stakeName : t("stake.selectStakeMonths")}
                                        </p>
                                    </div>
                                    <div className="text-gray-400 ml-2 flex-shrink-0">
                                        {isSelectOpen ? <ChevronUp size={18} className="sm:w-5 sm:h-5" /> : <ChevronDown size={18} className="sm:w-5 sm:h-5" />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isSelectOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-black/90 backdrop-blur-xl rounded-xl border border-gray-700/50 z-10 max-h-40 sm:max-h-48 overflow-y-auto">
                                {stakeOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className="p-2 sm:p-3 cursor-pointer transition-all duration-200 hover:bg-gray-700/30 first:rounded-t-xl last:rounded-b-xl"
                                        onClick={() => handleStakeSelect(option.value, option.period_days, option.name)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-neutral font-medium kati-font text-xs sm:text-sm truncate">{option.name}</p>
                                                <p className="text-xs text-cyan-400">{option.period_days} {t("stake.days")}</p>
                                            </div>
                                            <div className="text-right ml-2 flex-shrink-0">
                                                <p className="text-xs sm:text-sm font-medium text-green-500">+{option.interest_rate}%</p>
                                                <p className="text-xs text-gray-400">{t("stake.apy")}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Stake Button */}
            <Button 
                onClick={handleStake} 
                className="w-full h-10 sm:h-12 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                disabled={isLoading}
            >
                {isLoading ? t("stake.stakeProcessing") : t("stake.stake")}
            </Button>
        </div>
    )
}
