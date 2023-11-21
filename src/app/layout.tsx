import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import "@/app/styles/animate.css";
import "@/app/styles/global.css";
import "@/app/styles/stars.scss";
import ThemeRegistry from "@/app/themeRegistry";
import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import "normalize.css";

export const metadata: Metadata = {
  title: "JSH | Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id={"page-top"}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
