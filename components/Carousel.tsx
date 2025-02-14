"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
	XMarkIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	MagnifyingGlassPlusIcon,
} from "@heroicons/react/16/solid";

type CarouselItem = {
	type: "image" | "video";
	src: string;
	alt?: string;
};

interface CarouselProps {
	items: CarouselItem[];
	initialIndex?: number;
}

export default function Carousel({ items, initialIndex = 0 }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [lightboxOpen, setLightboxOpen] = useState(false);

	const currentItem = items[currentIndex];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % items.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
	};

	return (
		<>
			{/* Carousel container */}
			<div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
				{/* Main item */}
				<div className="relative w-full h-full flex items-center justify-center">
					{currentItem.type === "image" ? (
						<Image
							src={currentItem.src}
							alt={currentItem.alt || ""}
							fill
							style={{ objectFit: "cover" }}
							sizes="100vw"
							onClick={() => setLightboxOpen(true)}
							className="hover:cursor-pointer"
						/>
					) : (
						<iframe
							src={currentItem.src}
							title="YouTube video"
							frameBorder="0"
							allowFullScreen
							className="w-full h-full"
						/>
					)}
				</div>
				<div className="h-fit w-full bg-gunmetal flex items-center">
					<div className="flex justify-center w-full h-6 p-0 ">
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className="group flex-grow relative cursor-pointer bg-transparent border-none p-0 first:pl-2 last:pr-2 focus:outline-none"
								aria-label={`Go to slide ${index + 1}`}
							>
								{/* The circle is absolutely centered, but the parent is fully clickable */}
								<div
									className={`
										absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
										w-[95%] h-2.5 rounded-full
										${index === currentIndex ? "bg-white" : "bg-white/30"}
										group-hover:bg-white/50 transition-colors duration-75
									`}
								/>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Lightbox Overlay */}
			{lightboxOpen && (
				<div className="fixed inset-0 z-20 flex items-center justify-center bg-black/80">
					<button
						className="absolute top-10 right-10 text-white hover:text-gray-300"
						onClick={() => setLightboxOpen(false)}
						aria-label="Close Lightbox"
					>
						<XMarkIcon className="h-8 w-8" />
					</button>
					<div className="relative w-[80vw] h-[80vh]">
						{currentItem.type === "image" ? (
							<Image
								src={currentItem.src}
								alt={currentItem.alt || ""}
								fill
								style={{ objectFit: "contain" }}
								sizes="90vw"
							/>
						) : (
							<iframe
								src={currentItem.src}
								title="YouTube video"
								frameBorder="0"
								allowFullScreen
								className="w-full h-full"
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
}
