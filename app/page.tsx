"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Check,
  ChevronRight,
  Gauge,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const links = {
  whatsapp:
    "https://wa.me/5519983524481?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Ferpec%20Commerce%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
  instagram: "https://www.instagram.com/ferpeccommerce/",
  facebook: "https://www.facebook.com/ferpeccommerce/",
  magalu: "https://www.magazineluiza.com.br/lojista/ferpeccommerce/",
  mercadoLivre: "https://lista.mercadolivre.com.br/ferpec",
};

const categories = [
  {
    number: "01",
    icon: Bike,
    image: "/media/category-moto.jpg",
    title: "Motocicletas",
    text: "Ferramentas para manutenção de motocicletas, selecionadas para oficinas e profissionais que buscam eficiência.",
    tags: ["Oficina", "Manutenção", "Performance"],
  },
  {
    number: "02",
    icon: Sprout,
    image: "/media/category-garden.jpg",
    title: "Jardinagem",
    text: "Ferramentas funcionais para cuidar, organizar e transformar jardins e áreas externas.",
    tags: ["Jardim", "Organização", "Uso diário"],
  },
  {
    number: "03",
    icon: Wrench,
    image: "/media/category-tools.jpg",
    title: "Uso geral",
    text: "Ferramentas confiáveis para profissionais, empresas e para quem valoriza qualidade em cada projeto.",
    tags: ["Profissional", "Multiuso", "Durabilidade"],
  },
  {
    number: "04",
    icon: Scale,
    image: "/media/category-scale.jpg",
    title: "Balanças",
    text: "Soluções de pesagem para food service, varejo, indústria, saúde, fitness e uso veterinário.",
    tags: ["Precisão", "Comercial", "Industrial"],
  },
];

