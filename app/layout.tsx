import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_15, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const jersey = Jersey_15({
	variable: "--font-jersey",
	subsets: ["latin"],
	weight: "400", // add additional weights as needed
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "A personal portfolio in Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable} ${poppins.variable} antialiased flex flex-col-reverse md:flex-row flex-nowrap h-screen`}
			>
				<div className="flex-grow">{children}</div>
				<Nav />
			</body>
		</html>
	);
}
