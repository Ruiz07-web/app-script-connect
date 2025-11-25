import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Fashion Elite",
      description: "Plataforma completa de e-commerce com sistema de pagamentos integrado, gestão de estoque e painel administrativo avançado.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "Desenvolvimento Web"
    },
    {
      title: "ChatBot Atendimento IA",
      description: "Sistema de atendimento automatizado com IA que responde dúvidas frequentes e encaminha casos complexos para humanos.",
      tags: ["Python", "OpenAI", "FastAPI", "Redis"],
      category: "Automação com IA"
    },
    {
      title: "Integração Multi-Plataforma",
      description: "Solução que conecta CRM, ERP e plataformas de vendas, sincronizando dados em tempo real e eliminando processos manuais.",
      tags: ["API REST", "Webhooks", "PostgreSQL", "Docker"],
      category: "Integrações"
    },
    {
      title: "Dashboard Analytics Avançado",
      description: "Painel de análise de dados com visualizações interativas, relatórios personalizados e integração com múltiplas fontes de dados.",
      tags: ["TypeScript", "D3.js", "GraphQL", "AWS"],
      category: "Desenvolvimento Web"
    },
    {
      title: "Automação de Marketing",
      description: "Sistema de automação que gerencia campanhas, segmenta leads e dispara comunicações personalizadas baseadas em comportamento.",
      tags: ["Python", "Celery", "ML", "PostgreSQL"],
      category: "Automação com IA"
    },
    {
      title: "Arquitetura Microserviços",
      description: "Migração de aplicação monolítica para arquitetura de microserviços, aumentando escalabilidade e reduzindo custos.",
      tags: ["Kubernetes", "Docker", "gRPC", "Terraform"],
      category: "Arquitetura"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nosso <span className="gradient-text">Portfólio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos com excelência e inovação
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-purple group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Category Badge */}
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="pt-2 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalhes
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Interessado em ver mais projetos?{" "}
              <button 
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="text-primary hover:underline font-medium"
              >
                Entre em contato
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
