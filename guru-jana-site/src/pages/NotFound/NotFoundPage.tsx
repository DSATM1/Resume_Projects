import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 Not Found | Guru & Jana</title>
      <meta name="description" content="The page you are looking for does not exist on the Guru & Jana website." />
    </Helmet>

    <section className="section-padding bg-slate-950 text-white">
      <div className="container text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight">404</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-300">The page you are looking for could not be found. Please check the URL or return to the homepage.</p>
        <Link to="/" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
          Return home
        </Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;