const suppliers = [
  { src: "/brand/galmar.png", name: "Galmar" },
  { src: "/brand/lupus-transparent.png", name: "Lupus" },
  { src: "/brand/bremen-transparent.png", name: "Bremen" },
  { src: "/brand/digimess-transparent.png", name: "Digimess" },
  { src: "/brand/balmak-transparent.png", name: "Balmak" },
  { src: "/brand/tramontina.svg", name: "Tramontina" },
  { src: "/brand/kingtools-transparent.png", name: "Kingtools" },
  { src: "/brand/vilubri-transparent.png", name: "Vilubri" },
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
          <BrandLogo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#categorias">Categorias</a>
            <a href="#onde-comprar">Onde comprar</a>
            <a href="#fornecedores">Marcas</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="nav-cta desktop-cta" href={links.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp size={17} /> Fale no WhatsApp
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
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> E-commerce especializado em ferramentas</div>
            <h1>As ferramentas certas, <span>a um clique de você.</span></h1>
            <p>
              A Ferpec Commerce seleciona e vende online ferramentas para motocicletas, jardinagem, uso geral e soluções de pesagem de marcas confiáveis.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#onde-comprar">Comprar online <ShoppingBag size={18} /></a>
              <a className="button button-ghost" href="#categorias">Ver categorias <ArrowDown size={17} /></a>
            </div>
            <div className="hero-proof">
              <span><Check size={15} /> Venda 100% online</span>
              <span><Check size={15} /> Marcas reconhecidas</span>
              <span><Check size={15} /> Atendimento humano</span>
            </div>
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

      <section className="value-strip" aria-label="Diferenciais Ferpec">
        <div className="container value-grid">
          <div><ShieldCheck /><span><strong>Marcas confiáveis</strong>Curadoria de fornecedores</span></div>
          <div><PackageCheck /><span><strong>Compra segura</strong>Nos maiores marketplaces</span></div>
          <div><FaWhatsapp /><span><strong>Atendimento próximo</strong>Fale direto com a equipe</span></div>
          <div><Gauge /><span><strong>Soluções profissionais</strong>Para diferentes rotinas</span></div>
        </div>
      </section>

      <section id="sobre" className="about section-pad">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <span className="section-kicker">01 — Quem somos</span>
            <h2>Escolha especializada.<br /><em>Compra simples e segura.</em></h2>
          </Reveal>
          <Reveal className="about-content" delay={120}>
            <p className="about-lead">A <strong>Ferpec Commerce</strong> é uma operação de e-commerce que conecta pessoas e empresas a ferramentas e equipamentos de marcas reconhecidas.</p>
            <p>Não fabricamos nem executamos serviços: selecionamos, comercializamos e orientamos a compra dos produtos certos. Tudo acontece online, pelos nossos canais oficiais e marketplaces parceiros.</p>
            <div className="about-signature"><div className="signature-icon"><Sparkles size={21} /></div><span><strong>Variedade com critério.</strong>Para você comprar melhor, sem complicação.</span></div>
          </Reveal>
        </div>
        <div className="container about-panels">
          <Reveal className="about-panel about-panel-dark" delay={80}><span className="panel-index">CURADORIA</span><h3>Produtos escolhidos para necessidades reais.</h3><p>Linhas úteis, marcas reconhecidas e variedade estratégica.</p><div className="panel-graphic"><ShieldCheck /></div></Reveal>
          <Reveal className="about-panel about-panel-yellow" delay={160}><span className="panel-index">ATENDIMENTO</span><h3>Orientação humana para comprar com confiança.</h3><p>Informação clara antes, durante e depois da escolha.</p><div className="panel-graphic"><FaWhatsapp /></div></Reveal>
          <Reveal className="about-panel about-panel-light" delay={240}><span className="panel-index">PRATICIDADE</span><h3>Escolha online. Receba onde estiver.</h3><p>Compre nos marketplaces que você já conhece e confia.</p><div className="panel-graphic"><Zap /></div></Reveal>
        </div>
      </section>

      <section id="categorias" className="categories section-pad">
        <div className="container section-head">
          <Reveal><span className="section-kicker section-kicker-light">02 — Nossas categorias</span><h2>Soluções certas para<br /><em>cada tipo de desafio.</em></h2></Reveal>
          <Reveal delay={100}><p>Da oficina ao jardim, da rotina profissional à medição precisa. Explore as principais linhas disponíveis em nossa loja online.</p></Reveal>
        </div>
        <div className="container category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} className="category-card" delay={index * 80}>
                <div className="category-photo"><img src={category.image} alt={`Ferramentas para ${category.title.toLowerCase()}`} loading="lazy" /><div className="category-top"><span>{category.number}</span><Icon /></div></div>
                <div className="category-copy"><h3>{category.title}</h3><p>{category.text}</p><div className="category-tags">{category.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar produtos de ${category.title}`}>Consultar produtos <ChevronRight size={18} /></a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="onde-comprar" className="marketplaces section-pad">
        <div className="container market-layout">
          <Reveal className="market-copy"><span className="section-kicker">03 — Onde comprar</span><h2>Canais oficiais.<br /><em>Compra com confiança.</em></h2><p>Encontre os produtos Ferpec nos principais marketplaces, com pagamento protegido e entrega para todo o Brasil.</p><div className="market-checks"><span><Check size={16} /> Pagamento seguro</span><span><Check size={16} /> Entrega para todo o Brasil</span><span><Check size={16} /> Canais oficiais Ferpec</span></div></Reveal>
          <div className="market-cards">
            <Reveal className="market-card market-ml" delay={100}><div className="market-logo"><img src="/logos/mercado-livre.svg" alt="Mercado Livre" /></div><span className="market-overline">COMPRE NO MERCADO LIVRE</span><h3>Agilidade para escolher e receber.</h3><p>Acesse o catálogo Ferpec disponível na plataforma.</p><a href={links.mercadoLivre} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a></Reveal>
            <Reveal className="market-card market-magalu" delay={180}><div className="market-logo"><img src="/logos/magalu.svg" alt="Magalu" /></div><span className="market-overline">COMPRE NO MAGALU</span><h3>Praticidade em uma plataforma conhecida.</h3><p>Confira a seleção Ferpec disponível no Magazine Luiza.</p><a href={links.magalu} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a></Reveal>
          </div>
        </div>
      </section>

      <section id="fornecedores" className="suppliers section-pad">
        <div className="container suppliers-head"><Reveal><span className="section-kicker">04 — Marcas parceiras</span><h2>Grandes marcas.<br /><em>Escolhas de confiança.</em></h2></Reveal><Reveal delay={100}><p>As marcas aparecem em suas cores reais, porque cada identidade faz parte da qualidade e da credibilidade da nossa seleção.</p></Reveal></div>
        <div className="container supplier-grid">
          {suppliers.map((supplier, index) => <Reveal key={supplier.name} className="supplier-card" delay={(index % 4) * 60}><span>{String(index + 1).padStart(2, "0")}</span><img src={supplier.src} alt={`Logo ${supplier.name}`} loading="lazy" /><small>{supplier.name}</small></Reveal>)}
        </div>
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
          <Reveal className="contact-card" delay={140}><span className="contact-card-label">CANAIS DE ATENDIMENTO</span><a href="tel:+5519983524481"><Phone /><span><small>Telefone / WhatsApp</small><strong>(19) 9 8352-4481</strong></span><ArrowRight className="contact-arrow" /></a><a href="mailto:ferpec@ferpec.com.br"><Mail /><span><small>E-mail</small><strong>ferpec@ferpec.com.br</strong></span><ArrowRight className="contact-arrow" /></a><a href="https://www.google.com/maps/search/?api=1&query=Rua+Monte+Libano+210+Jardim+Alfa+Santa+Barbara+d%27Oeste+SP" target="_blank" rel="noreferrer"><MapPin /><span><small>Endereço</small><strong>Rua Monte Líbano, 210<br />Jardim Alfa — Santa Bárbara d’Oeste/SP</strong></span><ArrowRight className="contact-arrow" /></a><div className="contact-cep">CEP 13450-605</div></Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><BrandLogo /><p>E-commerce de ferramentas, equipamentos e soluções de pesagem de marcas confiáveis.</p><div className="footer-socials"><a className="instagram" href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a className="facebook" href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a><a className="whatsapp" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a></div></div>
          <div className="footer-nav"><span>NAVEGAÇÃO</span><a href="#sobre">Sobre a Ferpec</a><a href="#categorias">Categorias</a><a href="#fornecedores">Marcas</a><a href="#contato">Contato</a></div>
          <div className="footer-nav"><span>COMPRE ONLINE</span><a href={links.mercadoLivre} target="_blank" rel="noreferrer">Mercado Livre</a><a href={links.magalu} target="_blank" rel="noreferrer">Magazine Luiza</a><a href={links.whatsapp} target="_blank" rel="noreferrer">Atendimento via WhatsApp</a></div>
          <div className="footer-contact"><span>CONTATO</span><a href="tel:+5519983524481">(19) 9 8352-4481</a><a href="mailto:ferpec@ferpec.com.br">ferpec@ferpec.com.br</a><p>Santa Bárbara d’Oeste — SP</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ferpec Commerce. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo <ArrowDown size={15} /></a></div>
      </footer>

      <a className="whatsapp-float" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Ferpec pelo WhatsApp"><span>Fale com a Ferpec</span><FaWhatsapp /></a>
    </main>
  );
}
