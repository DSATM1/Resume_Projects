import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { services } from '../../data/services';

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services | Guru & Jana</title>
      <meta
        name="description"
        content="Explore the services offered by Guru & Jana Chartered Accountants, including audit, tax, corporate law, advisory and market entry support."
      />
    </Helmet>

    <section className="bg-slate-950 text-white">
      <div className="container py-24">
        <SectionHeader
          eyebrow="Services"
          title="Specialised financial and compliance services for businesses.
          "
          description="Each service vertical is designed to support clients with reliable delivery, regulatory knowledge and strategic insight."
        />
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
              <service.icon size={22} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{service.shortDescription}</p>
            <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
              Learn more <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default ServicesPage;
