import ContactBg from "@/public/contact.webp";
import type { Metadata } from "next";
import * as motion from "motion/react-client";
import EmailForm from "@/components/EmailForm";

export const metadata: Metadata = {
	title: "contact ~ isb",
	description: "get in touch with me!",
};

export default function ContactPage() {
	return (
		<div
			className="flex flex-col justify-center items-center p-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen"
			style={{ backgroundImage: `url(${ContactBg.src})` }}
		>
			<div className="w-full md:w-[28rem] text-left text-lg relative">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="absolute inset-0 bg-[#817059] bg-blend-color-burn mix-blend-color-burn"
				></motion.div>
				<div className="flex flex-col gap-1 border-2 border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
					<p>looking to get in contact with me?</p>
					<p className="mb-4">
						fill out some details below and it&apos;ll go straight
						to me!
					</p>
					<EmailForm />
				</div>
			</div>
		</div>
	);
}
// #42acac
