import * as motion from "motion/react-client";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`absolute inset-0 ${bgcolor} bg-blend-${bgblendmode} mix-blend-${mixblendmode}`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50"
      ></motion.div>
    </>
  );
}

