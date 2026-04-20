const words = [
  "Identitate",
  "Rafinament",
  "Caracter",
  "Prezență",
  "Eleganță",
  "Ritual",
];

const Marquee = () => {
  const list = [...words, ...words, ...words];
  return (
    <section className="bg-noir py-10 md:py-14 overflow-hidden border-y border-gold/30">
      <div className="flex gap-16 marquee-track whitespace-nowrap">
        {list.map((w, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl italic text-ivory/90 flex items-center gap-16"
          >
            {w}
            <span className="text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
