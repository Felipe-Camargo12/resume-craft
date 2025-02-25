import type { Metadata } from "next";
import { Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider"

import { cn } from "@/lib/utils";

const fontTitle = Roboto({
  subsets: ["latin"], variable: "--font-title",
  weight: "400"
});
const fontSans = Roboto_Flex({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Craft CV",
  description: "Crie seus proprios curriculos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          fontTitle.variable,
          fontSans.variable
        )}
        >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
