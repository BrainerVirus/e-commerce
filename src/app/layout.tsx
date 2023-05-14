import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lorem Ipsun",
  description: "Lorem Ipsun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
