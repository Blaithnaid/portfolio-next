"use client";
import Carousel from "./Carousel";

interface Project {
	title: string;
	subheading: string;
	images: string[];
	description: string;
	tags: string[];
	links?: { name: string; url: string }[];
}

export default function WorkItem(project: Project) {
	const slides = project.images.map((image) => ({
		type: "image" as const,
		src: image,
	}));

	return (
		<div className="w-full flex flex-col rounded-xs p-0 bg-gunmetal shadow-card shadow-gray-600">
			<div className="w-full aspect-3/2 bg-coral overflow-hidden rounded-t-sm relative">
				<Carousel items={slides} />
			</div>
			<div className="flex flex-col gap-1 cursor-default justify-evenly text-xl py-3 bg-paynesgray font-bold text-center">
				{project.title}
				<div className="text-silver flex justify-center items-center font-jersey font-light px-3 text-pretty">
					-<i className="mx-1.5">{project.subheading}</i>-
				</div>
			</div>
			<div className="flex flex-col justify-between flex-1">
				<div className="px-4 text-pretty font-poppins font-normal text-left p-3">
					{project.description}
				</div>
				<div className="mt-auto">
					<div className="flex flex-row gap-1 px-4 pt-2 text-pretty font-poppins text-left font-normal">
						{project.links?.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noreferrer"
								className="bg-slate-600 bg-opacity-70 p-2 rounded-xs hover:bg-coral"
							>
								{link.name}
							</a>
						))}
					</div>
					<div className="flex flex-row flex-wrap gap-1 px-4 pb-4 pt-2 text-pretty font-poppins font-light text-left text-sm">
						{project.tags.map((tag, index) => (
							<span
								key={index}
								className="bg-slate-100 text-black bg-opacity-70 px-1 py-0.5 rounded-xs"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
