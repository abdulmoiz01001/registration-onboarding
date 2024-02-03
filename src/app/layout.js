// Importing the Inter font from google fonts
import { Inter } from "next/font/google";
// Importing the global css file
import "./globals.css";
// Inmporting the Toaster from react-hot-toast
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });  // Creating the Inter font

export const metadata = {  // Creating the metadata for the website
  title: "Registration Onboarding Design",
  description: "Created by Abdul Moiz",
};

export default function RootLayout({ children }) {  // Creating the RootLayout
 
  // JSX

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
