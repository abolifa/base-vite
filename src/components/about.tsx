"use client";

import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-dvh py-24 md:py-32 bg-[#f8f8f8] overflow-hidden"
    >
      <motion.div
        className="absolute top-10 left-10 text-green-600 opacity-30"
        initial={{ y: 20, rotate: -5, opacity: 0 }}
        whileInView={{ y: 0, rotate: 0, opacity: 0.3 }}
        transition={{
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1],
        }}
        viewport={{ once: true }}
      >
        <Leaf size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 text-yellow-500 opacity-30"
        initial={{ y: 20, rotate: 10, opacity: 0 }}
        whileInView={{ y: 0, rotate: 0, opacity: 0.3 }}
        transition={{
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1],
        }}
        viewport={{ once: true }}
        style={{ transform: "translateX(-50%)" }}
      >
        <Wheat size={70} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 w-24 h-24 rounded-full bg-green-200 shadow-xl opacity-50"
        animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: 0 }}
        viewport={{ once: true }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            من نحن؟
          </h2>

          <p className="text-gray-700 text-lg leading-[1.9] mb-6 text-justify">
            نحن في{" "}
            <span className="font-bold text-gray-900">
              شركة وطن المجد لاستيراد المواد الغذائية
            </span>{" "}
            نعدّ من الشركات الرائدة في مجال استيراد وتوزيع المنتجات الغذائية
            داخل السوق الليبي. نعمل بكل التزام واحترافية لتوفير منتجات عالية
            الجودة تلبي احتياجات المستهلكين وتواكب تطلعات السوق المحلي.
          </p>

          <p className="text-gray-700 text-lg leading-[1.9] text-justify">
            نعتمد في عملنا على شبكة واسعة من الموردين حول العالم، مما يضمن
            تنوعاً كبيراً في المنتجات وجودة ثابتة في كل شحنة. نركز على بناء
            شراكات طويلة الأمد مع عملائنا من خلال الثقة، الدقة، والحرص المستمر
            على تقديم أفضل الحلول في عالم استيراد المواد الغذائية.
          </p>

          <motion.a
            href="#products"
            className="inline-block mt-8 px-10 py-4 rounded-full font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            استعرض منتجاتنا
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[360px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/about.png"
              alt="صورة تعريفية عن شركة وطن المجد"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
