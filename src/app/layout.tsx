import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CURREN OFFICIAL STORE",
  description: "The Current Official Store also provides excellent customer support to assist with inquiries and order-related issues. Users can track their orders online and access a detailed size guide for better shopping convenience. Loyalty rewards and membership programs are offered for frequent shoppers, allowing them to earn points and redeem exclusive benefits. The store's commitment to sustainability is reflected in its eco-friendly packaging and promotion of ethically sourced products. It aims to deliver a seamless and enjoyable shopping experience for all customers.It features a user-friendly website and mobile app for effortless navigation and smooth transactions. Gift cards are available for those looking to share the shopping experience with loved ones. The store collaborates with top brands and designers to introduce limited-edition items. Regular newsletters and notifications keep customers updated on upcoming sales, new arrivals, and exclusive offers. Secure checkout systems and multiple payment options, including credit cards, digital wallets, and cash on delivery, make shopping safe and convenient.It features a user-friendly website and mobile app for effortless navigation and smooth transactions. Gift cards are available for those looking to share the shopping experience with loved ones. The store collaborates with top brands and designers to introduce limited-edition items. Regular newsletters and notifications keep customers updated on upcoming sales, new arrivals, and exclusive offers. Secure checkout systems and multiple payment options, including credit cards, digital wallets, and cash on delivery, make shopping safe and convenient.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
