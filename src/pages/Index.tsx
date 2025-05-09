
import React from 'react';
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Truck, Package, Navigation, Car } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Frete Rodoviário",
      description: "Transporte terrestre para cargas de todos os tamanhos com cobertura em todo o território nacional.",
      icon: Truck
    },
    {
      title: "Frete Aéreo",
      description: "Solução rápida para entregas urgentes e de alto valor com segurança e eficiência.",
      icon: Package
    },
    {
      title: "Frete Marítimo",
      description: "Transporte internacional de cargas com os melhores custos para importação e exportação.",
      icon: Navigation
    },
    {
      title: "Transporte Multimodal",
      description: "Combinação de diferentes modais para otimizar a logística e reduzir custos operacionais.",
      icon: Car
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Preencha o formulário",
      description: "Informe a origem, destino e detalhes da sua carga através do nosso formulário simples e rápido."
    },
    {
      number: 2,
      title: "Receba cotações",
      description: "Nossa equipe analisará sua solicitação e enviará as melhores opções de frete com preços competitivos."
    },
    {
      number: 3,
      title: "Escolha a melhor opção",
      description: "Compare as cotações de diferentes transportadoras e selecione a que melhor atende suas necessidades."
    },
    {
      number: 4,
      title: "Acompanhe sua entrega",
      description: "Após a confirmação, você poderá rastrear sua carga em tempo real até o destino final."
    }
  ];

  const testimonials = [
    {
      quote: "O serviço de cotação da FastFreight foi extremamente eficiente. Conseguimos reduzir nossos custos logísticos em 30% com as opções apresentadas.",
      name: "Mariana Silva",
      role: "Gerente de Logística na TechCorp"
    },
    {
      quote: "Facilidade e rapidez no processo de cotação. Em menos de 24 horas já tínhamos todas as informações necessárias para tomar a melhor decisão.",
      name: "Ricardo Oliveira",
      role: "Diretor de Operações na ComexBrasil"
    },
    {
      quote: "A equipe está sempre disponível para esclarecer dúvidas e resolver problemas. O suporte é excelente e o preço é justo. Recomendo!",
      name: "Fernanda Carvalho",
      role: "Coordenadora de Importação na GlobalTrade"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-freight-900 to-freight-700 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cotação de fretes rápida e econômica para sua empresa
              </h1>
              <p className="text-xl text-freight-100 mb-8">
                Compare preços de fretes com as melhores transportadoras do Brasil e economize tempo e dinheiro em sua logística.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote-form" className="bg-white text-freight-800 hover:bg-freight-50 font-medium px-6 py-3 rounded-lg text-center">
                  Solicitar Cotação
                </a>
                <a href="#how-it-works" className="border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-lg text-center">
                  Como Funciona
                </a>
              </div>
            </div>
            <div id="quote-form">
              <QuoteForm />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-freight-800 mb-4">Nossos Serviços de Frete</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para todos os tipos de transporte de cargas, com foco em eficiência, segurança e economia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-freight-800 mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seu frete em apenas 4 passos simples, rápidos e transparentes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-freight-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15k+</div>
              <p className="text-freight-100">Cotações Mensais</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <p className="text-freight-100">Transportadoras Parceiras</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-freight-100">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <p className="text-freight-100">Economia Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-freight-800 mb-4">O que nossos clientes dizem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Centenas de empresas já economizam tempo e dinheiro com nossas cotações de frete.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-freight-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para economizar em seus fretes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite sua cotação agora e receba as melhores ofertas de transporte para sua empresa.
          </p>
          <a 
            href="#quote-form" 
            className="inline-block bg-white text-freight-800 hover:bg-freight-50 font-medium px-8 py-3 rounded-lg text-lg"
          >
            Solicitar Cotação Gratuita
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
