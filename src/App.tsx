/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Hammer, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Home,
  Layers,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijMdQ6filPQ-uJtxcMALYdJnTGWEZd-j6iI175Y0X1ReyxT2Y49WY9gUPs-I9Cxw_4UwhUaIcCSYYBAm9A_GFkLvEROR3kj4YqvWJm8Fwf2pt4P4FaslmQZ-rlQC8n7i1JWvafEzOSdrfEGaHE-HoHJxqrNITOC1at5_o5Cv4agKenXLOo120Cke0y_J0/s16000/hero.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWokgQ4FkyA6TRF9bC7FTyoaU436-t-K-KXncWSqP46Mj6HdOZWMfxHkhNjLFoRiyhoHDxka0cZTe48G3R7fv_dzyzccM06vu0CmMylqFYkRaIb7p9GkPUKpvtj7uYdKDP1vssTF_IMYzkakojscUhcFD9cvYMBi8pE2MZdXnRQanxoO90DrHlYpx7-F4/s16000/corremao.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Scroll Reveal Animations
      const revealElements = gsap.utils.toArray('.reveal');
      revealElements.forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Stats Counter Animation
      gsap.from('.stat-number', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%'
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.2
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: 'Estruturas Metálicas', icon: <Layers className="w-6 h-6 animate-float-icon" />, desc: 'Soluções robustas para galpões, coberturas e mezaninos.' },
    { title: 'Elevadores de Carga', icon: <ArrowUpRight className="w-6 h-6 animate-float-icon" />, desc: 'Equipamentos seguros e eficientes para movimentação vertical.' },
    { title: 'Móveis & Design', icon: <Home className="w-6 h-6 animate-float-icon" />, desc: 'Closets, adegas e móveis industriais sob medida.' },
    { title: 'Acabamentos Finos', icon: <CheckCircle2 className="w-6 h-6 animate-float-icon" />, desc: 'Guarda-corpos, escadas e puxadores de alto padrão.' },
    { title: 'Infraestrutura', icon: <Building2 className="w-6 h-6 animate-float-icon" />, desc: 'Quadras, coberturas e chapas para laje.' },
    { title: 'Manutenção', icon: <Wrench className="w-6 h-6 animate-float-icon" />, desc: 'Reparos técnicos e preventivos em estruturas de ferro e aço.' },
  ];

  const differentials = [
    { title: 'Desde 2016', desc: 'Quase uma década de excelência e compromisso com a qualidade.', size: 'col-span-2 md:col-span-1' },
    { title: 'Atendimento Regional', desc: 'Presença forte no Rio, Paty do Alferes e Petrópolis.', size: 'col-span-2 md:col-span-1' },
    { title: 'Projetos Sob Medida', desc: 'Cada peça é única, desenhada para atender sua necessidade específica.', size: 'col-span-2' },
  ];

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col">
      {/* Header */}
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          <div className="flex-shrink-0">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYiMhBtgbcbYieSeALlZnzERBNMdRWSYRJ79tCz4r4gQM9ihiiBbdhEzipIcDZKOIfB5tjD8P_VG_Y1uyGg3QsZIVZLTQ_4C15x-dTxHVKpxBWB3KDHYiZ-6_nvECVCWqJwTkSMWcYJkvLimQKEk-DAtQ-nrBYmH8D7qF6rH5g9cvMzdX7eZpAtP-Xq-o/s320/palhares%20logo.png" 
              alt="Serralheria Palmares" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-accent transition-colors font-medium">Início</a>
            <a href="#servicos" className="text-white hover:text-accent transition-colors font-medium">Serviços</a>
            <a href="#sobre" className="text-white hover:text-accent transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-white hover:text-accent transition-colors font-medium">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/5521999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-primary px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Orçamento</span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden z-50"
              >
                <nav className="flex flex-col space-y-6">
                  <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium hover:text-accent transition-colors">Início</a>
                  <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium hover:text-accent transition-colors">Serviços</a>
                  <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium hover:text-accent transition-colors">Sobre</a>
                  <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium hover:text-accent transition-colors">Contato</a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={heroIndex}
                src={heroImages[heroIndex]} 
                alt="Serralheria Industrial" 
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl hero-content">
              <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Excelência em Metalurgia
              </span>
              <h1 className="text-4xl md:text-6xl text-white mb-6 leading-[1.1] text-balance">
                Transformamos Aço em <span className="text-accent">Soluções Estratégicas</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                Desde 2016, a Serralheria Palmares entrega precisão técnica e design em estruturas metálicas, elevadores de carga e projetos sob medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contato" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                  Falar com Especialista
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#servicos" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all">
                  Nossos Serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-8 md:py-12 bg-primary text-white stats-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2"><span className="stat-number">8</span>+</div>
                <p className="text-sm text-white/60 uppercase tracking-widest font-medium">Anos de Mercado</p>
              </div>
              <div className="reveal">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2"><span className="stat-number">500</span>+</div>
                <p className="text-sm text-white/60 uppercase tracking-widest font-medium">Projetos Entregues</p>
              </div>
              <div className="reveal">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2"><span className="stat-number">3</span></div>
                <p className="text-sm text-white/60 uppercase tracking-widest font-medium">Cidades Atendidas</p>
              </div>
              <div className="reveal">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2"><span className="stat-number">100</span>%</div>
                <p className="text-sm text-white/60 uppercase tracking-widest font-medium">Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-4xl mb-4">Soluções Completas em Serralheria</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Aliamos técnica artesanal com tecnologia industrial para entregar resultados que superam expectativas em durabilidade e estética.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-muted-blue p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid Differentials */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary rounded-3xl p-10 text-white flex flex-col justify-between reveal">
                <div>
                  <ShieldCheck className="w-10 h-10 text-accent mb-6 animate-float-icon" />
                  <h2 className="text-3xl mb-4">Por que escolher a Palmares?</h2>
                  <p className="text-white/70 mb-8 max-w-md">
                    Nossa fundação em 2016 foi baseada em um pilar inegociável: a segurança. Cada estrutura que sai de nossa oficina é testada para suportar as condições mais adversas.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white/80">Recomendado por centenas de clientes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {differentials.map((diff, index) => (
                  <div key={index} className={`${diff.size} bg-gray-50 rounded-3xl p-8 border border-gray-100 reveal hover:bg-accent/5 transition-colors`}>
                    <h3 className="text-xl mb-2">{diff.title}</h3>
                    <p className="text-gray-600 text-sm">{diff.desc}</p>
                  </div>
                ))}
                <div className="col-span-2 bg-accent rounded-3xl p-8 flex items-center justify-between reveal group cursor-pointer">
                  <div>
                    <h3 className="text-primary text-xl mb-1">Solicite uma visita técnica</h3>
                    <p className="text-primary/70 text-sm">Avaliamos seu projeto no local sem compromisso.</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mobile Title */}
              <div className="lg:hidden reveal">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Nossa História</span>
                <h2 className="text-3xl md:text-4xl mb-6">Tradição e Inovação em cada Solda</h2>
              </div>

              {/* Image Column */}
              <div className="reveal order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjooet-Z3-gdTHZHK4m7G8Py_A9iWK2sl3Y5tnduMARj9vjFQEi2VLrW0Rinn9Aq0BYlb5XZOAh-VOEyCoxF-xYuOUEPDx9_-T-rv4GX_nBV1C-wxPy8EqIg0rHQiCFCewbBMBzDaxBVNl1OFSzd-SX2Pp1eKNkyF0oOLymS7ZPLvzv_41WwmTgX1Qwu9k/s16000/sobre.png" 
                    alt="Nossa Oficina" 
                    className="rounded-3xl shadow-2xl w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
                    <p className="text-primary font-bold text-4xl mb-1">2016</p>
                    <p className="text-primary/70 text-xs uppercase tracking-widest font-bold">Ano de Fundação</p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="reveal order-3 lg:order-2">
                {/* Desktop Title */}
                <div className="hidden lg:block">
                  <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Nossa História</span>
                  <h2 className="text-3xl md:text-4xl mb-6">Tradição e Inovação em cada Solda</h2>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    A Serralheria Palmares nasceu da paixão pelo trabalho com metais e da necessidade de oferecer ao mercado do Rio de Janeiro soluções que unissem a força do aço com a leveza do design moderno.
                  </p>
                  <p>
                    Com sedes estratégicas atendendo o Rio, Paty do Alferes e Petrópolis, nos especializamos em transformar desafios estruturais em obras de arte funcionais. Seja um elevador de carga industrial ou um closet minimalista, nossa entrega é pautada pela precisão milimétrica.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {['Equipe Qualificada', 'Materiais Premium', 'Prazos Rigorosos', 'Garantia Estrutural'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle2 className="w-4 h-4 text-accent animate-float-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-4xl mb-4">O que dizem nossos clientes</h2>
              <p className="text-gray-600">A confiança é o nosso maior patrimônio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Ricardo Silva', role: 'Engenheiro Civil', text: 'A Palmares é nossa parceira em todas as obras. A precisão nas estruturas metálicas é impecável.' },
                { name: 'Ana Beatriz', role: 'Arquiteta', text: 'Conseguem executar projetos complexos de design com um acabamento que raramente vejo em serralherias.' },
                { name: 'Marcos Oliveira', role: 'Proprietário de Indústria', text: 'O elevador de carga instalado superou as expectativas de segurança e agilidade. Recomendo muito.' }
              ].map((t, i) => (
                <div key={i} className="bg-muted-blue p-8 rounded-2xl border border-white/10 reveal shadow-lg">
                  <div className="flex gap-1 text-accent mb-4">
                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                  </div>
                  <p className="text-white/80 italic mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contato" className="py-12 md:py-20 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center reveal">
              <h2 className="text-3xl md:text-5xl text-white mb-6">Pronto para iniciar seu projeto?</h2>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                Seja uma pequena reforma ou uma grande estrutura industrial, nossa equipe está pronta para oferecer a melhor solução técnica e comercial.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://wa.me/5521999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                </a>
                <div className="flex items-center gap-4 text-white/60">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 animate-float-icon" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest font-bold">Resposta rápida</p>
                    <p className="text-sm font-medium text-white">Em até 30 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYiMhBtgbcbYieSeALlZnzERBNMdRWSYRJ79tCz4r4gQM9ihiiBbdhEzipIcDZKOIfB5tjD8P_VG_Y1uyGg3QsZIVZLTQ_4C15x-dTxHVKpxBWB3KDHYiZ-6_nvECVCWqJwTkSMWcYJkvLimQKEk-DAtQ-nrBYmH8D7qF6rH5g9cvMzdX7eZpAtP-Xq-o/s320/palhares%20logo.png" 
                alt="Serralheria Palmares" 
                className="h-12 w-auto mb-6"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                Especialistas em estruturas metálicas e soluções sob medida. Qualidade, segurança e design desde 2016.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent animate-float-icon" />
                Onde Estamos
              </h4>
              <ul className="text-white/50 text-sm space-y-3">
                <li>Rio de Janeiro, RJ</li>
                <li>Paty do Alferes, RJ</li>
                <li>Petrópolis, RJ</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <Instagram className="w-4 h-4 text-accent animate-float-icon" />
                Siga-nos
              </h4>
              <a 
                href="https://www.instagram.com/serralheria_palmares" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors text-sm"
              >
                @serralheria_palmares
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              Copyright © 2026 - Serralheria Palmares. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-white/30 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
