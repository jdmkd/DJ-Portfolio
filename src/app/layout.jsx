import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio-main",
  description: "A Full-Stack Web Developer Portfolio.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head> */}
      <meta charSet="UTF-8" />
        {/* <link
          rel="icon"
          type="image/svg+xml"
          href="../assets/werewolf-symbol.svg"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href={iconx} sizes="any" type="image/svg+xml" /> */}
        {/* <link rel="icon" type='image/svg+xml' href='/favicon.ico'/> */}

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
        
      {/* </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
