import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';
import { WaitlistForm } from '@/components/WaitlistForm';
import { products } from './products';

interface ProductCardProps {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const thirdRow = products.slice(4);

  return (
    <div
      ref={ref}
      className="min-h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <SparklesText
          text="Turn Your Vision into Reality"
          colors={{ first: "#9E7AFF", second: "#6E59A5" }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
        />
        <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-400">
          Transform static business plans and resumes into dynamic, interactive mind maps. 
          Turn ideas into actionable strategies with real-time insights and intelligent visualisations.
        </p>
        <WaitlistForm />
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};