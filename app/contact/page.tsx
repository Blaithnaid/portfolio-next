import Head from "next/head";
import ContactBg from "@/public/contact.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "contact ~ isb",
	description: "get in touch with me!",
};

export default function ContactPage() {
	return (
		<div
			className="flex flex-row flex-nowrap bg-cover bg-center w-full h-screen relative"
			style={{ backgroundImage: `url(${ContactBg.src})` }}
		>
			<Head>
				<title>contact ~ isb</title>
			</Head>
		</div>
	);
}
