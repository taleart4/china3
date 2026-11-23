import { useState, useEffect } from 'react';
import {
  Languages,
  Handshake,
  FileText,
  Car,
  Building2,
  PackageCheck,
  Globe2,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Scale,
  Search,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLang } from '@/i18n/LangContext';

export default function App() {
  const { t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.tracks, href: '#tracks' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 antialiased">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
              <Globe2 className="h-5 w-5 text-white" />
            </div>
            <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              PuenteMX
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              {t.nav.getInTouch}
            </a>
            <LanguageSwitcher scrolled={scrolled} />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled ? 'text-slate-900' : 'text-white'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-slate-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                {t.nav.getInTouch}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220,38,38,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.3) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-emerald-400" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.hero.titlePre}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat value="3" label={t.hero.stat1Label} />
              <Stat value="4+" label={t.hero.stat2Label} />
              <Stat value="100%" label={t.hero.stat3Label} />
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section id="services" className="border-b border-gray-100 bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard icon={Languages} title={t.services.card1Title} description={t.services.card1Desc} />
            <ServiceCard icon={Handshake} title={t.services.card2Title} description={t.services.card2Desc} />
            <ServiceCard icon={Car} title={t.services.card3Title} description={t.services.card3Desc} />
            <ServiceCard icon={Search} title={t.services.card4Title} description={t.services.card4Desc} />
            <ServiceCard icon={FileText} title={t.services.card5Title} description={t.services.card5Desc} />
            <ServiceCard icon={Scale} title={t.services.card6Title} description={t.services.card6Desc} />
          </div>
        </div>
      </section>

      {/* Two tracks */}
      <section id="tracks" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow={t.tracks.eyebrow}
            title={t.tracks.title}
            subtitle={t.tracks.subtitle}
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Shenzhen Track */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl lg:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-50 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{t.tracks.shenzhenTitle}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">{t.tracks.shenzhenSub}</p>
                <p className="mt-4 text-slate-600 leading-relaxed">{t.tracks.shenzhenDesc}</p>

                <div className="mt-6 space-y-3">
                  <TrackFeature text={t.tracks.shenzhenF1} />
                  <TrackFeature text={t.tracks.shenzhenF2} />
                  <TrackFeature text={t.tracks.shenzhenF3} />
                  <TrackFeature text={t.tracks.shenzhenF4} />
                </div>

                <div className="mt-8 rounded-xl bg-emerald-50 p-5">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-emerald-700">{t.tracks.bestForLabel}</span>{' '}
                    {t.tracks.shenzhenBestFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Ningbo Track */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl lg:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-50 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600">
                  <PackageCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{t.tracks.ningboTitle}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">{t.tracks.ningboSub}</p>
                <p className="mt-4 text-slate-600 leading-relaxed">{t.tracks.ningboDesc}</p>

                <div className="mt-6 space-y-3">
                  <TrackFeature text={t.tracks.ningboF1} />
                  <TrackFeature text={t.tracks.ningboF2} />
                  <TrackFeature text={t.tracks.ningboF3} />
                  <TrackFeature text={t.tracks.ningboF4} />
                </div>

                <div className="mt-8 rounded-xl bg-emerald-50 p-5">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-emerald-700">{t.tracks.bestForLabel}</span>{' '}
                    {t.tracks.ningboBestFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-gray-100 bg-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              {t.process.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.process.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ProcessStep number="01" title={t.process.step1Title} description={t.process.step1Desc} />
            <ProcessStep number="02" title={t.process.step2Title} description={t.process.step2Desc} />
            <ProcessStep number="03" title={t.process.step3Title} description={t.process.step3Desc} />
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid gap-8 sm:grid-cols-3">
              <InfoPill icon={Scale} title={t.process.pill1Title} sub={t.process.pill1Sub} />
              <InfoPill icon={Globe2} title={t.process.pill2Title} sub={t.process.pill2Sub} />
              <InfoPill icon={Building2} title={t.process.pill3Title} sub={t.process.pill3Sub} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                {t.about.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {t.about.title}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>{t.about.para1}</p>
                <p>{t.about.para2}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t.about.coverageTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  <CoverageCity city={t.about.city1} primary />
                  <CoverageCity city={t.about.city2} />
                  <CoverageCity city={t.about.city3} />
                  <CoverageCity city={t.about.city4} />
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-sm text-slate-500">{t.about.coverageNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-100 bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                {t.contact.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{t.contact.description}</p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={Mail} label={t.contact.emailLabel} value="contact@cdmx8puente.com" />
                <ContactRow icon={Phone} label={t.contact.whatsappLabel} value="+52 5631719451" />
                <ContactRow icon={WeChat} label={t.contact.wechatLabel} value="+52 9617647144" />
                <ContactRow icon={MapPin} label={t.contact.basedInLabel} value="Mexico City, Mexico" />
                <ContactRow icon={Linkedin} label={t.contact.linkedinLabel} value="PuenteMX Consulting" />
              </div>

              <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-orange-700">{t.contact.trilingualTitle}</span>{' '}
                    {t.contact.trilingualDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{t.contact.formTitle}</h3>
              <p className="mt-1 text-sm text-slate-500">{t.contact.formRequired}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600">
                <Globe2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">PuenteMX</span>
            </div>
            <p className="text-sm text-slate-400">{t.footer.tagline}</p>
            <div className="flex gap-4">
              <a href="#contact" className="text-slate-400 transition-colors hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#contact" className="text-slate-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} PuenteMX. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-emerald-300 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition-colors group-hover:bg-emerald-100">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

function TrackFeature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative">
      <div className="text-5xl font-bold text-white/10">{number}</div>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}

function InfoPill({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-slate-400">{sub}</div>
      </div>
    </div>
  );
}

function CoverageCity({ city, primary }: { city: string; primary?: boolean }) {
  return (
    <li className="flex items-center gap-2">
      <MapPin className={`h-4 w-4 ${primary ? 'text-emerald-600' : 'text-slate-400'}`} />
      <span className={primary ? 'font-semibold text-slate-900' : 'text-slate-600'}>{city}</span>
    </li>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-200">
        <Icon className="h-5 w-5 text-emerald-600" />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}
