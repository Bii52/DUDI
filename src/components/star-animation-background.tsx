import Image from "next/image";

const images = Array.from({ length: 30 }, (_, i) => `/Star 3_${i}.png`);
const BackgroundStars = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pt-8">
      {images.map((src, index) => {
        const size1 = 500 + index * 20;
        const size2 = 500 + index * 20;
        return (
          <Image
            key={index}
            src={src}
            alt="Pattern"
            width={size1}
            height={size2}
            className="absolute animate-fadeSequence opacity-80
                       max-w-[80vw] max-h-[80vh] 
                       md:max-w-[800px] md:max-h-[800px]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundStars;