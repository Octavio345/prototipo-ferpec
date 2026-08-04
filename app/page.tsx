"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Camera,
  Check,
  ChevronRight,
  Gauge,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  ThumbsUp,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const links = {
  whatsapp:
    "https://wa.me/5519983524481?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Ferpec%20Commerce%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
  instagram: "https://www.instagram.com/ferpeccommerce/",
  facebook: "https://www.facebook.com/ferpeccommerce",
  magalu: "https://www.magazineluiza.com.br/lojista/ferpeccommerce/",
  mercadoLivre: "https://lista.mercadolivre.com.br/ferpec",
};

const categories = [
  {
    number: "01",
    icon: Bike,
    title: "Motocicletas",
    text: "Ferramentas e equipamentos profissionais para manutenção, reparos e performance em oficinas de motos.",
    className: "category-moto",
    tags: ["Oficina", "Manutenção", "Performance"],
  },
  {
    number: "02",
    icon: Sprout,
    title: "Jardinagem",
    text: "Soluções funcionais para cuidar, organizar e transformar jardins e áreas externas.",
    className: "category-garden",
    tags: ["Jardim", "Organização", "Uso diário"],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Uso geral",
    text: "Ferramentas confiáveis para profissionais, empresas e para quem exige qualidade em cada projeto.",
    className: "category-tools",
    tags: ["Profissional", "Multiuso", "Durabilidade"],
  },
  {
    number: "04",
    icon: Scale,
    title: "Balanças",
    text: "Precisão para food service, varejo, indústria, saúde, fitness e uso veterinário.",
    className: "category-scale",
    tags: ["Precisão", "Comercial", "Industrial"],
  },
];

