import Image from "next/image";
import {
	RenderSlideProps,
	SlideImage,
	isImageFitCover,
	isImageSlide,
	useLightboxProps,
	useLightboxState,
} from "yet-another-react-lightbox";

interface Slide {
	width: number;
	height: number;
	src: string;
	blurDataURL?: string;
}

function isNextJsImage(slide: SlideImage): slide is Slide {
	return (
		isImageSlide(slide) &&
		typeof slide.width === "number" &&
		typeof slide.height === "number"
	);
}

export function NextJsImage({
	slide,
	offset,
	rect,
}: RenderSlideProps<SlideImage>) {
	const {
		on: { click },
		carousel: { imageFit },
	} = useLightboxProps();

	const { currentIndex } = useLightboxState();

	const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

	if (!isNextJsImage(slide)) return undefined;

	const width = !cover
		? Math.round(
				Math.min(rect.width, (rect.height / slide.height) * slide.width)
		  )
		: rect.width;

	const height = !cover
		? Math.round(
				Math.min(rect.height, (rect.width / slide.width) * slide.height)
		  )
		: rect.height;

	return (
		<div style={{ position: "relative", width, height }}>
			<Image
				fill
				src={slide.src}
				alt=""
				loading="eager"
				draggable={false}
				placeholder={slide.blurDataURL ? "blur" : undefined}
				style={{
					objectFit: cover ? "cover" : "contain",
					cursor: click ? "pointer" : undefined,
				}}
				sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
				onClick={
					offset === 0
						? () => click?.({ index: currentIndex })
						: undefined
				}
			/>
		</div>
	);
}

export default function WorkLightbox({
	slide,
	offset,
	rect,
}: RenderSlideProps<SlideImage>) {
	const {
		on: { click },
		carousel: { imageFit },
	} = useLightboxProps();

	const { currentIndex } = useLightboxState();

	const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

	if (!isNextJsImage(slide)) return undefined;

	const width = !cover
		? Math.round(
				Math.min(rect.width, (rect.height / slide.height) * slide.width)
		  )
		: rect.width;

	const height = !cover
		? Math.round(
				Math.min(rect.height, (rect.width / slide.width) * slide.height)
		  )
		: rect.height;

	return (
		<div style={{ position: "relative", width, height }}>
			<Image
				fill
				src={slide.src}
				alt=""
				loading="eager"
				draggable={false}
				placeholder={slide.blurDataURL ? "blur" : undefined}
				style={{
					objectFit: cover ? "cover" : "contain",
					cursor: click ? "pointer" : undefined,
				}}
				sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
				onClick={
					offset === 0
						? () => click?.({ index: currentIndex })
						: undefined
				}
			/>
		</div>
	);
}
