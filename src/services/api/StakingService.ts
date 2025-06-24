import axiosClient from "@/utils/axiosClient";

export const getStakingPlans = async () => {
    try {
        const temp = await axiosClient.get(`/staking-plans`);
        return temp.data;
    } catch (e) {
        throw e;
    }
}

export const getListStaking = async () => {
    try {
        const temp = await axiosClient.get(`/user-stakes`);
        return temp.data;
    } catch (e) {
        throw e;
    }
}

export const createStaking = async ({ staking_plan_id, amount_staked, lock_months }: { staking_plan_id: number, amount_staked: number, lock_months: number }) => {
    try {
        const temp = await axiosClient.post(`/user-stakes/stake-by-wallet`, {
            staking_plan_id,
            amount_staked,
            lock_months
        });
        return temp.data;
    } catch (e) {
        throw e;
    }
}

export const getOverViewStaking = async () => {
    try {
        const temp = await axiosClient.get(`/user-stakes/statistics`);
        return temp.data;
    } catch (e) {
        throw e;
    }
}
