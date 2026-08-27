import { CartProvider } from "@/context/CartContext";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="main-container">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}