const suppliers = [
  { src: "/brand/galmar.png", name: "Galmar" },
  { src: "/brand/lupus.jpg", name: "Lupus" },
  { src: "/brand/bremen.png", name: "Bremen" },
  { src: "/brand/digimes.jpg", name: "Digimess" },
  { src: "/brand/balmak.png", name: "Balmak" },
  { src: "/brand/tramontina.png", name: "Tramontina" },
  { src: "/brand/kingtools.jpg", name: "Kingtools" },
  { src: "/brand/vilbriu.png", name: "Vilubri" },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
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

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Ferpec Commerce — início">
      <img src="/brand/ferpec.jpeg" alt="Ferpec Commerce" />
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
    return () => {
      document.body.style.overflow = "";
    };
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
            <a href="#fornecedores">Fornecedores</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="nav-cta desktop-cta" href={links.whatsapp} target="_blank" rel="noreferrer">
            Fale conosco <ArrowRight size={16} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
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
          <a href="#fornecedores" onClick={closeMenu}><span>04</span> Fornecedores</a>
          <a href="#contato" onClick={closeMenu}><span>05</span> Contato</a>
          <a className="mobile-whatsapp" href={links.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Falar pelo WhatsApp
          </a>
        </div>
      </div>

      <section id="inicio" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" /> Soluções que movem o seu trabalho
            </div>
            <h1>
              Ferramentas para quem <span>faz.</span><br />
              Precisão para quem <span>exige.</span>
            </h1>
            <p>
              Produtos selecionados para oficinas, jardins, empresas e projetos que não podem parar. Qualidade profissional, marcas confiáveis e compra fácil.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#onde-comprar">
                Onde comprar <ArrowRight size={18} />
              </a>
              <a className="button button-ghost" href="#categorias">
                Explorar categorias <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack" aria-hidden="true">
                <span><Wrench size={16} /></span>
                <span><Scale size={16} /></span>
                <span><Sprout size={16} /></span>
              </div>
              <p><strong>Curadoria multimarcas</strong><br />para cada necessidade</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Categorias atendidas pela Ferpec Commerce">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="visual-core">
              <div className="core-mark"><Wrench strokeWidth={1.35} /></div>
              <span>FERPEC</span>
              <small>COMMERCE</small>
            </div>
            <div className="orbit-card orbit-one">
              <Bike size={24} />
              <div><strong>Oficinas</strong><span>Performance</span></div>
            </div>
            <div className="orbit-card orbit-two">
              <Scale size={24} />
              <div><strong>Pesagem</strong><span>Precisão</span></div>
            </div>
            <div className="orbit-card orbit-three">
              <Sprout size={24} />
              <div><strong>Jardim</strong><span>Praticidade</span></div>
            </div>
            <div className="orbit-badge"><Zap size={15} fill="currentColor" /> Pronto para o trabalho</div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>Role para descobrir</span>
            <div className="scroll-line"><i /></div>
            <div className="hero-socials">
              <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={17} /></a>
              <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><ThumbsUp size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Diferenciais Ferpec">
        <div className="container value-grid">
          <div><ShieldCheck /><span><strong>Marcas confiáveis</strong>Curadoria de fornecedores</span></div>
          <div><PackageCheck /><span><strong>Compra segura</strong>Nos maiores marketplaces</span></div>
          <div><MessageCircle /><span><strong>Atendimento próximo</strong>Fale direto com a equipe</span></div>
          <div><Gauge /><span><strong>Soluções profissionais</strong>Para diferentes rotinas</span></div>
        </div>
      </section>

      <section id="sobre" className="about section-pad">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <span className="section-kicker">01 — Quem somos</span>
            <h2>Mais do que produtos.<br /><em>Soluções para fazer acontecer.</em></h2>
          </Reveal>
          <Reveal className="about-content" delay={120}>
            <p className="about-lead">
              A <strong>Ferpec Commerce</strong> conecta pessoas e empresas a ferramentas, equipamentos e soluções de pesagem escolhidos para entregar confiança no uso real.
            </p>
            <p>
              Reunimos categorias essenciais e fornecedores reconhecidos em uma operação focada em qualidade, praticidade e atendimento próximo — da escolha do produto à compra nos canais oficiais.
            </p>
            <div className="about-signature">
              <div className="signature-icon"><Sparkles size={21} /></div>
              <span><strong>Escolhas que trabalham com você.</strong>Esse é o jeito Ferpec Commerce.</span>
            </div>
          </Reveal>
        </div>
        <div className="container about-panels">
          <Reveal className="about-panel about-panel-dark" delay={80}>
            <span className="panel-index">QUALIDADE</span>
            <h3>Produtos escolhidos para entregar resultado.</h3>
            <p>Marcas reconhecidas, variedade estratégica e foco em desempenho.</p>
            <div className="panel-graphic"><ShieldCheck /></div>
          </Reveal>
          <Reveal className="about-panel about-panel-yellow" delay={160}>
            <span className="panel-index">PROXIMIDADE</span>
            <h3>Atendimento humano do início ao fim.</h3>
            <p>Informação clara para você comprar com mais confiança.</p>
            <div className="panel-graphic"><MessageCircle /></div>
          </Reveal>
          <Reveal className="about-panel about-panel-light" delay={240}>
            <span className="panel-index">PRATICIDADE</span>
            <h3>Encontre. Escolha. Faça acontecer.</h3>
            <p>Compre nos marketplaces que você já conhece e confia.</p>
            <div className="panel-graphic"><Zap /></div>
          </Reveal>
        </div>
      </section>

      <section id="categorias" className="categories section-pad">
        <div className="container section-head">
          <Reveal>
            <span className="section-kicker section-kicker-light">02 — Nossas categorias</span>
            <h2>Soluções certas para<br /><em>cada tipo de desafio.</em></h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Da oficina ao jardim, da rotina profissional à medição precisa. Explore nossas principais linhas.</p>
          </Reveal>
        </div>
        <div className="container category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} className={`category-card ${category.className}`} delay={index * 80}>
                <div className="category-top"><span>{category.number}</span><Icon /></div>
                <div className="category-visual" aria-hidden="true"><Icon strokeWidth={1} /></div>
                <div className="category-copy">
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                  <div className="category-tags">{category.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar produtos de ${category.title}`}>
                  Consultar produtos <ChevronRight size={18} />
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="onde-comprar" className="marketplaces section-pad">
        <div className="container market-layout">
          <Reveal className="market-copy">
            <span className="section-kicker">03 — Onde comprar</span>
            <h2>Escolha seu canal.<br /><em>Compre com confiança.</em></h2>
            <p>Nossos produtos estão disponíveis em marketplaces consolidados, com toda a praticidade e segurança que você já conhece.</p>
            <div className="market-checks">
              <span><Check size={16} /> Pagamento seguro</span>
              <span><Check size={16} /> Entrega para todo o Brasil</span>
              <span><Check size={16} /> Canais oficiais Ferpec</span>
            </div>
          </Reveal>
          <div className="market-cards">
            <Reveal className="market-card market-ml" delay={100}>
              <div className="market-card-top"><span className="market-icon">ML</span><ArrowRight /></div>
              <span className="market-overline">LOJA OFICIAL</span>
              <h3>Mercado Livre</h3>
              <p>Encontre nossos produtos e compre com a agilidade do Mercado Livre.</p>
              <a href={links.mercadoLivre} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a>
            </Reveal>
            <Reveal className="market-card market-magalu" delay={180}>
              <div className="market-card-top"><span className="market-icon">M</span><ArrowRight /></div>
              <span className="market-overline">PARCEIRO MAGALU</span>
              <h3>Magazine Luiza</h3>
              <p>Compre no Magalu com as condições e a segurança da plataforma.</p>
              <a href={links.magalu} target="_blank" rel="noreferrer">Visitar loja <ArrowRight size={17} /></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="fornecedores" className="suppliers section-pad">
        <div className="container suppliers-head">
          <Reveal>
            <span className="section-kicker">04 — Nossos fornecedores</span>
            <h2>Grandes marcas.<br /><em>Uma parceria de confiança.</em></h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Selecionamos fornecedores reconhecidos para entregar variedade, consistência e qualidade em cada categoria.</p>
          </Reveal>
        </div>
        <div className="container supplier-grid">
          {suppliers.map((supplier, index) => (
            <Reveal key={supplier.name} className="supplier-card" delay={(index % 4) * 60}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={supplier.src} alt={`Logo ${supplier.name}`} loading="lazy" />
              <small>{supplier.name}</small>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contato" className="contact section-pad">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="container contact-layout">
          <Reveal className="contact-copy">
            <span className="section-kicker section-kicker-light">05 — Fale com a Ferpec</span>
            <h2>Tem um desafio?<br /><em>Vamos encontrar a ferramenta certa.</em></h2>
            <p>Nossa equipe está pronta para orientar você e ajudar a encontrar a melhor solução.</p>
            <a className="button button-primary contact-button" href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Chamar no WhatsApp <ArrowRight size={18} />
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={140}>
            <span className="contact-card-label">CANAIS DE ATENDIMENTO</span>
            <a href="tel:+5519983524481"><Phone /><span><small>Telefone / WhatsApp</small><strong>(19) 9 8352-4481</strong></span><ArrowRight className="contact-arrow" /></a>
            <a href="mailto:ferpec@ferpec.com.br"><Mail /><span><small>E-mail</small><strong>ferpec@ferpec.com.br</strong></span><ArrowRight className="contact-arrow" /></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Monte+Libano+210+Jardim+Alfa+Santa+Barbara+d%27Oeste+SP" target="_blank" rel="noreferrer">
              <MapPin /><span><small>Endereço</small><strong>Rua Monte Líbano, 210<br />Jardim Alfa — Santa Bárbara d’Oeste/SP</strong></span><ArrowRight className="contact-arrow" />
            </a>
            <div className="contact-cep">CEP 13450-605</div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <BrandLogo inverse />
            <p>Ferramentas, equipamentos e soluções de precisão para quem faz acontecer.</p>
            <div className="footer-socials">
              <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
              <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><ThumbsUp /></a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
            </div>
          </div>
          <div className="footer-nav">
            <span>NAVEGAÇÃO</span>
            <a href="#sobre">Sobre a Ferpec</a>
            <a href="#categorias">Categorias</a>
            <a href="#fornecedores">Fornecedores</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footer-nav">
            <span>COMPRE ONLINE</span>
            <a href={links.mercadoLivre} target="_blank" rel="noreferrer">Mercado Livre</a>
            <a href={links.magalu} target="_blank" rel="noreferrer">Magazine Luiza</a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer">Atendimento via WhatsApp</a>
          </div>
          <div className="footer-contact">
            <span>CONTATO</span>
            <a href="tel:+5519983524481">(19) 9 8352-4481</a>
            <a href="mailto:ferpec@ferpec.com.br">ferpec@ferpec.com.br</a>
            <p>Santa Bárbara d’Oeste — SP</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ferpec Commerce. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo <ArrowDown size={15} /></a>
        </div>
      </footer>

      <a className="whatsapp-float" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Ferpec pelo WhatsApp">
        <span>Fale com a Ferpec</span><MessageCircle fill="currentColor" />
      </a>
    </main>
  );
}
