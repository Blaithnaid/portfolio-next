import AboutBg from "@/public/about.jpg";
import type { Metadata } from "next";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
	title: "about me ~ isb",
	description: "a little bit more info about me!",
};

export default function AboutPage() {
	return (
		<div
			className="flex flex-col justify-start items-end p-4 gap-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen"
			style={{ backgroundImage: `url(${AboutBg.src})` }}
		>
			<div className="w-full md:w-2/3 self-center min-h-[15rem] text-left text-lg relative">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="absolute inset-0 bg-[#253956] bg-blend-color-burn mix-blend-color-burn"
				></motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="absolute inset-0 bg-black/50"
				></motion.div>
				<div className="flex flex-col gap-1 border-2 border-white border-dashed justify-between relative z-10 p-4 h-full hover:cursor-default">
					<p>
						i&apos;ve been interested in computers for as long as i
						can remember them existing. my first experience
						programming was in scratch, followed shortly by some
						basic html and css. at around 14 i tried learning c++ to
						program an{" "}
						<a
							href="https://docs.arduino.cc/hardware/uno-rev3/"
							className="underline font-bold text-silver hover:text-silver/80"
						>
							arduino
						</a>
						, but i didn&apos;t get very far.
					</p>
					<p></p>
				</div>
			</div>
		</div>
	);
}
