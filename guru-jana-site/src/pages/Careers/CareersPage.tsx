import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { jobs } from '../../data/jobs';

const CareersPage = () => (
  <>
    <Helmet>
      <title>Careers | Guru & Jana</title>
      <meta
        name="description"
        content="Explore careers at Guru & Jana Chartered Accountants, including roles in audit, tax and advisory with professional development opportunities."
      />
    </Helmet>

    <section className="bg-slate-950 text-white">
      <div className="container py-24">
        <SectionHeader
          eyebrow="Careers"
          title="Grow your career with a professional finance and advisory team."
          description="Join an inclusive workplace that values learning, collaboration and meaningful client impact."
        />
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.75fr]">
        <div className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {['Learning & mentorship', 'Structured career paths', 'Collaborative culture', 'Professional exposure'].map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <article key={job.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{job.department}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">{job.title}</h2>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>{job.location}</p>
                    <p>{job.type} · {job.experience}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-600">{job.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {job.responsibilities.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <button type="button" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Apply now
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Why work with us</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">We invest in people through structured development, a supportive environment and meaningful client work across advisory, compliance and transformation.</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="font-semibold text-slate-950">Team culture</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">Collaboration, respect and mentorship are core daily practices.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="font-semibold text-slate-950">Learning support</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">Training, certification encouragement and knowledge sharing are encouraged.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </>
);

export default CareersPage;
