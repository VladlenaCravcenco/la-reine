import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBride from "@/assets/hero-bride.jpg";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image drifts down slowly, text drifts up faster
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const descriptorY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const eyebrowY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ivory"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={heroBride}
          alt="LA REINE — mireasă editorial"
          className="h-full w-full object-cover object-center kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/70 via-ivory/20 to-ivory/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 via-transparent to-ivory/30" />
      </motion.div>

      {/* Top eyebrow */}
      <motion.div
        className="relative container pt-32 md:pt-40"
        style={{ y: eyebrowY, opacity }}
      >
        <p
          className="editorial-eyebrow text-noir reveal-fade"
          style={{ animationDelay: "0.2s" }}
        >
          Bridal Atelier · Bucharest · Est. 2024
        </p>
      </motion.div>

      {/* Main composition */}
      <div className="relative container mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-8 items-end">
        <motion.div
          className="col-span-12 md:col-span-8"
          style={{ y: titleY, opacity }}
        >
          <h1 className="display-xl text-noir text-[14vw] md:text-[10vw] leading-[0.85]">
            <span className="block reveal-up" style={{ animationDelay: "0.3s" }}>
              LA
            </span>
            <span
              className="block italic reveal-up pl-[6vw] md:pl-[10vw]"
              style={{ animationDelay: "0.55s" }}
            >
              Reine
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-4 flex md:flex-col md:justify-end gap-6 mt-6 md:mt-0 md:pb-8"
          style={{ y: descriptorY, opacity }}
        >
          <div className="reveal-up" style={{ animationDelay: "0.9s" }}>
            <p className="editorial-eyebrow text-noir mb-3">
              Modern Bridal Dresses
            </p>
            <p className="font-display text-lg md:text-xl italic text-noir/80 leading-snug">
              Rochii pentru femeia care nu urmează reguli — le definește.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        className="absolute bottom-10 inset-x-0 container flex items-end justify-between"
        style={{ opacity }}
      >
        <div className="reveal-fade" style={{ animationDelay: "1.2s" }}>
          <button
            onClick={() => scrollTo("programare")}
            className="group inline-flex items-center gap-4 editorial-eyebrow text-noir border-b border-noir pb-2 hover:gap-6 transition-all duration-500"
          >
            Programează o probă
            <span className="inline-block w-10 h-px bg-noir transition-all group-hover:w-16" />
          </button>
        </div>
        <div
          className="hidden md:block editorial-eyebrow text-noir/70 reveal-fade"
          style={{ animationDelay: "1.4s" }}
        >
          Scroll ↓
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
