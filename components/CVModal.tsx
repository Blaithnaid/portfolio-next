import {
	XCircleIcon,
	ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

interface CVModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
			<div className="border-4 border-black bg-white rounded-xl w-full max-w-4xl h-[90vh] relative">
				<iframe
					src="@/public/isb_cv.pdf"
					className="w-full h-full rounded-lg"
					title="my cv"
				/>
			</div>
			<XCircleIcon
				onClick={onClose}
				className="size-10 cursor-pointer absolute right-4 md:top-4 top-1 text-white hover:text-neonpurple transition-colors"
			/>
			<ArrowTopRightOnSquareIcon
				onClick={() => window.open("src/assets/isb_cv.pdf", "_blank")}
				className="size-10 cursor-pointer absolute md:right-4 md:top-16 right-16 top-1 text-white hover:text-neonpurple transition-colors"
			/>
		</div>
	);
}
