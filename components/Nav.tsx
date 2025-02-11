"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HomeIcon as HomeSolid,
	BriefcaseIcon as BriefcaseSolid,
	EnvelopeIcon as EnvelopeSolid,
	InformationCircleIcon as InformationCircleSolid,
} from "@heroicons/react/24/solid";
import {
	HomeIcon as HomeOutline,
	BriefcaseIcon as BriefcaseOutline,
	EnvelopeIcon as EnvelopeOutline,
	InformationCircleIcon as InformationCircleOutline,
} from "@heroicons/react/24/outline";

const navigation = [
	{
		name: "home",
		href: "/home",
		solidIcon: HomeSolid,
		outlineIcon: HomeOutline,
	},
	{
		name: "work",
		href: "/work",
		solidIcon: BriefcaseSolid,
		outlineIcon: BriefcaseOutline,
	},
	{
		name: "about me",
		href: "/about",
		solidIcon: InformationCircleSolid,
		outlineIcon: InformationCircleOutline,
	},
	{
		name: "contact",
		href: "/contact",
		solidIcon: EnvelopeSolid,
		outlineIcon: EnvelopeOutline,
	},
];

const pageTitles = {
	"/home": "home",
	"/work": "my work",
	"/about": "about me",
	"/contact": "contact",
};

export default function Nav() {
	const pathname = usePathname() as keyof typeof pageTitles;
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState("");

	useEffect(() => {
		setCurrentPage(pageTitles[pathname] || "home");
	}, [pathname]);

	return (
		<div className="flex flex-col justify-between min-w-80 bg-gunmetal md:h-screen">
			<div className="cursor-default font-jersey p-3 text-4xl text-center">
				<div className="mb-0.5">
					<a
						className="text-coral cursor-pointer"
						href="/home"
						title="return to home"
					>
						iarla sparrow burke
					</a>
				</div>
				<div className="bg-paynesgray h-0.5 w-full rounded-2xl"></div>
				<div className="text-silver font-poppins text-sm mt-0.5">
					software developer ~ sound engineer
				</div>
			</div>
			<div className="flex flex-nowrap flex-col shrink items-center justify-center align-center pb-5">
				<div className="text-white text-2xl font-poppins cursor-default underline">
					<b>{currentPage}</b>
				</div>
				<div className="flex flex-row items-center gap-2 mt-5">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="font-poppins text-white hover:underline hover:text-white flex items-center gap-2"
							onMouseEnter={() => setHoveredItem(item.name)}
							onMouseLeave={() => setHoveredItem(null)}
						>
							{hoveredItem === item.name ? (
								<item.outlineIcon
									className="h-10 w-10"
									title={item.name}
								/>
							) : (
								<item.solidIcon className="h-10 w-10" />
							)}
						</Link>
					))}
				</div>
			</div>
			<div className="h-0 md:h-12 text-silver text-md cursor-default text-center">
				site by me ~{" "}
				<a className="text-neonpurple hover:text-indigo-600 cursor-pointer underline">
					view on github
				</a>
			</div>
		</div>
	);
}
