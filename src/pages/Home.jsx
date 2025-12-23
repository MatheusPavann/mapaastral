import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle2,
  Sparkles,
  Moon,
  Sun,
  Heart,
  Target,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  Users,
  FileText,
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const AFFILIATE_LINK = "https://go.hotmart.com/I103442651S?ap=28e4";

const FAQ_ITEMS = [
  {
    question: "Como recebo meu Mapa Astral?",
    answer: "Após a confirmação do pagamento, você receberá seu Mapa Astral completo diretamente no seu e-mail em poucos minutos. É um arquivo digital que pode ser lido em qualquer dispositivo."
  },
  {
    question: "Preciso saber sobre astrologia para entender?",
    answer: "Não! O Mapa Astral Completo da Evoluna foi criado com linguagem simples e direta, perfeita tanto para iniciantes quanto para quem já conhece astrologia."
  },
  {
    question: "O mapa é realmente personalizado para mim?",
    answer: "Sim! Cada mapa é gerado especificamente com base nos seus dados de nascimento (data, hora e local), revelando informações únicas sobre você."
  },
  {
    question: "E se eu não gostar do produto?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
  },
  {
    question: "Quanto tempo leva para eu receber?",
    answer: "O mapa é entregue automaticamente após a confirmação do pagamento, geralmente em poucos minutos. Você receberá um e-mail com o link de acesso."
  }
];

const BENEFITS = [
  {
    icon: Sun,
    title: "Sol, Lua e Ascendente",
    description: "Descubra sua essência, emoções e como você se apresenta ao mundo"
  },
  {
    icon: Heart,
    title: "Vênus e Relacionamentos",
    description: "Entenda seu padrão de amor, atração e como você se conecta"
  },
  {
    icon: Target,
    title: "Propósito de Vida",
    description: "Revele sua missão, talentos naturais e caminho de realização"
  },
  {
    icon: Zap,
    title: "Marte e Energia",
    description: "Compreenda sua força de ação, motivação e como você luta pelo que quer"
  },
  {
    icon: Sparkles,
    title: "Nodo Norte",
    description: "Descubra o caminho da sua evolução espiritual nesta vida"
  },
  {
    icon: Moon,
    title: "Meio do Céu",
    description: "Entenda sua vocação, carreira ideal e reconhecimento público"
  }
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <motion.div
      initial={false}
      className="border-b border-purple-500/20"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:text-amber-400 transition-colors"
      >
        <span className="text-lg font-medium text-white/90">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-purple-200/80 leading-relaxed">{item.answer}</p>
      </motion.div>
    </motion.div>
  );
}

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBuyClick = () => {
    window.open(AFFILIATE_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      <StarField />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              +200 mil mapas entregues
            </Badge>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Descubra os Segredos
            </span>
            <br />
            <span className="text-white">da Sua Alma</span>
          </h1>

          <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            O Mapa Astral Completo da Evoluna revela quem você realmente é, 
            seus talentos ocultos, desafios e o caminho para sua realização pessoal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleBuyClick}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl shadow-amber-500/30 group"
              >
                QUERO MEU MAPA ASTRAL
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-purple-300/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Entrega imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>+100 páginas</span>
            </div>
          </div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-amber-400 font-semibold">4.7</span>
            <span className="text-purple-300/60">(656 avaliações)</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof Bar */}
      <section className="relative py-8 bg-purple-900/30 border-y border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">+200 mil</div>
              <div className="text-sm text-purple-300/70">Mapas Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">+100</div>
              <div className="text-sm text-purple-300/70">Páginas de Conteúdo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">4.7★</div>
              <div className="text-sm text-purple-300/70">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Que Você Vai{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Descobrir
              </span>
            </h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto">
              Mais de 100 páginas de autoconhecimento profundo, revelando todos os aspectos da sua personalidade e destino
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-purple-900/20 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-purple-200/70">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4" />
                Garantia de 7 dias ou seu dinheiro de volta
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comece Sua Jornada de{" "}
                <span className="text-amber-400">Autoconhecimento</span>
              </h2>

              <p className="text-purple-200/80 mb-8 max-w-xl mx-auto">
                Em poucos minutos você terá acesso ao guia mais completo sobre você mesmo. 
                Descubra quem você realmente é.
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    12x de R$10,43
                  </div>
                  <div className="text-purple-300/60 text-sm">
                    Pagamento único • Acesso imediato
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleBuyClick}
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-12 py-7 rounded-full shadow-2xl shadow-amber-500/30 group"
                  >
                    QUERO MEU MAPA ASTRAL AGORA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <div className="flex items-center gap-4 mt-4 text-sm text-purple-300/60">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=40&h=40&fit=crop&auto=format" 
                    alt="Pagamento seguro"
                    className="w-8 h-8 rounded opacity-60"
                  />
                  <span>Pagamento 100% seguro via Hotmart</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-24 px-4 bg-purple-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Está{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Incluso
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              "Análise completa do Sol, Lua e Ascendente",
              "Posição e influência de todos os planetas",
              "Seus talentos naturais e pontos fortes",
              "Desafios e áreas de crescimento",
              "Compatibilidade e relacionamentos (Vênus)",
              "Carreira e vocação (Meio do Céu)",
              "Missão de vida e propósito (Nodo Norte)",
              "Dicas práticas para cada área da vida",
              "Mais de 100 páginas de conteúdo personalizado"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-purple-900/30 rounded-xl p-4 border border-purple-500/20"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Dizem{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nossos Clientes
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-amber-400 font-semibold">4.7 de 5</span>
              <span className="text-purple-300/60">• 656 avaliações verificadas</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marina S.",
                text: "Fiquei impressionada com a precisão! Parece que alguém me conhece melhor do que eu mesma. Recomendo muito!",
                rating: 5
              },
              {
                name: "Carlos R.",
                text: "Muito completo e detalhado. Me ajudou a entender padrões que eu repetia na vida. Vale cada centavo.",
                rating: 5
              },
              {
                name: "Juliana M.",
                text: "A linguagem é super acessível, mesmo sem entender de astrologia consegui aproveitar 100%. Amei!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-purple-900/20 border-purple-500/20 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-purple-200/80 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.name[0]}
                      </div>
                      <span className="text-white/90 font-medium">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 bg-purple-950/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Está Pronto Para Se{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Conhecer?
              </span>
            </h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto mb-8">
              Mais de 200 mil pessoas já descobriram seus segredos através do Mapa Astral Completo. 
              Agora é a sua vez.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleBuyClick}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xl px-14 py-8 rounded-full shadow-2xl shadow-amber-500/30 group"
              >
                QUERO MEU MAPA ASTRAL AGORA
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-purple-300/50 text-sm mt-6">
              Garantia incondicional de 7 dias • Entrega imediata por e-mail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-950/50">
        <div className="max-w-6xl mx-auto text-center text-purple-300/50 text-sm">
          <p>Este produto é vendido e entregue pela Hotmart. Ao clicar no botão de compra, você será redirecionado para a página segura de pagamento.</p>
          <p className="mt-2">© {new Date().getFullYear()} • Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}