import * as motion from "motion/react-client";
import CVSpan from "@/components/CV";
import HomeBg from "@/public/home.webp";

export default function HomePage() {
	return (
			<div
				className="flex flex-col justify-end items-end p-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen"
				style={{ backgroundImage: `url(${HomeBg.src})` }}
			>
				<div className="w-full md:w-[500px] min-h-[15rem] text-left text-lg relative">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="absolute inset-0 bg-[#253956] bg-blend-color-burn mix-blend-color-burn"
					></motion.div>
					<div className="flex flex-col gap-1 border-2 text-white border-white border-dashed justify-between relative z-10 p-4 h-full hover:cursor-default">
						<p>
							<b>hi! i&apos;m iarla.</b> i&apos;m a software
							developer and sound engineer. this is a little
							portfolio website i built to show off some of my
							work and advertise my skills!
						</p>
						<p>
							feel free to have a click around to find out what
							i&apos;m up to, or head straight to my contact page
							(the little envelope in the navbar!) if you want to
							get in touch.
						</p>
						<div>
							just interested in seeing my cv? you can take a look{" "}
							<CVSpan />
						</div>
					</div>
				</div>
			</div>
	);
}
