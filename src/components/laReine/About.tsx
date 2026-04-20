import about from "@/assets/about.jpg";

const About = () => {
  return (
    <section id="despre" className="relative bg-ivory py-32 md:py-48">
      <div className="container grid grid-cols-12 gap-6 md:gap-12">
        {/* Eyebrow */}
        <div className="col-span-12 md:col-span-3">
          <p className="editorial-eyebrow text-noir/60">— 01 / Despre</p>
        </div>

        {/* Headline */}
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-4xl md:text-7xl leading-[1] text-noir tracking-tight">
            Rochia de mireasă <br />
            nu este o alegere. <br />
            <span className="italic text-gold">Este o declarație.</span>
          </h2>
        </div>

        {/* Image — offset */}
        <div className="col-span-12 md:col-span-5 md:col-start-2 mt-16 md:mt-24">
          <div className="hover-zoom overflow-hidden">
            <img
              src={about}
              alt="Atelier LA REINE — interior salon"
              loading="lazy"
              className="w-full h-[60vh] object-cover"
            />
          </div>
          <p className="editorial-eyebrow text-noir/60 mt-4">
            Atelier · Bucharest
          </p>
        </div>

        {/* Text — overlapping right */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 mt-8 md:mt-48 space-y-6">
          <div className="gold-line w-24" />
          <p className="font-display text-2xl md:text-3xl italic text-noir/90 leading-snug">
            Selectăm fiecare piesă cu o atenție obsesivă pentru formă, textură și prezență.
          </p>
          <p className="text-noir/70 leading-relaxed text-base md:text-lg">
            Pentru femeia care caută mai mult decât frumusețe — caută identitate.
            Aici, fiecare probă devine un moment personal. Fără grabă. Fără compromisuri.
          </p>
          <p className="font-display italic text-xl text-noir mt-12">
            — Nu este despre rochie. <br />
            <span className="pl-12">Este despre cum te simți în ea.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
