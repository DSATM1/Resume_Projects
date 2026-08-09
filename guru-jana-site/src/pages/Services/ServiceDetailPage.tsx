import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { services } from '../../data/services';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <div className="section-padding container">
        <SectionHeader eyebrow="Not found" title="Service not available" description="The service you are looking for could not be found." />
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
          <ArrowLeft size={16} /> Back to services
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Guru & Jana</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <section className="section-padding bg-slate-50">
        <div className="container">
          <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: service.title }]} />
          <div className="mb-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Service details</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">{service.title}</h1>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ArrowLeft size={16} /> Back to all services
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr]">
            <div className="space-y-8 rounded-[2rem] bg-white p-10 shadow-soft">
              <p className="text-xl leading-8 text-slate-700">{service.description}</p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-950">Key focus areas</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Why this service matters</p>
                <p className="mt-4 text-lg leading-8">This engagement helps clients meet regulatory obligations while improving financial visibility and decision support.</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Next steps</p>
                <p className="text-sm leading-7 text-slate-600">Reach out to discuss your requirements, define a focused scope and set a timeline for delivery.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
