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
			className="flex flex-col justify-start items-center p-4 gap-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen"
			style={{ backgroundImage: `url(${AboutBg.src})` }}
		>
			<div className="grid grid-cols-2 auto-rows-fr gap-4 w-4/5 h-full">
				<div className="w-full self-center text-left text-lg relative">
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
					<div className="flex flex-col gap-1 border-2 text-white border-white border-dashed justify-between relative z-10 p-4 h-full hover:cursor-default">
						<p>
							i&apos;ve been interested in computers for as long
							as i can remember knowing they existed. my first
							experience programming was in scratch, followed
							shortly by some basic html and css. at around 14 i
							tried learning c++ to program an{" "}
							<a
								href="https://docs.arduino.cc/hardware/uno-rev3/"
								className="underline font-bold text-silver hover:text-silver/80"
							>
								arduino
							</a>
							, but i didn&apos;t get very far.
						</p>
						<p>
							finally, when i was around 15 or 16, i started
							following a course on python 3. i loved how easily
							understandable the syntax was
						</p>
						<p></p>
					</div>
				</div>
				<div className="w-full self-center text-left text-lg relative">
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
					<div className="flex flex-col gap-1 border-2 text-white border-white border-dashed justify-between relative z-10 p-4 h-full hover:cursor-default">
						<p>
							some stuff i&apos;d really like to learn more
							about/work on in future:
						</p>
						<ul className="list-disc list-inside">
							<li>
								learn rust or zig or some other low-level
								language!
							</li>
							<li>train/customise an llm</li>
							<li>
								get more familiar with linux (i'm writing this
								sentence on{" "}
								<a
									className="underline font-bold text-silver hover:text-silver/80"
									href="https://manjaro.org/"
								>
									manjaro
								</a>
								!)
							</li>
							<li>
								finish out some of the projects listed on the
								other page :P
							</li>
							<li>item 1</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
