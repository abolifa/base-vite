"use client";
import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "زيت الريان",
    text: "من أرقى مزارع عباد الشمس، إلى مائدتك، قمنا بتصنيع زيت طهي عالي الجودة.",
    image: "/images/oil.png",
    side: "left",
    rotate: -10,
    bgImage: "/images/oil-bg.jpg",
    color: "#ff9800",
  },
  {
    title: "تونة الريان",
    text: "تونة الريان هي تونة عالية الجودة، معبأة بعناية للحفاظ على نكهتها وقيمتها الغذائية.",
    image: "/images/tuna.png",
    side: "right",
    rotate: 10,
    bgImage: "/images/tuna-bg.jpg",
    color: "#1e90ff",
  },
  {
    title: "سكر الريان",
    text: "سكر الريان الأبيض هو سكر ممتاز، مثالي ويوفر طعمًا نقيًا ونظيفًا وجودة ثابتة.",
    image: "/images/sugar.png",
    side: "left",
    rotate: -10,
    bgImage: "/images/sugar-bg.jpg",
    color: "#d01717",
  },
];

const Products = () => {
  return (
    <section className="relative w-full">
      {timelineItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative w-full flex flex-col md:flex-row items-center px-4 md:px-8 py-16 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background image - only on desktop */}
          <div
            className={`hidden md:block absolute top-0 h-full w-1/2`}
            style={{
              left: item.side === "right" ? 0 : undefined,
              right: item.side === "left" ? 0 : undefined,
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -2,
            }}
          />
          {/* Dark overlay - only on desktop */}
          <div
            className={`hidden md:block absolute top-0 h-full w-1/2`}
            style={{
              left: item.side === "right" ? 0 : undefined,
              right: item.side === "left" ? 0 : undefined,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: -1,
            }}
          />

          <div
            className={`relative flex flex-col md:flex-row ${
              item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-center max-w-6xl w-full mx-auto gap-8 md:gap-16`}
          >
            {/* Image half */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ rotate: item.rotate }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain"
              />
            </motion.div>

            {/* Text half */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-right px-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-3xl md:text-4xl font-extrabold mb-4"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-[#5c4a35]">
                {item.text.split(" ").map((word, i) =>
                  i === 0 ? (
                    <span key={i} style={{ color: item.color }}>
                      {word + " "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Products;
