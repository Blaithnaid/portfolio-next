"use client";
import { useState } from "react";
import WorkItem from "./WorkItem";
import projects from "@/public/projects.json";

export default function WorkGrid() {
	const [searchTerm, setSearchTerm] = useState("");

	const projectsFiltered = projects.filter((project) => {
		return project.title
			.toLowerCase()
			.includes(searchTerm.trim().toLowerCase());
	});

	return (
		<div className="bg-slate-600 bg-opacity-70 p-2 h-max w-full flex flex-col justify-start items-center">
			<div className="bg-gunmetal my-4 md:my-8 shadow-lg shadow-gunmetal h-16 rounded-xs w-full md:max-w-[30rem] md:w-full">
				<input
					type="text"
					placeholder="search projects..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full h-full bg-transparent text-silver px-4 focus:outline-hidden"
				/>
			</div>
			<div className="max-h-max min-h-64 w-full md:px-10 lg:px-20 grid grid-cols-1 auto-rows-max lg:grid-cols-2 gap-8 p-2">
				{projectsFiltered.map((project, index) => (
					<WorkItem key={index} {...project} />
				))}
			</div>
		</div>
	);
}
