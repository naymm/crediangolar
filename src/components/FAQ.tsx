import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que é o microcrédito?',
    answer:
      'O microcrédito é uma modalidade de financiamento destinada a pessoas e pequenos empreendedores que não têm acesso ao sistema bancário tradicional. Caracteriza-se por oferecer pequenos valores com condições adaptadas à realidade dos beneficiários.',
  },
  {
    question: 'A quem se destina o microcrédito?',
    answer:
      'O microcrédito destina-se a empreendedores individuais, pequenos comerciantes, agricultores familiares e pessoas que desejam iniciar ou expandir um pequeno negócio. É ideal para quem busca valores menores de financiamento com menos burocracia.',
  },
  {
    question: 'Quais as condições do microcrédito?',
    answer:
      'As condições variam conforme o tipo de crédito, mas geralmente incluem taxas de juros competitivas, prazos flexíveis de pagamento, garantias simplificadas e acompanhamento personalizado durante todo o período do empréstimo.',
  },
  {
    question: 'Como solicitar pedido com Microcrédito?',
    answer:
      'Para solicitar, você pode visitar uma de nossas agências, entrar em contato pelo telefone ou utilizar nosso simulador online. Será necessário apresentar documentos de identificação, comprovante de atividade e, em alguns casos, um plano de negócio simplificado.',
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Dúvidas?
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-accent">
              Nós ajudamos
            </h3>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium py-5 hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* View All Button */}
            <Button
              variant="outline"
              className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Ver todas perguntas...
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
