import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre a <span className="gradient-text">Damaral</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos uma startup de tecnologia especializada em transformar negócios através 
              de soluções digitais inovadoras e inteligentes.
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Damaral Startup nasceu da paixão por tecnologia e do desejo de ajudar empresas 
                a alcançarem seu máximo potencial digital. Com expertise em desenvolvimento web, 
                automação com IA e integrações complexas, oferecemos soluções completas e personalizadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe combina conhecimento técnico avançado com uma abordagem centrada no cliente, 
                garantindo que cada projeto não apenas atenda, mas supere as expectativas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos com as mais modernas tecnologias do mercado, sempre buscando a excelência 
                na entrega e a inovação constante em nossas soluções.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Missão */}
              <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Nossa Missão</h3>
                    <p className="text-muted-foreground">
                      Democratizar o acesso à tecnologia de ponta, fornecendo soluções que impulsionam 
                      o crescimento e a eficiência dos nossos clientes através da inovação contínua.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Visão */}
              <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Nossa Visão</h3>
                    <p className="text-muted-foreground">
                      Ser referência nacional em soluções tecnológicas inovadoras, reconhecida pela 
                      excelência técnica e pelo impacto positivo que geramos nos negócios dos clientes.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Valores */}
              <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Nossos Valores</h3>
                    <p className="text-muted-foreground">
                      Inovação constante, transparência total, compromisso com resultados, 
                      excelência técnica e parceria verdadeira com nossos clientes.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
