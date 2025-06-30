"use client";
import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gothic_A1, Tektur } from "next/font/google";
import "@/styles/globals.scss";
import { LangProvider } from "@/lang";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Header from "@/components/Header";
import VideoBackground from "@/components/bg-video";
import { NotifyProvider } from "@/components/notify";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAnalytics } from "@/hooks/useAnalytics";
import { GA_TRACKING_ID } from "@/libs/gtag";

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-gothic-a1",
});

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-tektur",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Khởi tạo QueryClient trong component để nó không bị chia sẻ giữa các yêu cầu
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  const pathname = usePathname();
  useAnalytics();

  return (
    <html suppressHydrationWarning className="dark">
      <head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body className={`antialiased min-h-screen flex flex-col bg-white dark:bg-black overflow-x-hidden  ${gothicA1.variable} ${tektur.variable}`}>
       
        <QueryClientProvider client={queryClient}>
          <LangProvider>
            <NotifyProvider>
              <div className="min-h-screen bg-[#747474] dark:bg-gray-950 transition-colors duration-300 font-gothic-a1 flex flex-col">
                <Header />
                {pathname !== '/overview' && <VideoBackground />}
                <main className="overflow-x-hidden flex-1 z-30 relative w-full flex flex-col">{children}</main>
              </div>
              <ToastContainer theme="dark" />
            </NotifyProvider>
          </LangProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}