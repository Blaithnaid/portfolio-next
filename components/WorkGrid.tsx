"use client";
import { useState } from "react";
import Head from "next/head";
import Carousel from "./Carousel";
import projects from "@/public/projects.json";

export default function WorkGrid() {
	const [searchTerm, setSearchTerm] = useState("");

	const projectsFiltered = projects.filter((project) => {
		return project.title
			.toLowerCase()
			.includes(searchTerm.trim().toLowerCase());
	});

	const allImages = projectsFiltered.flatMap((proj) => proj.images);

	return (
		<>
			{/* preload all images */}
			{/* <Head>
				{allImages.map((imgSrc) => (
					<link key={imgSrc} rel="preload" as="image" href={imgSrc} />
				))}
			</Head> */}
			<div className="bg-slate-600 bg-opacity-70 p-2 h-max w-full flex flex-col justify-start items-center">
				<div className="bg-gunmetal my-4 md:my-8 shadow-lg shadow-gunmetal h-16 rounded-sm w-full md:max-w-[30rem] md:w-full">
					<input
						type="text"
						placeholder="search projects..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full h-full bg-transparent text-silver px-4 focus:outline-none"
					/>
				</div>
				<div className="max-h-max min-h-64 w-full md:px-10 lg:px-20 grid grid-cols-1 auto-rows-max lg:grid-cols-2 gap-8 p-2">
					{/* map the projects from the projects array into card elements, inside a grid */}
					{projectsFiltered.map((project, index) => {
						const slides = project.images.map((image) => ({
							type: "image" as "image",
							src: image,
						}));

						return (
							<div
								key={index}
								className="w-full flex flex-col rounded-sm p-0 bg-gunmetal shadow-card shadow-gray-600"
							>
								<div className="w-full aspect-[3/2] bg-coral overflow-hidden rounded-t-sm relative">
									<Carousel items={slides} />
								</div>
								<div className="flex flex-col gap-1 cursor-default justify-evenly text-xl py-3 bg-paynesgray font-bold text-center">
									{project.title}
									<div className="text-silver flex justify-center items-center font-jersey font-light px-3 text-pretty">
										-
										<i className="mx-1.5">
											{project.subheading}
										</i>
										-
									</div>
								</div>
								<div className="flex flex-col justify-between flex-1">
									<div className="px-4 text-pretty font-poppins font-normal text-left p-3">
										{project.description}
									</div>
									<div className="mt-auto">
										<div className="flex flex-row gap-1 px-4 pt-2 text-pretty font-poppins text-left font-normal">
											{project.links?.map(
												(link, index) => (
													<a
														key={index}
														href={link.url}
														target="_blank"
														rel="noreferrer"
														className="bg-slate-600 bg-opacity-70 p-2 rounded-sm hover:bg-coral transition-colors duration-150"
													>
														{link.name}
													</a>
												)
											)}
										</div>
										<div className="flex flex-row flex-wrap gap-1 px-4 pb-4 pt-2 text-pretty font-poppins font-light text-left text-sm">
											{project.tags.map((tag, index) => (
												<span
													key={index}
													className="bg-slate-100 text-black bg-opacity-70 px-1 py-0.5 rounded-sm"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
