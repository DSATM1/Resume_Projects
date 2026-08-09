import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { insights, InsightArticle } from '../../data/insights';

const categories = ['All', 'Tax', 'GST', 'Audit', 'Corporate Law'];

const InsightsPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredInsights = useMemo(() => {
    return insights.filter((article) => {
      const matchesCategory = category === 'All' || article.category === category;
      const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase()) || article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Helmet>
        <title>Insights | Guru & Jana</title>
        <meta name="description" content="Insights on tax, audit, corporate law and advisory services from Guru & Jana Chartered Accountants." />
      </Helmet>

      <section className="bg-slate-950 text-white">
        <div className="container py-24">
          <SectionHeader eyebrow="Insights" title="Professional commentary and regulatory updates for business leaders." description="Browse articles, guides and practical advice across tax, audit and governance." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-10">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="relative rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search articles"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full border-none bg-transparent pl-10 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${category === item ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredInsights.map((article) => (
              <article key={article.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{article.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{article.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <Link to={`/insights/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                  Read more
                </Link>
              </article>
            ))}
            {filteredInsights.length === 0 && (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-soft">
                <p className="text-lg font-semibold">No articles matched your search.</p>
                <p className="mt-4 text-sm">Try a different keyword or select another category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsPage;
