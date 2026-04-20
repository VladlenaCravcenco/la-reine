import { useEffect, useState } from "react";

const links = [
  { id: "despre", label: "Despre" },
  { id: "colectie", label: "Colecție" },
  { id: "experienta", label: "Experiență" },
  { id: "programare", label: "Programare" },
  { id: "contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md py-4 border-b border-noir/10"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl tracking-[0.3em] text-noir"
          aria-label="LA REINE"
        >
          LA REINE
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="editorial-eyebrow text-noir/80 hover:text-noir underline-grow"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("programare")}
          className="hidden md:inline-block editorial-eyebrow border border-noir px-5 py-3 hover:bg-noir hover:text-ivory transition-colors duration-500"
        >
          Programează
        </button>

        <button
          className="md:hidden editorial-eyebrow"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? "Închide" : "Meniu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-noir/10 mt-4 animate-fade-in">
          <div className="container flex flex-col gap-5 py-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-display text-3xl text-left text-noir"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("programare")}
              className="editorial-eyebrow border border-noir px-5 py-3 mt-4 self-start"
            >
              Programează o probă
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
