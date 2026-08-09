import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | Guru & Jana</title>
      <meta
        name="description"
        content="Contact Guru & Jana Chartered Accountants for audit, tax, corporate law and advisory services in India and globally."
      />
    </Helmet>

    <section className="bg-slate-950 text-white">
      <div className="container py-24">
        <SectionHeader
          eyebrow="Contact"
          title="Speak with our advisory team to discuss your next compliance or growth initiative."
          description="We are available to answer questions on audit, tax, governance and business advisory services."
        />
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_0.95fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Get in touch</p>
            <h2 className="text-3xl font-semibold text-slate-950">Our office and support details.</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-slate-900" />
              <div>
                <p className="font-semibold text-slate-950">Office location</p>
                <p className="text-sm leading-7 text-slate-600">Koramangala, Bengaluru, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-slate-900" />
              <div>
                <p className="font-semibold text-slate-950">Phone</p>
                <a href="tel:+918042202020" className="text-sm leading-7 text-slate-600">+91 80 4220 2020</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-slate-900" />
              <div>
                <p className="font-semibold text-slate-950">Email</p>
                <a href="mailto:contact@gurujana.com" className="text-sm leading-7 text-slate-600">contact@gurujana.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={20} className="text-slate-900" />
              <div>
                <p className="font-semibold text-slate-950">Business hours</p>
                <p className="text-sm leading-7 text-slate-600">Monday to Friday, 9:30 AM – 6:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  </>
);

export default ContactPage;
