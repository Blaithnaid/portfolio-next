"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Carousel from "./Carousel";

export default function WorkGrid() {
	const [searchTerm, setSearchTerm] = useState("");

	const projects = [
		{
			title: "nephin.me",
			subheading: "personal portfolio site",
			images: [
				"/projects/nephin-me-1.webp",
				"/projects/nephin-me-2.webp",
				"/projects/nephin-me-3.webp",
				"/projects/nephin-me-4.webp",
			],
			description:
				"this very site you're on right now! built with react and tailwindcss, deployed from a github repo, and hosted on netlify.",
			tags: ["react", "tailwindcss", "web design", "node", "javascript"],
			links: [
				{
					name: "source code",
					url: "https://github.com/Blaithnaid/portfolio-react/",
				},
				{
					name: "live site",
					url: "https://nephin.me/",
				},
			],
		},
		{
			title: "Tinahely Pet Lodge",
			subheading: "pet hotel website for a small business",
			images: [
				"/projects/tinahely-pet-lodge-1.webp",
				"/projects/tinahely-pet-lodge-2.webp",
				"/projects/tinahely-pet-lodge-3.webp",
			],
			description:
				"i built this website for a local pet hotel using wordpress and elementor. it is still running today and has been a great success for the business. i also performed some seo and analytics work on this site.",
			tags: ["wordpress", "elementor", "web design"],
			links: [
				{
					name: "live site",
					url: "https://tinahelypetlodge.ie/",
				},
				{
					name: "google the business",
					url: "https://g.page/Tinahely%20Pet%20Lodge/",
				},
			],
		},
		{
			title: "Spat",
			subheading: "2p local multiplayer card game",
			images: [
				"/projects/spat-1.webp",
				"/projects/spat-2.webp",
				"/projects/spat-3.webp",
				"/projects/spat-4.webp",
			],
			description:
				"i built this in unity with the help of a framework called CardHouse. all the pixel art is custom made by me in aseprite. i'm super duper proud of all the work that went into this.",
			tags: ["unity", "c#", "pixel art", "game design"],
			links: [
				{
					name: "source code",
					url: "https://itch.io/",
				},
			],
		},
		{
			title: "MongoDB Book Manager",
			subheading: "simple CRUD app for managing books via a local API",
			images: [
				"/projects/book-manager-1.webp",
				"/projects/book-manager-2.webp",
			],
			description:
				"this is a simple full-stack app i built to learn more about mongodb and express. it allows you to add, edit, and delete books from a local database. it can also fetch metadata like book covers from the openlibrary api.",
			tags: ["mongodb", "express", "node", "javascript", "bootstrap"],
			links: [
				{
					name: "source code",
					url: "https://github.com/Blaithnaid/drq-project/tree/main/",
				},
			],
		},
		{
			title: "Sitka NG",
			subheading: "music player/manager in an Electron app using Angular",
			images: [
				"/projects/sitka-1.webp",
				"/projects/sitka-2.webp",
				"/projects/sitka-3.webp",
			],
			description:
				"a project i was working on with some good friends. we wanted to make a music player that wasn't ugly or bloated. it was being built in parallel with react, and i was reimplementing it in angular. hopefully it will be finished one day!",
			tags: ["angular", "electron", "javascript", "web design"],
		},
		{
			title: "Jasmine Jewellery",
			subheading: "site for small business of a friend",
			images: [
				"/projects/jasmine-jewellery-1.webp",
				"/projects/jasmine-jewellery-2.webp",
				"/projects/jasmine-jewellery-3.webp",
			],
			description:
				"this is an e-commerce site built as part of a college group project for a friend's jewellery business. it was built with plain html, css, and js. it's hosted on github pages.",
			tags: ["html", "css", "javascript", "web design"],
			links: [
				{
					name: "source code",
					url: "https://github.com/Blaithnaid/jasmine-website/",
				},
				{
					name: "live site",
					url: "https://blaithnaid.github.io/jasmine-website/",
				},
			],
		},
		{
			title: "ATU First Year Website",
			subheading: "guide to being in first year at my college.",
			images: [
				"/projects/atu-first-year-1.webp",
				"/projects/atu-first-year-2.webp",
				"/projects/atu-first-year-3.webp",
			],
			description:
				"built with completely vanilla html, css, and js. it's a simple site that taught me some fundamentals of responsive and accessible web design.",
			tags: ["html", "css", "javascript", "web design"],
			links: [
				{
					name: "source code",
					url: "https://github.com/Blaithnaid/wdsem1",
				},
				{
					name: "live site",
					url: "https://blaithnaid.github.io/wdsem1/",
				},
			],
		},
	];

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
