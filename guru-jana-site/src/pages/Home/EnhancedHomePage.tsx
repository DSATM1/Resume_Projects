import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import { ServiceCard, StatsCounter, TeamCard, TestimonialCard, ProcessTimeline, ScrollReveal, FloatingElements, SectionHeader } from '../../components';

// Data
import { enhancedServices } from '../../data/enhancedServices';
import { teamMembers, testimonials, companyStats, blogPosts } from '../../data/enhancedContent';

const EnhancedHomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Home | Guru Jana | Chartered Accountants</title>
        <meta
          name="description"
          content="Professional CA services including audit, tax planning, GST compliance, and corporate advisory for businesses and startups."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <FloatingElements count={3} colors={['#3b82f6', '#8b5cf6', '#06b6d4']} />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <ScrollReveal variant="slideUp">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold">
                ✨ Trusted Financial Advisory
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="slideUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CA Services for Business Growth
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="slideUp">
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Comprehensive audit, tax, compliance, and advisory services tailored for companies, startups, and global investors.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slideUp">
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-gray-400 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-blue-400 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="By The Numbers"
              description="Proven track record of excellence and client satisfaction"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {companyStats.map((stat, index) => (
              <ScrollReveal key={index} variant="slideUp">
                <div className="text-center p-8 rounded-xl bg-slate-700/50 border border-slate-600 hover:border-blue-500/50 transition-all">
                  <StatsCounter
                    endValue={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Services"
              title="Comprehensive CA Services"
              description="Full range of audit, tax, compliance, and advisory services"
            />
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {enhancedServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Service Detail - Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="How We Work"
              title="Our Service Delivery Process"
              description="Streamlined approach for consistent excellence"
            />
          </ScrollReveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <ProcessTimeline steps={enhancedServices[0].process} />
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  {enhancedServices[0].title}
                </h3>
                <p className="text-lg text-slate-600">
                  {enhancedServices[0].fullDescription}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Key Benefits:</h4>
                  {enhancedServices[0].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-blue-500 font-bold mt-1">✓</span>
                      <p className="text-slate-700">{benefit}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/services/${enhancedServices[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all mt-6"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Team"
              title="Meet Our Experts"
              description="Experienced professionals dedicated to your success"
            />
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <ScrollReveal key={member.id} variant="slideUp">
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  bio={member.bio}
                  socialLinks={{
                    linkedin: member.linkedin,
                    email: member.email
                  }}
                />
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Success Stories"
              title="What Our Clients Say"
              description="Real feedback from satisfied clients"
              isDark
            />
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <ScrollReveal key={testimonial.id} variant="slideUp">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  designation={testimonial.designation}
                  image={testimonial.image}
                  rating={testimonial.rating}
                />
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Insights & Updates"
              title="Latest From Our Blog"
              description="Tax updates, compliance tips, and industry insights"
            />
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.slice(0, 3).map((post) => (
              <ScrollReveal key={post.id} variant="slideUp">
                <Link to={`/insights/${post.slug}`}>
                  <article className="group rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-blue-600 uppercase">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
                        <span className="text-xs text-slate-500">{post.readTime} min read</span>
                        <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with our team today to discuss how we can help achieve your financial and business goals.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all"
            >
              Schedule a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default EnhancedHomePage;
