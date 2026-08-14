"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Ferpec Commerce e gostaria de atendimento para encontrar o produto ideal.",
);
const gmailSubject = encodeURIComponent("Contato pelo site da Ferpec Commerce");
const gmailBody = encodeURIComponent(
  "Olá, equipe Ferpec Commerce! Vim pelo site e gostaria de mais informações.",
);
const supplierSubject = encodeURIComponent("Proposta comercial para a Ferpec Commerce");
const supplierBody = encodeURIComponent(
  "Olá, equipe Ferpec Commerce! Gostaria de apresentar nossa empresa e avaliar uma possível parceria comercial.",
);

const links = {
  whatsapp: `https://wa.me/5519983524481?text=${whatsappMessage}`,
  instagram: "https://www.instagram.com/ferpeccommerce/",
  facebook: "https://www.facebook.com/ferpeccommerce/",
  magalu: "https://www.magazineluiza.com.br/lojista/ferpeccommerce/",
  mercadoLivre: "https://www.mercadolivre.com.br/pagina/ferpecferramentas",
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=ferpec%40ferpec.com.br&su=${gmailSubject}&body=${gmailBody}`,
  supplierGmail: `https://mail.google.com/mail/?view=cm&fs=1&to=ferpec%40ferpec.com.br&su=${supplierSubject}&body=${supplierBody}`,
};

const categories = [
  {
    number: "01",
    icon: Bike,
    image: "/media/category-moto.jpg",
    href: "https://lista.mercadolivre.com.br/pagina/ferpecferramentas/lista/acessorios-veiculos/",
    title: "Motocicletas",
    text: "Ferramentas para manutenção de motocicletas, selecionadas para oficinas e profissionais que buscam eficiência.",
  },
  {
    number: "02",
    icon: Sprout,
    image: "/media/category-garden.jpg",
    href: "https://lista.mercadolivre.com.br/pagina/ferpecferramentas/lista/casa-moveis-decoracao/",
    title: "Jardinagem",
    text: "Ferramentas e suportes para vasos que unem praticidade, organização e cuidado em jardins e áreas externas.",
  },
  {
    number: "03",
    icon: Wrench,
    image: "/media/category-tools.jpg",
    href: "https://lista.mercadolivre.com.br/pagina/ferpecferramentas/lista/ferramentas/",
    title: "Ferramentas e equipamentos",
    text: "Ferramentas manuais, acessórios e equipamentos para uso profissional e cotidiano.",
  },
  {
    number: "04",
    icon: Scale,
    image: "/media/category-anthropometric.webp",
    href: "https://lista.mercadolivre.com.br/pagina/ferpecferramentas/lista/saude/",
    title: "Balanças e equipamentos antropométricos",
    text: "Soluções para pesagem e avaliação antropométrica, com equipamentos selecionados para medições precisas.",
  },
];

