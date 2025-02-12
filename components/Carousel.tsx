"use client";

import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid"; // or any icon library you prefer
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MagnifyingGlassPlusIcon,
} from "@heroicons/react/16/solid";

type CarouselItem = {
	type: "image" | "video";
	src: string;
	alt?: string;
};

interface MyCarouselProps {
	items: CarouselItem[];
	initialIndex?: number;
}

export default function Carousel({ items, initialIndex = 0 }: MyCarouselProps) {
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
			<div className="relative w-full h-full flex items-center justify-center bg-black">
				{/* Left arrow */}
				<ChevronLeftIcon
					className="absolute left-2 z-10 size-8 bg-black/30 rounded-full hover:bg-black/50 hover:cursor-pointer"
					onClick={prevSlide}
					aria-label="Previous Slide"
				/>

				{/* Main item */}
				<div className="relative w-full h-full flex items-center justify-center">
					{currentItem.type === "image" ? (
						<Image
							src={currentItem.src}
							alt={currentItem.alt || ""}
							fill
							style={{ objectFit: "cover" }}
							sizes="100vw"
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

				{/* Right arrow */}
				<ChevronRightIcon
					className="absolute right-2 z-10 size-8 bg-black/30 rounded-xl hover:bg-black/50 hover:cursor-pointer"
					onClick={nextSlide}
					aria-label="Next Slide"
				/>

				{/* Icon to open lightbox */}
				<button
					className="absolute bottom-2 right-2 z-10 p-1 bg-black/50 text-white rounded hover:bg-black/70"
					onClick={() => setLightboxOpen(true)}
					aria-label="Open Lightbox"
				>
					<MagnifyingGlassPlusIcon className="h-5 w-5" />
				</button>
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
