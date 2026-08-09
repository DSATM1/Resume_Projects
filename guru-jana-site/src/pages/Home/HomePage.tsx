import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { services } from '../../data/services';
import { featuredInsights } from '../../data/insights';
import { serviceHighlights } from '../../data/home';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home | Guru & Jana | Chartered Accountants</title>
      <meta
        name="description"
        content="Guru & Jana Chartered Accountants provide audit, tax, corporate governance and business advisory services for Indian and global clients."
      />
    </Helmet>

    <section className="bg-[radial-gradient(circle_at_top,_rgba(191,162,107,0.14),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="container grid gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
            Trusted financial advisory
          </p>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Chartered accountancy with modern advisory for business growth.
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-slate-700">
              Delivering audit, tax, compliance and strategic guidance with a service-focused approach for Indian corporates, startups and cross-border investors.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Connect with us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              Explore services
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-soft">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(191,162,107,0.12),_transparent_65%)]"></div>
          <div className="relative grid gap-6 rounded-[1.75rem] border border-slate-200/60 bg-white p-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Client-first advisory</p>
              <h2 className="text-3xl font-semibold text-slate-950">Collaborative support for business, finance and compliance.</h2>
              <p className="text-sm leading-7 text-slate-600">
                Our professionals create practical solutions for audit, statutory compliance, financial reporting and business transitions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-3xl font-semibold">600+</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Team members across audit, tax and advisory.</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-3xl font-semibold">25+</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Years of experience supporting Indian and global clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Our services"
          title="A full suite of accounting, tax and advisory services."
          description="Each engagement is supported by specialist teams and a single point of contact for clarity and reliable execution."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.slug} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                <service.icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription}</p>
              <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-slate-700">
                Learn more <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-950 text-white">
      <div className="container grid gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Why choose us</p>
          <h2 className="text-4xl font-semibold tracking-tight">Deep expertise, digital efficiency and client focus.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            We combine rigorous compliance with advisory thinking so clients benefit from accurate reporting, governance confidence and growth-ready financial insights.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Specialist teams', 'Transparent pricing', 'Timely delivery', 'Technology-enabled reports'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6">
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-10">
          <div className="grid gap-6">
            {['Audit & Assurance', 'Direct Tax', 'GST & Indirect Tax', 'Corporate Law', 'Start-up Advisory', 'Finance Transformation'].map((item) => (
              <div key={item} className="rounded-3xl bg-slate-950/90 p-5 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Insights"
              title="Latest thought leadership and regulatory updates."
              description="Read perspectives on tax, audit, corporate governance and startup compliance from our team."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredInsights.slice(0, 2).map((article) => (
              <article key={article.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-slate-500">{article.category}</p>
                <h3 className="text-xl font-semibold text-slate-950">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <Link to={`/insights/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                  Read article <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-950 text-white">
      <div className="container grid gap-12 rounded-[2rem] border border-slate-800/90 bg-[radial-gradient(circle_at_top_left,_rgba(191,162,107,0.18),_transparent_30%),#0f172a] p-14">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Careers</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Join a team that values integrity, learning and growth.</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            We are building a collaborative culture with career development, mentorship, and meaningful work across audit, tax and advisory functions.
          </p>
        </div>
        <Link to="/careers" className="inline-flex max-w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
          Explore openings
        </Link>
      </div>
    </section>
  </>
);

export default HomePage;
