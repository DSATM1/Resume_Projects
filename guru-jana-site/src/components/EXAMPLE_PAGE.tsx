/**
 * EXAMPLE: Complete Page Using All Animated Components
 * 
 * This file demonstrates how to integrate all 7 animated components
 * into a professional CA firm website page.
 */

import React from 'react';
import {
  ServiceCard,
  StatsCounter,
  TeamCard,
  ProcessTimeline,
  TestimonialCard,
  ScrollReveal,
  FloatingElements,
} from './index';
import {
  BarChart3,
  DollarSign,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

export const ExampleCAFirmPage: React.FC = () => {
  // Example services data
  const services = [
    {
      title: 'Tax Planning',
      description:
        'Strategic tax optimization to minimize your liability and maximize savings.',
      icon: DollarSign,
    },
    {
      title: 'Financial Audit',
      description:
        'Comprehensive audit services ensuring compliance and accuracy.',
      icon: CheckCircle,
    },
    {
      title: 'Business Advisory',
      description:
        'Expert guidance for business growth and strategic planning.',
      icon: TrendingUp,
    },
    {
      title: 'Compliance & Reporting',
      description:
        'Timely and accurate financial reporting and compliance management.',
      icon: FileText,
    },
  ];

  // Example team members
  const teamMembers = [
    {
      name: 'Rajesh Singh',
      designation: 'Senior CA & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      bio: '25+ years of experience in taxation and financial advisory',
      socialLinks: [
        {
          icon: Linkedin,
          url: '#',
          label: 'LinkedIn',
        },
        {
          icon: Mail,
          url: 'mailto:rajesh@example.com',
          label: 'Email',
        },
        {
          icon: Phone,
          url: 'tel:+919876543210',
          label: 'Phone',
        },
      ],
    },
    {
      name: 'Priya Sharma',
      designation: 'Senior CA',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      bio: '15+ years in audit and compliance services',
      socialLinks: [
        {
          icon: Linkedin,
          url: '#',
          label: 'LinkedIn',
        },
        {
          icon: Mail,
          url: 'mailto:priya@example.com',
          label: 'Email',
        },
      ],
    },
    {
      name: 'Amit Patel',
      designation: 'CA & Tax Specialist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
      bio: '10+ years specializing in corporate taxation',
      socialLinks: [
        {
          icon: Linkedin,
          url: '#',
          label: 'LinkedIn',
        },
        {
          icon: Mail,
          url: 'mailto:amit@example.com',
          label: 'Email',
        },
      ],
    },
  ];

  // Example process steps
  const processSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'Understand your business needs and financial goals',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Data Collection',
      description: 'Gather all necessary financial documents and records',
      icon: DollarSign,
    },
    {
      number: 3,
      title: 'Analysis & Planning',
      description: 'Comprehensive review and strategic planning',
      icon: BarChart3,
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Execute strategies and solutions',
      icon: TrendingUp,
    },
    {
      number: 5,
      title: 'Review & Support',
      description: 'Ongoing monitoring and support',
      icon: Shield,
    },
  ];

  // Example testimonials
  const testimonials = [
    {
      quote:
        'Their tax planning strategies saved us over 2 lakhs last year. Highly professional and responsive team!',
      author: 'Vikram Reddy',
      designation: 'CEO, Tech Startup',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      rating: 5,
    },
    {
      quote:
        'Outstanding financial advisory services. They truly understand our business and provide valuable insights.',
      author: 'Sneha Desai',
      designation: 'CFO, Manufacturing Company',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
      rating: 5,
    },
    {
      quote:
        'Timely compliance and audit services with attention to detail. Highly recommended for any business.',
      author: 'Arjun Kumar',
      designation: 'Business Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Background floating elements */}
      <FloatingElements count={5} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal variant="slideUp" delay={0}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Chartered Accountant Services
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.2}>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive tax planning, audit, and business advisory services
              for your financial success
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.4}>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCounter endValue={500} label="Happy Clients" suffix="+" />
            <StatsCounter endValue={25} label="Years Experience" suffix="" />
            <StatsCounter endValue={2} label="Crores Saved" suffix="+" />
            <StatsCounter endValue={98} label="Success Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal
                key={index}
                variant="slideUp"
                delay={index * 0.1}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onClick={() => console.log(`Clicked: ${service.title}`)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Process
            </h2>
          </ScrollReveal>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal
                key={index}
                variant="slideUp"
                delay={index * 0.1}
              >
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  bio={member.bio}
                  socialLinks={member.socialLinks}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Client Testimonials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                variant="slideUp"
                delay={index * 0.1}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  designation={testimonial.designation}
                  image={testimonial.image}
                  rating={testimonial.rating}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal variant="slideUp">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and personalized
              financial strategy
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ExampleCAFirmPage;
