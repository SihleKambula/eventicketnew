import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Eventicket",
  description: "Made by K-Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