const suppliers = [
  { src: "/brand/galmar.png", name: "Galmar", slug: "galmar" },
  { src: "/brand/lupus-display.png", name: "Lupus", slug: "lupus" },
  { src: "/brand/bremen-display.png", name: "Bremen", slug: "bremen" },
  { src: "/brand/digimess-mark.png", name: "Digimess", slug: "digimess", tagline: "Instrumentos de precisão" },
  { src: "/brand/balmak-mark.png", name: "Balmak", slug: "balmak", tagline: "Evolução. Revolução." },
  { src: "/brand/tramontina.svg", name: "Tramontina", slug: "tramontina" },
  { src: "/brand/kingtools-display.png", name: "Kingtools", slug: "kingtools" },
  { src: "/brand/vilubri-display.png", name: "Vilubri", slug: "vilubri" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function BrandLogo() {
  return (
    <a href="#inicio" className="brand" aria-label="Ferpec Commerce — início">
      <img src="/brand/ferpec-transparent.png" alt="Ferpec Commerce" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <div className="nav-brand-group"><BrandLogo /><span className="brand-divider" /><span className="brand-tag">COMMERCE<small>VENDA ONLINE</small></span></div>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#categorias">Categorias</a>
            <a href="#onde-comprar">Onde comprar</a>
            <a href="#fornecedores">Marcas</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="nav-cta desktop-cta" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Ferpec pelo WhatsApp" title="WhatsApp Ferpec">
            <FaWhatsapp />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="mobile-menu-label">Navegação</span>
          <a href="#inicio" onClick={closeMenu}><span>01</span> Início</a>
          <a href="#sobre" onClick={closeMenu}><span>02</span> Sobre</a>
          <a href="#categorias" onClick={closeMenu}><span>03</span> Categorias</a>
          <a href="#onde-comprar" onClick={closeMenu}><span>04</span> Onde comprar</a>
          <a href="#fornecedores" onClick={closeMenu}><span>05</span> Marcas</a>
          <a href="#contato" onClick={closeMenu}><span>06</span> Contato</a>
          <a className="mobile-whatsapp" href={links.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp size={20} /> Falar pelo WhatsApp</a>
        </div>
      </div>

      <section id="inicio" className="hero">
        <div className="hero-media" aria-hidden="true"><img src="/media/hero-ecommerce.png" alt="" /></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Revenda multimarcas • Comércio eletrônico</div>
            <h1>Produtos e equipamentos <span>para diferentes necessidades.</span></h1>
            <p>
              Ferramentas, equipamentos e soluções de marcas reconhecidas para profissionais, empresas e consumidores em todo o Brasil.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#categorias">Ver categorias <ChevronRight size={18} /></a>
              <a className="button button-ghost" href="#onde-comprar">Onde comprar <ArrowDown size={17} /></a>
            </div>
            <p className="hero-expansion">Portfólio em constante expansão.</p>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>Acompanhe a Ferpec</span>
            <div className="hero-socials">
              <a className="social-instagram" href={links.instagram} target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
              <a className="social-facebook" href={links.facebook} target="_blank" rel="noreferrer"><FaFacebookF /> Facebook</a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="about section-pad">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <span className="section-kicker">01 — Quem somos</span>
            <h2>Revenda multimarcas.<br /><em>Presença digital.</em></h2>
          </Reveal>
          <Reveal className="about-content" delay={120}>
            <p className="about-lead">A <strong>Ferpec Commerce</strong> é uma revenda multimarcas com atuação nos principais canais de comércio eletrônico do Brasil.</p>
            <p>Selecionamos e comercializamos produtos e equipamentos de marcas reconhecidas, com atuação em diferentes categorias e canais de venda online.</p>
          </Reveal>
        </div>
        <div className="container about-panels">
          <Reveal className="about-panel about-panel-dark" delay={80}><span className="panel-index">PORTFÓLIO</span><h3>Seleção multimarcas com espaço para crescer.</h3><div className="panel-graphic"><ShieldCheck /></div></Reveal>
          <Reveal className="about-panel about-panel-yellow" delay={160}><span className="panel-index">CANAIS</span><h3>Presença nos principais marketplaces.</h3><div className="panel-graphic"><Zap /></div></Reveal>
          <Reveal className="about-panel about-panel-light" delay={240}><span className="panel-index">PARCERIAS</span><h3>Relações comerciais de longo prazo.</h3><div className="panel-graphic"><Sparkles /></div></Reveal>
        </div>
      </section>

      <section id="categorias" className="categories section-pad">
        <div className="container section-head">
          <Reveal><span className="section-kicker section-kicker-light">02 — Nossas categorias</span><h2>Soluções certas para<br /><em>cada tipo de desafio.</em></h2></Reveal>
        </div>
        <div className="container category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} className={`category-card ${category.number === "04" ? "category-scale-card" : ""}`} delay={index * 80}>
                <div className="category-photo"><img src={category.image} alt={category.number === "04" ? "Balança antropométrica com estadiômetro" : `Produtos para ${category.title.toLowerCase()}`} loading="lazy" /><div className="category-top"><span>{category.number}</span><Icon /></div></div>
                <div className="category-copy"><h3>{category.title}</h3><p>{category.text}</p></div>
                <a href={category.href} target="_blank" rel="noreferrer" aria-label={`Ver produtos de ${category.title} na loja oficial da Ferpec`}>Ver produtos <ChevronRight size={18} /></a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="onde-comprar" className="marketplaces section-pad">
        <div className="container market-layout">
          <Reveal className="market-copy"><span className="section-kicker">03 — Onde comprar</span><h2>Canais oficiais.<br /><em>Compra com confiança.</em></h2><p>Encontre os produtos Ferpec nos principais marketplaces, com pagamento protegido. Enviamos para todo o Brasil.</p><div className="market-checks"><span><Check size={16} /> Pagamento seguro</span><span><Check size={16} /> Enviamos para todo o Brasil</span><span><Check size={16} /> Canais oficiais Ferpec</span></div></Reveal>
          <div className="market-cards">
            <Reveal className="market-card market-ml" delay={100}><div className="market-logo"><img src="/logos/mercado-livre.svg" alt="Mercado Livre" /></div><span className="market-overline">LOJA OFICIAL</span><p>Confira os produtos Ferpec disponíveis no Mercado Livre.</p><a href={links.mercadoLivre} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a></Reveal>
            <Reveal className="market-card market-magalu" delay={180}><div className="market-logo"><img src="/logos/magalu.svg" alt="Magalu" /></div><span className="market-overline">LOJA OFICIAL</span><p>Confira os produtos Ferpec disponíveis no Magazine Luiza.</p><a href={links.magalu} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a></Reveal>
          </div>
        </div>
      </section>

      <section id="fornecedores" className="suppliers section-pad">
        <div className="container suppliers-head"><Reveal><span className="section-kicker">04 — Marcas parceiras</span><h2>Grandes marcas.<br /><em>Escolhas de confiança.</em></h2></Reveal><Reveal delay={100}><p>Um portfólio multimarcas construído com fornecedores de diferentes segmentos.</p></Reveal></div>
        <div className="container supplier-grid">
          {suppliers.map((supplier, index) => <Reveal key={supplier.name} className={`supplier-card supplier-card-${supplier.slug}`} delay={(index % 4) * 60}><span>{String(index + 1).padStart(2, "0")}</span><div className="supplier-logo-lockup"><img src={supplier.src} alt={`Logo ${supplier.name}`} loading="lazy" />{"tagline" in supplier && <strong className="supplier-lockup-tagline">{supplier.tagline}</strong>}</div><small>{supplier.name}</small></Reveal>)}
        </div>
        <Reveal className="container supplier-partner" delay={120}>
          <div><span className="section-kicker">NOVAS PARCERIAS</span><h3>Quer sua marca no portfólio Ferpec?</h3></div>
          <div className="supplier-partner-copy"><p>A Ferpec trabalha com revenda multimarcas e está constantemente avaliando novos produtos, fornecedores e categorias.</p><p>Atuamos nos principais canais de comércio eletrônico do Brasil e buscamos parcerias comerciais de longo prazo com fabricantes, importadores e distribuidores.</p><a className="button button-partner" href={links.supplierGmail} target="_blank" rel="noreferrer">Quero fornecer para a Ferpec <ArrowRight size={18} /></a></div>
        </Reveal>
      </section>

      <section className="social-section section-pad">
        <div className="container social-layout">
          <Reveal className="social-copy"><span className="section-kicker section-kicker-light">05 — Redes sociais</span><h2>Novidades, produtos<br />e ofertas no seu feed.</h2><p>Acompanhe os canais oficiais da Ferpec Commerce.</p></Reveal>
          <div className="social-cards">
            <Reveal delay={80}><a className="social-card social-card-instagram" href={links.instagram} target="_blank" rel="noreferrer"><FaInstagram /><span><small>SIGA NO</small><strong>Instagram</strong><em>@ferpeccommerce</em></span><ArrowRight /></a></Reveal>
            <Reveal delay={150}><a className="social-card social-card-facebook" href={links.facebook} target="_blank" rel="noreferrer"><FaFacebookF /><span><small>ACOMPANHE NO</small><strong>Facebook</strong><em>Ferpec Commerce</em></span><ArrowRight /></a></Reveal>
          </div>
        </div>
      </section>

      <section id="contato" className="contact section-pad">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="container contact-layout">
          <Reveal className="contact-copy"><span className="section-kicker section-kicker-light">06 — Fale com a Ferpec</span><h2>Precisa de ajuda<br /><em>para escolher?</em></h2><p>Nossa equipe orienta você sobre os produtos disponíveis e os canais oficiais de compra.</p><a className="button button-whatsapp contact-button" href={links.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp size={21} /> Chamar no WhatsApp <ArrowRight size={18} /></a></Reveal>
          <Reveal className="contact-card" delay={140}><span className="contact-card-label">CANAIS DE ATENDIMENTO</span><a href="tel:+5519983524481"><Phone /><span><small>Telefone / WhatsApp</small><strong>(19) 9 8352-4481</strong></span><ArrowRight className="contact-arrow" /></a><a href={links.gmail} target="_blank" rel="noreferrer"><Mail /><span><small>E-mail</small><strong>ferpec@ferpec.com.br</strong></span><ArrowRight className="contact-arrow" /></a><a href="https://www.google.com/maps/search/?api=1&query=Rua+Monte+Libano+210+Jardim+Alfa+Santa+Barbara+d%27Oeste+SP" target="_blank" rel="noreferrer"><MapPin /><span><small>Endereço</small><strong>Rua Monte Líbano, 210<br />Jardim Alfa — Santa Bárbara d’Oeste/SP</strong></span><ArrowRight className="contact-arrow" /></a><div className="contact-cep">CEP 13450-605</div></Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><BrandLogo /><p>Revenda multimarcas com atuação nos principais canais de comércio eletrônico do Brasil.</p><div className="footer-socials"><a className="instagram" href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a className="facebook" href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a><a className="whatsapp" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a></div></div>
          <div className="footer-nav"><span>NAVEGAÇÃO</span><a href="#sobre">Sobre a Ferpec</a><a href="#categorias">Categorias</a><a href="#fornecedores">Marcas</a><a href="#contato">Contato</a></div>
          <div className="footer-nav"><span>COMPRE ONLINE</span><a href={links.mercadoLivre} target="_blank" rel="noreferrer">Mercado Livre</a><a href={links.magalu} target="_blank" rel="noreferrer">Magazine Luiza</a><a href={links.whatsapp} target="_blank" rel="noreferrer">Atendimento via WhatsApp</a></div>
          <div className="footer-contact"><span>CONTATO</span><a href="tel:+5519983524481">(19) 9 8352-4481</a><a href={links.gmail} target="_blank" rel="noreferrer">ferpec@ferpec.com.br</a><p>Santa Bárbara d’Oeste — SP</p></div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-legal"><span>© {new Date().getFullYear()} Ferpec Commerce. Todos os direitos reservados.</span><span>Desenvolvido por Octavio Augusto (<a className="footer-developer" href="https://github.com/Octavio345" target="_blank" rel="noreferrer">GitHub: Octavio345</a>)</span></div>
          <a className="footer-top" href="#inicio">Voltar ao topo <ArrowDown size={15} /></a>
        </div>
      </footer>

      <a className="whatsapp-float" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Ferpec pelo WhatsApp" title="WhatsApp Ferpec"><FaWhatsapp /></a>
    </main>
  );
}
