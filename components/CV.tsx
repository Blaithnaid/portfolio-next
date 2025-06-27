"use client";
import { useState } from "react";
import {
  XCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVSpan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="text-slate-300 font-bold hover:text-neonpurple underline cursor-pointer bg-transparent border-none p-0"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open CV Modal"
      >
        here
      </button>
      .
      <CVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="border-4 border-black bg-white rounded-xl w-full max-w-4xl h-full relative">
        <iframe className="w-full h-full rounded-lg" title="my cv"
          src="https://docs.google.com/document/d/e/2PACX-1vRTlJYKGOiL-4Ead72dde2yTWjAlife9gTdbZ7t-JUFIuQ0-DPo2vTC_P8_bYzjR2W824AgaQMu_IqK/pub?embedded=true"></iframe>
      </div>
      <XCircleIcon
        onClick={onClose}
        className="size-10 cursor-pointer absolute right-4 md:top-4 top-1 text-white hover:text-neonpurple transition-colors"
      />
      <ArrowTopRightOnSquareIcon
        onClick={() => window.open("https://docs.google.com/document/d/e/2PACX-1vRTlJYKGOiL-4Ead72dde2yTWjAlife9gTdbZ7t-JUFIuQ0-DPo2vTC_P8_bYzjR2W824AgaQMu_IqK/pub?embedded=true", "_blank")}
        className="size-10 cursor-pointer absolute md:right-4 md:top-16 right-16 top-1 text-white hover:text-neonpurple transition-colors"
      />
    </div>
  );
}
