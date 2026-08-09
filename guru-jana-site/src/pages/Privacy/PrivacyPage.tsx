import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Guru & Jana</title>
      <meta name="description" content="Review the privacy policy for Guru & Jana Chartered Accountants and learn how we handle data responsibly." />
    </Helmet>

    <section className="section-padding">
      <div className="container">
        <SectionHeader eyebrow="Privacy" title="Privacy policy" description="We protect client information and manage data securely with professional care." />
        <div className="mt-10 space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Information collection</h2>
            <p className="mt-4 leading-7">We collect only the data required to respond to inquiries, deliver services and provide regulatory updates.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Use of information</h2>
            <p className="mt-4 leading-7">Your details are used to contact you, manage service requests and provide firm updates. We do not sell personal information.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Security</h2>
            <p className="mt-4 leading-7">We take reasonable measures to protect personal data and maintain professional confidentiality in all engagements.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;
