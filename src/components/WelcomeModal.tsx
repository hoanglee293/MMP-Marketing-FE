"use client"

import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent } from "@/ui/dialog"
import { useLang } from "@/lang/useLang"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { X } from "lucide-react"

const WelcomeModal = () => {
  const { lang } = useLang()
  const [hasSeenWelcome, setHasSeenWelcome] = useLocalStorage<boolean>('hasSeenWelcome', false)
  const [isOpen, setIsOpen] = useState(false)

  // Get banner image based on language
  const getBannerImage = (language: string) => {
    switch (language) {
      case 'en':
        return '/swap-mmp-en.jpg'
      case 'vi':
        return '/swap-mmp-vi.jpg'
      case 'kr':
        return '/swap-mmp-kr.jpg'
      case 'jp':
        return '/swap-mmp-jp.jpg'
      case 'id':
        return '/swap-mmp-en.jpg' // Default to English for Indonesia
      default:
        return '/swap-mmp-en.jpg'
    }
  }

  useEffect(() => {
    // Kiểm tra thời gian đóng modal lần cuối
    const lastClosedTime = localStorage.getItem("welcomeModalLastClosed");
    const currentTime = Date.now();
    const oneHourInMs = 1 * 60 * 60 * 1000; // 1 giờ tính bằng milliseconds

    // Nếu chưa có thời gian đóng hoặc đã qua 1 giờ kể từ lần đóng cuối
    if (!lastClosedTime || (currentTime - parseInt(lastClosedTime)) > oneHourInMs) {
      // Hiển thị modal sau 1 giây để trang load xong
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false)
    setHasSeenWelcome(true)
    // Lưu thời gian đóng modal vào localStorage
    localStorage.setItem("welcomeModalLastClosed", Date.now().toString());
  }

  const bannerImage = getBannerImage(lang)


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="md:max-w-[50vh] max-w-[90%] overflow-hidden p-0 border-0 bg-transparent rounded-xl" onPointerDownOutside={(e) => e.preventDefault()}>
        <div className="relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 border-none cursor-pointer"
          >
            <X size={18} />
          </button>
          
          {/* Banner image */}
          <div className="relative">
            <img
              src={bannerImage}
              alt="Welcome Banner"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            
            {/* Optional overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WelcomeModal