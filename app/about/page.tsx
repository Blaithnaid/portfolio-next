import Head from "next/head";
import AboutBg from "@/public/about.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "about me ~ isb",
	description: "a little bit more info about me!",
};

export default function AboutPage() {
	return (
		<div
			className="flex flex-row flex-nowrap bg-cover bg-center w-full h-screen relative"
			style={{ backgroundImage: `url(${AboutBg.src})` }}
		>
			<Head>
				<title>about me ~ isb</title>
			</Head>
		</div>
	);
}
