import "@/styles/globals.css";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
