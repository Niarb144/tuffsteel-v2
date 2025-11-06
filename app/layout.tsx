import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tuffsteel Limited",
  description: "Tuffsteel Website ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
