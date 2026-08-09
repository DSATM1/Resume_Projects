// Team members data with multimedia
export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  qualifications: string[];
  specializations: string[];
  experience: number;
  email: string;
  phone?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Rajesh Kumar',
    designation: 'Founder & Senior Partner',
    image: '/images/team/rajesh-kumar.jpg',
    bio: 'With 25+ years of experience in audit and tax, Rajesh leads the firm with expertise in corporate governance and multinational taxation.',
    qualifications: ['CA', 'B.Com'],
    specializations: ['Audit', 'Tax Planning', 'Corporate Advisory'],
    experience: 25,
    email: 'rajesh@gurujana.com',
    linkedin: 'https://linkedin.com/in/rajesh-kumar'
  },
  {
    id: 'member-2',
    name: 'Priya Sharma',
    designation: 'Partner - Tax & Compliance',
    image: '/images/team/priya-sharma.jpg',
    bio: 'Priya specializes in direct and indirect tax matters, with deep expertise in GST compliance and transfer pricing.',
    qualifications: ['CA', 'M.Com', 'B.Law'],
    specializations: ['Direct Tax', 'GST', 'Transfer Pricing'],
    experience: 18,
    email: 'priya@gurujana.com',
    linkedin: 'https://linkedin.com/in/priya-sharma'
  },
  {
    id: 'member-3',
    name: 'Amit Patel',
    designation: 'Partner - Audit & Assurance',
    image: '/images/team/amit-patel.jpg',
    bio: 'Amit brings 20 years of audit experience across diverse industries including IT, manufacturing, and financial services.',
    qualifications: ['CA', 'B.Com'],
    specializations: ['Audit', 'Internal Controls', 'Compliance Audit'],
    experience: 20,
    email: 'amit@gurujana.com',
    linkedin: 'https://linkedin.com/in/amit-patel'
  },
  {
    id: 'member-4',
    name: 'Sneha Desai',
    designation: 'Senior Associate - Advisory',
    image: '/images/team/sneha-desai.jpg',
    bio: 'Sneha focuses on business valuation and M&A advisory, helping startups and growing companies scale efficiently.',
    qualifications: ['CA', 'B.Tech (Finance)'],
    specializations: ['Valuation', 'M&A', 'Corporate Strategy'],
    experience: 8,
    email: 'sneha@gurujana.com',
    linkedin: 'https://linkedin.com/in/sneha-desai'
  }
];

// Blog/Insights data
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishedDate: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'gst-changes-2024',
    title: 'GST Changes 2024: What You Need to Know',
    excerpt: 'Stay updated with latest GST policy changes affecting businesses in 2024.',
    content: 'Detailed blog content about GST changes...',
    author: 'Priya Sharma',
    authorImage: '/images/team/priya-sharma.jpg',
    publishedDate: '2024-08-01',
    category: 'Compliance',
    tags: ['GST', 'Compliance', 'Tax Updates'],
    image: '/images/blog/gst-changes.jpg',
    readTime: 5,
    featured: true
  },
  {
    id: 'blog-2',
    slug: 'tax-planning-startups',
    title: 'Tax Planning Guide for Startups',
    excerpt: 'Essential tax strategies to optimize your startup\'s financial position.',
    content: 'Detailed blog content about startup tax planning...',
    author: 'Rajesh Kumar',
    authorImage: '/images/team/rajesh-kumar.jpg',
    publishedDate: '2024-07-28',
    category: 'Tax Planning',
    tags: ['Startups', 'Tax', 'Strategy'],
    image: '/images/blog/startup-taxes.jpg',
    readTime: 7,
    featured: true
  },
  {
    id: 'blog-3',
    slug: 'audit-checklist',
    title: 'Complete Audit Compliance Checklist for FY 2024',
    excerpt: 'A comprehensive checklist to ensure your audit readiness.',
    content: 'Detailed audit checklist content...',
    author: 'Amit Patel',
    authorImage: '/images/team/amit-patel.jpg',
    publishedDate: '2024-07-15',
    category: 'Audit',
    tags: ['Audit', 'Compliance', 'Checklist'],
    image: '/images/blog/audit-checklist.jpg',
    readTime: 6,
    featured: false
  }
];

// Testimonials
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testi-1',
    quote: 'Guru Jana\'s team provided exceptional audit services. Their attention to detail and quick turnaround was impressive.',
    author: 'Vikram Singh',
    designation: 'CFO',
    company: 'TechCorp Solutions',
    image: '/images/testimonials/vikram.jpg',
    rating: 5
  },
  {
    id: 'testi-2',
    quote: 'Outstanding tax planning advice that saved us significant amount in taxes. Highly recommended!',
    author: 'Anjali Menon',
    designation: 'Business Owner',
    company: 'Menon Enterprises',
    image: '/images/testimonials/anjali.jpg',
    rating: 5
  },
  {
    id: 'testi-3',
    quote: 'Professional, reliable, and always available when we need them. Great partnership!',
    author: 'Deepak Gupta',
    designation: 'MD',
    company: 'Global Logistics Inc',
    image: '/images/testimonials/deepak.jpg',
    rating: 5
  }
];

// Key metrics/stats
export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon?: string;
}

export const companyStats: Stat[] = [
  {
    label: 'Years of Experience',
    value: 25,
    suffix: '+'
  },
  {
    label: 'Happy Clients',
    value: 500,
    suffix: '+'
  },
  {
    label: 'Professionals',
    value: 50,
    suffix: '+'
  },
  {
    label: 'Services',
    value: 8,
    suffix: ''
  }
];

// Career opportunities
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  applyLink: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior CA - Audit',
    department: 'Audit & Assurance',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '7-10 years',
    description: 'Join our audit team and lead client engagements.',
    requirements: ['CA qualification', 'Audit experience', 'Leadership skills'],
    applyLink: '/careers/apply'
  },
  {
    id: 'job-2',
    title: 'Tax Consultant',
    department: 'Tax & Compliance',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Provide tax advisory to corporate clients.',
    requirements: ['CA/CS qualification', 'Tax expertise', 'Client management'],
    applyLink: '/careers/apply'
  }
];
