import { Code, Brain, Zap, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Sites",
      description: "Criamos websites modernos, responsivos e otimizados para SEO. Do landing page ao e-commerce complexo, desenvolvemos soluções web completas que convertem visitantes em clientes.",
      features: [
        "Design responsivo e moderno",
        "Performance otimizada",
        "SEO e acessibilidade",
        "Integração com CMS"
      ]
    },
    {
      icon: Brain,
      title: "Automações com IA",
      description: "Implementamos soluções de inteligência artificial para automatizar processos, aumentar eficiência e reduzir custos operacionais. Do chatbot ao processamento avançado de dados.",
      features: [
        "Chatbots inteligentes",
        "Análise de dados com IA",
        "Automação de workflows",
        "Machine Learning customizado"
      ]
    },
    {
      icon: Network,
      title: "Integrações com API",
      description: "Conectamos sistemas e plataformas através de integrações robustas e seguras. Facilitamos a comunicação entre diferentes ferramentas do seu ecossistema digital.",
      features: [
        "APIs RESTful e GraphQL",
        "Webhooks e automações",
        "Sincronização de dados",
        "Integrações personalizadas"
      ]
    },
    {
      icon: Zap,
      title: "Arquitetura de Soluções",
      description: "Planejamos e estruturamos arquiteturas escaláveis e resilientes. Consultoria técnica para garantir que sua infraestrutura suporte o crescimento do seu negócio.",
      features: [
        "Arquitetura cloud-native",
        "Microserviços e APIs",
        "Escalabilidade e segurança",
        "DevOps e CI/CD"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas de tecnologia para impulsionar seu negócio no mundo digital
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-purple group"
                >
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
