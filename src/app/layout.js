import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Birthday Wishes",
  description: "To Zilu From Jithin",
  icons: {
    icon: "./bdayicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link href="/dist/output.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      
      </body>
    </html>
  );
}
