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
			className="min-h-screen overflow-y-auto bg-cover bg-center p-4 gap-4"
			style={{ backgroundImage: `url(${AboutBg.src})` }}
		>
			<div className="grid grid-cols-2 gap-4 w-3/4 mx-auto">
				<div className="text-left text-lg relative">
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
					<div className="flex flex-col gap-4 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
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
							understandable the syntax was and that&apos;s when
							the coding bug really bit me.
						</p>
						<p>
							i&apos;ve hopped from one language to the next
							depending on what project caught me, and later, what
							i was learning in university.
						</p>
					</div>
				</div>
				<div className="text-left text-lg relative">
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
					<div className="flex flex-col gap-4 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
						<p>
							some stuff i&apos;d really like to learn more
							about/work on in future:
						</p>
						<ul className="text-pretty list-disc list-inside">
							<li>
								learn rust or zig or some other low-level
								language!
							</li>
							<li>train/customise an llm</li>
							<li>
								get more familiar with linux (i&apos;m writing
								this sentence on{" "}
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
							<li>
								get better at testing with breakpoints and using
								an attached debugger!
							</li>
						</ul>
					</div>
				</div>
				<div className="text-left text-lg relative">
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
					<div className="flex flex-col gap-1 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
						<p>
							i&apos;m also a sound engineer! (at least, i
							dabble). i became interested after attending a
							number of youth music workshops when i was a
							teenager, and went on to study Studio & Live Sound
							Production in a Level 6 QQI course when i was 18
						</p>
						<p>
							i worked part-time as a sound engineer for a while
							and really really enjoyed it. i&apos;d love an
							opportunity to get more experience!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
