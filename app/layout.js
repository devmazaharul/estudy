import { Space_Grotesk} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const RobotoFont = Space_Grotesk({
  weight:"400",
  subsets:["latin"],
  style:"normal"
})

export const metadata = {
  title: "Welcome",
  description: "Develop by mazaharul islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${RobotoFont.className}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
