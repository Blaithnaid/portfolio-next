import type { Metadata } from "next";
import { Jersey_15, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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
	title: "home ~ isb",
	description: "my personal portfolio in Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jersey.variable} ${poppins.variable} antialiased flex flex-col-reverse md:flex-row h-screen`}
			>
				<div className="flex-grow overflow-y-auto">{children}</div>
				<div className="shrink-0 h-screen sticky top-0">
					<Nav />
				</div>
			</body>
		</html>
	);
}
