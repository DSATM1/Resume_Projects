import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const TermsPage = () => (
  <>
    <Helmet>
      <title>Terms & Conditions | Guru & Jana</title>
      <meta name="description" content="Review the terms and conditions for using the Guru & Jana Chartered Accountants website." />
    </Helmet>

    <section className="section-padding">
      <div className="container">
        <SectionHeader eyebrow="Terms" title="Terms and conditions" description="The terms outlined here apply to your use of our website and the information provided through our services."
        />
        <div className="mt-10 space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Acceptance</h2>
            <p className="mt-4 leading-7">By accessing this site, you agree to these terms and to use the information responsibly.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Content use</h2>
            <p className="mt-4 leading-7">The content is for informational purposes only and does not constitute professional advice.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Limitation of liability</h2>
            <p className="mt-4 leading-7">Guru & Jana is not liable for losses arising from decisions based on website information without consulting a professional advisor.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TermsPage;
