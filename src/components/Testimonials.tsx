import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Comprou apartamento em Lisboa",
    text:
      "Encontrei o meu apartamento em menos de uma semana. Atendimento incrível!",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    name: "Bruna Costa",
    role: "Alugou em Lisboa",
    text:
      "Processo claro e seguro. Senti-me acompanhada do início ao fim.",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    name: "Tiago Mendes",
    role: "Comprou casa no Porto",
    text:
      "Equipa humana e muito atenciosa. Recomendo de olhos fechados!",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
];

export const Testimonials = () => {
  return (
    <section aria-label="Depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-wide" style={{ color: "#0D3A2E" }}>
            O que os nossos clientes dizem
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: "#555555" }}>
            Histórias reais que inspiram confiança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
            >
              <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#C2855E] text-[#C2855E]" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#000" }}>
                “{t.text}”
              </p>
              <div className="mt-4 md:mt-5 flex items-center gap-2.5 md:gap-3">
                <img src={t.avatar} alt={t.name} className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover ring-1 ring-black/5" />
                <div>
                  <p className="text-sm md:text-base font-semibold" style={{ color: "#0D3A2E" }}>{t.name}</p>
                  <p className="text-xs md:text-sm" style={{ color: "#555555" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
