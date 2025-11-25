import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO, TechCorp",
      content: "A Damaral transformou completamente nossa presença digital. O site desenvolvido é moderno, rápido e trouxe um aumento de 150% nas conversões. Equipe altamente profissional!",
      rating: 5,
      initials: "CM"
    },
    {
      name: "Mariana Silva",
      role: "Diretora de Marketing, Fashion Store",
      content: "A automação com IA implementada pela Damaral revolucionou nosso atendimento ao cliente. Reduzimos em 70% o tempo de resposta e aumentamos significativamente a satisfação.",
      rating: 5,
      initials: "MS"
    },
    {
      name: "Roberto Alves",
      role: "CTO, LogiSmart",
      content: "As integrações desenvolvidas conectaram perfeitamente nossos sistemas. A equipe demonstrou expertise técnica excepcional e entregou além do esperado.",
      rating: 5,
      initials: "RA"
    },
    {
      name: "Juliana Costa",
      role: "Fundadora, EduTech",
      content: "Profissionalismo do início ao fim. A Damaral entendeu nossa visão e criou uma plataforma que superou nossas expectativas. Recomendo fortemente!",
      rating: 5,
      initials: "JC"
    },
    {
      name: "Felipe Santos",
      role: "Gerente de TI, FinanceHub",
      content: "A arquitetura de soluções proposta foi fundamental para escalarmos nosso produto. Consultoria de altíssimo nível com resultados mensuráveis.",
      rating: 5,
      initials: "FS"
    },
    {
      name: "Ana Paula Lima",
      role: "Proprietária, BeautyLux",
      content: "Do planejamento à entrega, tudo perfeito. O site é lindo, funcional e já está gerando ótimos resultados para nosso negócio. Equipe nota 10!",
      rating: 5,
      initials: "AL"
    }
  ];

  return (
    <section id="depoimentos" className="py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Que Dizem <span className="gradient-text">Nossos Clientes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de empresas que transformaram seus negócios com nossas soluções
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-purple"
              >
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">5.0</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">150+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">85%</div>
              <div className="text-sm text-muted-foreground">Clientes Recorrentes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
