import { Rubik } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import Navbar from "@/components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Eventicket",
  description: "Made by K-Innovation",
};

const bgColor = {
  backgroundColor: "#F5F5F5",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={bgColor} className={rubik.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
