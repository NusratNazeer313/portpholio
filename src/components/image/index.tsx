import { motion } from "framer-motion";
import Image from "next/image";

const ImageSession = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -0 }}
      animate={{ opacity: 1, x: -60 }}
      transition={{ duration: 1, delay: 2 }}
      className=" rounded-lg w-1/2 h-5/6 pt-20  mr-32 flex items-center justify-center pb-32"
    >
      <Image
        src="/professional.png"
        width={350}
        height={350}
        alt="Profile Picture"
        className=" object-cover"
      />
    </motion.div>
  );
};

export default ImageSession;
