import insp1 from "@/assets/insp-1.jpg";
import insp2 from "@/assets/insp-2.jpg";
import insp3 from "@/assets/insp-3.jpg";
import dress4 from "@/assets/dress-4.jpg";

const Inspiration = () => {
  return (
    <section className="bg-ivory py-32 md:py-48">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 mb-20">
          <div className="col-span-12 md:col-span-3">
            <p className="editorial-eyebrow text-noir/60">— 05 / Galerie</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-8xl text-noir leading-[0.95]">
              <span className="italic">Inspirație.</span>
            </h2>
            <p className="font-display text-xl md:text-2xl italic text-noir/70 mt-6 max-w-xl">
              Fragmente de eleganță. Detalii care spun mai mult decât cuvintele.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7 hover-zoom overflow-hidden h-[60vh]">
            <img src={insp2} alt="Inspirație" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 md:mt-24 hover-zoom overflow-hidden h-[40vh]">
            <img src={insp1} alt="Inspirație" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-4 md:col-start-2 hover-zoom overflow-hidden h-[40vh]">
            <img src={insp3} alt="Inspirație" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-6 md:col-span-5 hover-zoom overflow-hidden h-[50vh]">
            <img src={dress4} alt="Inspirație" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
