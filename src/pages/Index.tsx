import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-znaktech.svg";
import heroBg from "@/assets/hero-bg.jpg";
import icEquipment from "@/assets/ic-equipment.png";
import icConsumables from "@/assets/ic-consumables.png";
import icSpareParts from "@/assets/ic-spare-parts.png";
import icSoftware from "@/assets/ic-software.png";
import icChestnyZnak from "@/assets/ic-chestnyznak.png";

const directions = [
  {
    img: icEquipment,
    title: "Оборудование",
    desc: "Принтеры для любых поверхностей и скоростей.",
  },
  {
    img: icConsumables,
    title: "Расходные материалы",
    desc: "Чернила, растворители, риббоны и картриджи.",
  },
  {
    img: icSpareParts,
    title: "Запасные части",
    desc: "Запчасти, головки, электроника. Сервис с 2004 г.",
  },
  {
    img: icSoftware,
    title: "Программное обеспечение",
    desc: "ЗНАК.L2–L4, облачные и локальные решения.",
  },
  {
    img: icChestnyZnak,
    title: "Честный ЗНАК",
    desc: "Внедрение маркировки под ключ для ЦРПТ.",
  },
];

const phones = [
  { dept: "Главный офис", num: "+7 (495) 995-33-01", href: "tel:+74959953301" },
  { dept: "Автоматизация и Честный знак", num: "+7 (495) 995-33-05", href: "tel:+74959953305" },
  { dept: "Пластиковые карты и RFID", num: "+7 (495) 995-33-07", href: "tel:+74959953307" },
  { dept: "Оборудование и расходные материалы", num: "+7 (495) 995-33-10", href: "tel:+74959953310" },
  { dept: "Сервисная служба", num: "+7 (495) 995-33-38", href: "tel:+74959953338" },
];

const emails = [
  { dept: "Главный офис", email: "info@znaktech.ru" },
  { dept: "Автоматизация и Честный знак", email: "sales@znaktech.ru" },
  { dept: "Пластиковые карты и RFID", email: "cards@znaktech.ru" },
  { dept: "Сервисная служба", email: "service@znaktech.ru" },
  { dept: "ПО поддержка", email: "help@znaktech.ru" },
];

const stats = [
  { value: "20+", label: "Лет опыта" },
  { value: "500+", label: "Проектов" },
  { value: "15+", label: "Отраслей" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={logo} alt="ZnakTech" className="h-8 w-auto" />
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted">
              <a href="#directions" className="hover:text-primary transition-colors duration-200">Направления</a>
              <a href="#about" className="hover:text-primary transition-colors duration-200">О компании</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-200">Контакты</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+74959953301" className="font-mono text-sm font-medium hover:text-primary transition-colors duration-200">
              +7 (495) 995-33-01
            </a>
            <a
              href="#contact"
              className="hidden sm:block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              Связаться
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 px-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Промышленная идентификация
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-balance">
              Автоматизация промышленных предприятий и технологии идентификации данных.
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
              Комплексные решения для маркировки, сериализации, управления производственными процессами, производства пластиковых карт, удостоверений и RFID-технологий.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section id="directions" className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">Направления деятельности</h2>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Полный комплекс решений для промышленной маркировки, идентификации и автоматизации производств.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {directions.map((d) => (
              <div key={d.title} className="bg-card p-6 rounded-2xl card-shadow inner-outline flex flex-col items-center text-center">
                <img src={d.img} alt={d.title} className="w-20 h-20 object-contain mb-5" />
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 tracking-tight">О компании</h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                ЗНАКТЕХ — эксперт в области промышленной автоматизации и маркировки. Мы помогаем предприятиям соответствовать
                современным стандартам прослеживаемости и обязательной маркировки.
              </p>
              <p>
                Наша команда объединяет инженеров и разработчиков ПО для создания отказоустойчивых систем, которые работают в
                режиме 24/7 на крупнейших заводах страны. Работаем с пищевой, лёгкой, фармацевтической и строительной
                отраслями.
              </p>
              <p>
                Поставляем, настраиваем и сопровождаем решения под «Честный знак» и внутренние задачи предприятий —
                быстро, грамотно, с гарантией результата.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-6 bg-surface rounded-2xl text-center">
                <div className="text-3xl font-semibold text-primary mb-1 font-mono">{s.value}</div>
                <div className="text-sm text-muted font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-foreground text-primary-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">Контакты</h2>
          <p className="text-primary-foreground/60 text-lg mb-12 max-w-xl">
            Свяжитесь с нами — наш технический специалист ответит в течение рабочего дня.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Phones */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Phone size={20} strokeWidth={1.5} className="text-primary" />
                Телефоны
              </h3>
              <div className="space-y-4">
                {phones.map((p) => (
                  <div key={p.href} className="flex justify-between items-baseline gap-4">
                    <span className="text-primary-foreground/50 text-sm">{p.dept}</span>
                    <a href={p.href} className="font-mono text-sm font-medium hover:text-primary transition-colors duration-200 whitespace-nowrap">
                      {p.num}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Mail size={20} strokeWidth={1.5} className="text-primary" />
                Email
              </h3>
              <div className="space-y-4">
                {emails.map((e) => (
                  <div key={e.email} className="flex justify-between items-baseline gap-4">
                    <span className="text-primary-foreground/50 text-sm">{e.dept}</span>
                    <a href={`mailto:${e.email}`} className="text-sm font-medium hover:text-primary transition-colors duration-200">
                      {e.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-24 pt-8 border-t border-primary-foreground/10 text-primary-foreground/40 text-sm flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Москва, Россия</span>
            </div>
            <p>© {new Date().getFullYear()} ЗНАКТЕХ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
