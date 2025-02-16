"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
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
		href: "/",
		title: "home",
		solidIcon: HomeSolid,
		outlineIcon: HomeOutline,
	},
	{
		name: "work",
		href: "/work",
		title: "my work",
		solidIcon: BriefcaseSolid,
		outlineIcon: BriefcaseOutline,
	},
	{
		name: "about me",
		href: "/about",
		title: "about me",
		solidIcon: InformationCircleSolid,
		outlineIcon: InformationCircleOutline,
	},
	{
		name: "contact",
		href: "/contact",
		title: "contact",
		solidIcon: EnvelopeSolid,
		outlineIcon: EnvelopeOutline,
	},
];

export default function Nav() {
	const pathname = usePathname();
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	// Find the navigation entry whose href matches the current path
	const currentNavItem = navigation.find((nav) => nav.href === pathname);
	const currentPage = currentNavItem?.title || " ";

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
			{/* Page title with animation */}
			<div className="flex flex-nowrap flex-col shrink items-center overflow-hidden justify-center align-center pb-5">
				<motion.div
					className="text-white text-center w-fit text-2xl font-poppins cursor-default underline"
					key={currentPage}
					initial={{ translateY: -100 }}
					animate={{ translateY: 0 }}
					transition={{ duration: 0.3, type: "spring" }}
				>
					<b>{currentPage}</b>
				</motion.div>
				<div className="flex flex-row items-center gap-2 mt-5">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="font-poppins text-white flex items-center gap-2 hover:underline hover:text-white relative"
							onMouseEnter={() => setHoveredItem(item.name)}
							onMouseLeave={() => setHoveredItem(null)}
						>
							<div className="relative w-10 h-10">
								{/* Solid icon */}
								<item.solidIcon
									className={`absolute inset-0 transition-opacity duration-200 ${
										hoveredItem === item.name
											? "opacity-0"
											: "opacity-100"
									}`}
								/>
								{/* Outline icon */}
								<item.outlineIcon
									className={`absolute inset-0 transition-opacity duration-200 ${
										hoveredItem === item.name
											? "opacity-100"
											: "opacity-0"
									}`}
									title={item.name}
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="h-0 md:h-12 text-silver text-md cursor-default text-center hidden md:block">
				site by me ~{" "}
				<a
					className="text-neonpurple hover:text-indigo-600 cursor-pointer underline"
					href="https://github.com/Blaithnaid/portfolio-next"
				>
					view on github
				</a>
			</div>
		</div>
	);
}
