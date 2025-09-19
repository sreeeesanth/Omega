
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// load the client-only Particles component dynamically

const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground/ParticlesBackground"),
  
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omega 2023",
  description: "Annual Tech Fest of Govt. Model Engineering College",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} relative min-h-screen`}
        style={{ backgroundColor: "#b12020" }} // deep red background
      >
        {/* Particle Background (client only, behind everything) */}
        <ParticlesBackground  />
        {children}
      </body>
    </html>
  );
}
