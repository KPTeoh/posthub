
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./auth/Nav"
import QueryWrapper from "./auth/QueryWrapper";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"]});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
