interface GradientBgProps {
  bgcolor: string;
  bgblendmode?: string;
  mixblendmode?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function GradientTile({
  bgcolor,
  bgblendmode = "color-burn",
  mixblendmode = "color-burn",
  className = "",
  children,
}: GradientBgProps) {
  return (
    <div className={className}>
      <div
        className={`absolute inset-0 ${bgcolor} bg-blend-${bgblendmode} mix-blend-${mixblendmode} animate-fade-in`}
      />
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
      />
      {children}
    </div>
  );
}
