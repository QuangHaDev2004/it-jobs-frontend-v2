import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ProgressBar } from "@/components/common/ProgressBar";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthProvider } from "@/providers/AuthProvider";

export const metadata: Metadata = {
  title: "IT Jobs",
  description: "Trang tuyển dụng việc làm IT tại Việt Nam",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <AuthProvider>
            <ProgressBar />

            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={3000}
            />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
