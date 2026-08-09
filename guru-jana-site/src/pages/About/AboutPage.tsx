import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us | Guru & Jana</title>
      <meta
        name="description"
        content="Learn about Guru & Jana Chartered Accountants, our mission, leadership and values for professional financial advisory services."
      />
    </Helmet>

    <section className="bg-slate-950 text-white">
      <div className="container grid gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About us</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Building trusted financial services with a values-driven approach.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Guru & Jana provides audit, tax, governance and advisory support for Indian and international businesses, with practical service and a strong compliance culture.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 text-sm leading-7 text-slate-300">
          <p className="font-semibold text-white">Our story</p>
          <p className="mt-4">Founded in the early 2000s, we began as a specialised advisory firm and grew into a multidisciplinary team serving corporate clients, startups and cross-border entities.</p>
          <p className="mt-4">We deliver expert insights with discipline, transparency and an emphasis on sustainable business governance.</p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Our mission"
            title="Enable clients to make confident decisions with clear finance, tax and governance support."
            description="We focus on timely execution, accurate reporting and advisory insight, while retaining strong professional ethics and client accountability."
          />
        </div>
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-10 text-slate-700 shadow-soft">
          {[
            'Deliver accurate financial reporting and audit assurance.',
            'Provide practical, compliant tax solutions for domestic and international clients.',
            'Support growth strategies with meaningful business advisory.',
            'Advocate governance, transparency and professional conduct.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-4">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-white">✓</div>
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 section-padding">
      <div className="container grid gap-10 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Timeline</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Milestones of growth</h2>
          <div className="mt-8 space-y-8">
            {[
              { year: '2004', label: 'Firm established with a focus on audit and tax advisory.' },
              { year: '2012', label: 'Expanded into corporate governance and due diligence services.' },
              { year: '2020', label: 'Introduced integrated business advisory and startup support.' },
              { year: '2024', label: 'Served 200+ clients with specialist financial and compliance teams.' },
            ].map((item) => (
              <div key={item.year} className="space-y-2">
                <p className="text-sm font-semibold text-slate-950">{item.year}</p>
                <p className="text-sm leading-7 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-[2rem] bg-white p-10 shadow-soft">
            <SectionHeader eyebrow="Leadership" title="A collaborative team of chartered accountants and finance specialists." />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {['Board governance', 'Tax strategy', 'Audit planning', 'Corporate secretarial'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Experienced professionals support clients with precise execution and practical advice.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-slate-950">Our values</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Integrity',
                'Client focus',
                'Quality delivery',
                'Innovation',
              ].map((value) => (
                <div key={value} className="rounded-3xl border border-slate-200 p-6">
                  <p className="font-semibold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
