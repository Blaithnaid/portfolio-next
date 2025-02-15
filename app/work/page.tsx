import type { Metadata } from "next";
import WorkBg from "@/public/work.jpg";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
	title: "my work ~ isb",
	description:
		"a searchable list of my work, organised by the tools or media used to create it",
};

export default function WorkPage() {
	return (
		<div className="w-full">
			<div
				className="flex flex-col justify-start items-start p-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen relative"
				style={{ backgroundImage: `url(${WorkBg.src})` }}
			>
				<div className="w-full md:w-[500px] min-h-56 text-left text-lg relative">
					<div className="absolute inset-0 bg-[#42acac] bg-blend-color-burn mix-blend-color-burn"></div>
					<div className="flex flex-col gap-1 border-2 border-white border-dashed justify-between relative z-10 p-4 h-full">
						<p className="">
							welcome to the portfolio proper! great to have you.
							this is where i keep a catalog of a lot of the work
							i&apos;ve done over the years across different
							disciplines.
						</p>
						<p>
							stuff is organised according to the kind of media it
							incorporates, as well as the
							languages/frameworks/tools used to build it.
						</p>
						<div className="place-self-center mt-4 cursor-default animate-bounce">
							scroll down{" "}
							<div className="inline-block">
								<b>↓↓↓</b>
							</div>{" "}
							to see my work!
						</div>
					</div>
				</div>
			</div>
			<WorkGrid />
		</div>
	);
}
