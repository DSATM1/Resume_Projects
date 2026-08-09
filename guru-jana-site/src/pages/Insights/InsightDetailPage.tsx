import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../../data/insights';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const InsightDetailPage = () => {
  const { articleSlug } = useParams();
  const article = insights.find((item) => item.slug === articleSlug);

  if (!article) {
    return (
      <div className="section-padding container">
        <SectionHeader eyebrow="Not found" title="Article not available" description="The article you are looking for could not be found." />
        <Link to="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
          <ArrowLeft size={16} /> Back to insights
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Guru & Jana</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <section className="section-padding bg-slate-50">
        <div className="container">
          <Breadcrumb items={[{ label: 'Insights', to: '/insights' }, { label: article.title }]} />
          <div className="mb-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Insight</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">{article.title}</h1>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ArrowLeft size={16} /> Back to insights
            </Link>
          </div>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">{article.category}</p>
            <p className="text-lg leading-8 text-slate-700">{article.content}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default InsightDetailPage;
