import heroBride from "@/assets/hero-bride.jpg";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ivory">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="LA REINE — mireasă editorial"
          className="h-full w-full object-cover object-center kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/70 via-ivory/20 to-ivory/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 via-transparent to-ivory/30" />
      </div>

      {/* Top eyebrow */}
      <div className="relative container pt-32 md:pt-40">
        <p className="editorial-eyebrow text-noir reveal-fade" style={{ animationDelay: "0.2s" }}>
          Bridal Atelier · Bucharest · Est. 2024
        </p>
      </div>

      {/* Main composition */}
      <div className="relative container mt-16 md:mt-24 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <h1 className="display-xl text-noir text-[18vw] md:text-[14vw] leading-[0.85]">
            <span className="block reveal-up" style={{ animationDelay: "0.3s" }}>
              LA
            </span>
            <span
              className="block italic reveal-up pl-[8vw] md:pl-[18vw]"
              style={{ animationDelay: "0.55s" }}
            >
              Reine
            </span>
          </h1>
        </div>

        <div className="col-span-12 md:col-span-3 flex md:flex-col md:justify-end gap-6 mt-6 md:mt-0">
          <div className="reveal-up" style={{ animationDelay: "0.9s" }}>
            <p className="editorial-eyebrow text-noir mb-3">Modern Bridal Dresses</p>
            <p className="font-display text-xl md:text-2xl italic text-noir/80 leading-snug">
              Rochii pentru femeia care nu urmează reguli — le definește.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-10 inset-x-0 container flex items-end justify-between">
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
      </div>
    </section>
  );
};

export default Hero;
