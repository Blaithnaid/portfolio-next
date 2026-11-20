interface GradientBgProps {
  bgcolor: string;
  bgblendmode?: string;
  mixblendmode?: string;
}

export default function GradientBg({
  bgcolor,
  bgblendmode = "color-burn",
  mixblendmode = "color-burn",
}: GradientBgProps) {
  return (
    <>
      <div
        className={`absolute inset-0 ${bgcolor} bg-blend-${bgblendmode} mix-blend-${mixblendmode} animate-fade-in`}
      />
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
      />
    </>
  );
}
