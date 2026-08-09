import type { ComponentType } from 'react';
import { 
  ShieldCheck, Percent, Building2, BookOpen, Globe2, TrendingUp, 
  ShieldAlert, Briefcase, Sparkles, Settings, Users, DollarSign,
  CheckCircle, AlertCircle, TrendingDown, BarChart3
} from 'lucide-react';

export interface EnhancedService {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: ComponentType<any>;
  highlights: string[];
  process: ProcessStep[];
  benefits: string[];
  industries: string[];
  faqs: FAQ[];
  heroImage?: string;
  videoUrl?: string;
  relatedServices?: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: ComponentType<any>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const enhancedServices: EnhancedService[] = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription: 'Independent financial reporting and internal controls verification.',
    fullDescription: `Our comprehensive audit services provide independent verification of your financial statements, internal controls, and compliance with applicable standards. We combine deep industry expertise with latest audit technologies to deliver transparent, reliable reporting.`,
    icon: ShieldCheck,
    highlights: [
      'Statutory audits under Companies Act',
      'IFRS & Ind AS compliance reporting',
      'Internal controls assessment',
      'Risk and fraud identification'
    ],
    benefits: [
      'Enhanced stakeholder confidence',
      'Early risk identification',
      'Regulatory compliance assurance',
      'Improved financial controls',
      'Better decision-making insights'
    ],
    industries: ['Manufacturing', 'IT & Software', 'Banking & Finance', 'Retail & E-commerce', 'Healthcare'],
    process: [
      {
        number: 1,
        title: 'Planning & Scope',
        description: 'Understand your business, identify key audit areas',
        icon: CheckCircle
      },
      {
        number: 2,
        title: 'Risk Assessment',
        description: 'Evaluate internal controls and identify risks',
        icon: AlertCircle
      },
      {
        number: 3,
        title: 'Testing & Verification',
        description: 'Execute audit procedures and gather evidence',
        icon: BarChart3
      },
      {
        number: 4,
        title: 'Reporting',
        description: 'Issue audit report with findings and recommendations',
        icon: CheckCircle
      }
    ],
    faqs: [
      {
        question: 'What is the difference between audit and review?',
        answer: 'An audit provides higher assurance with detailed testing, while a review is a lower level engagement with limited procedures.'
      },
      {
        question: 'How often should we get audited?',
        answer: 'Statutory requirement depends on company size and type. Most companies need annual audit if turnover exceeds specified thresholds.'
      },
      {
        question: 'What documents do we need to prepare?',
        answer: 'General ledger, trial balance, bank statements, asset schedules, and supporting documentation for all major transactions.'
      }
    ]
  },
  {
    slug: 'direct-tax',
    title: 'Direct Tax',
    shortDescription: 'Corporate tax planning, advisory, and compliance services.',
    fullDescription: `Navigate complex direct tax regulations with our expert guidance. We provide comprehensive tax planning strategies, compliance services, and representation in tax disputes to optimize your tax position while ensuring regulatory compliance.`,
    icon: Percent,
    highlights: [
      'Corporate income tax planning',
      'Transfer pricing compliance',
      'Tax dispute resolution',
      'Startup tax benefits'
    ],
    benefits: [
      'Tax liability optimization',
      'Regulatory compliance',
      'Dispute resolution support',
      'Business expansion planning',
      'Succession planning with tax efficiency'
    ],
    industries: ['E-commerce', 'Technology', 'Startups', 'Multinational Companies', 'Manufacturing'],
    process: [
      {
        number: 1,
        title: 'Tax Planning',
        description: 'Identify tax-efficient business structures',
        icon: TrendingDown
      },
      {
        number: 2,
        title: 'Compliance Filing',
        description: 'Prepare and file tax returns accurately',
        icon: CheckCircle
      },
      {
        number: 3,
        title: 'Representation',
        description: 'Handle tax notices and disputes',
        icon: Briefcase
      },
      {
        number: 4,
        title: 'Advisory',
        description: 'Ongoing tax guidance and optimization',
        icon: Settings
      }
    ],
    faqs: [
      {
        question: 'What is transfer pricing?',
        answer: 'Transfer pricing refers to the pricing of transactions between related entities. India has specific rules requiring documentation of arm\'s length pricing.'
      },
      {
        question: 'Can we reduce our tax liability?',
        answer: 'Yes, through legal tax planning strategies like optimal business structure, timing of income/expenses, and utilizing available exemptions.'
      }
    ]
  },
  {
    slug: 'gst-compliance',
    title: 'GST Compliance & Advisory',
    shortDescription: 'GST registration, filing, and strategic compliance management.',
    fullDescription: `Simplify GST compliance with our comprehensive services. From registration and return filing to audit and advisory, we ensure your business stays compliant with GST regulations while optimizing your tax position.`,
    icon: DollarSign,
    highlights: [
      'GST registration & de-registration',
      'Monthly/Quarterly return filing',
      'GST audit support',
      'Input tax credit optimization'
    ],
    benefits: [
      'Zero penalties through compliance',
      'Faster refund processing',
      'Improved cash flow management',
      'Reduced compliance burden',
      'Better inventory management'
    ],
    industries: ['Retail', 'Manufacturing', 'E-commerce', 'Hospitality', 'Real Estate'],
    process: [
      {
        number: 1,
        title: 'GST Registration',
        description: 'Evaluate eligibility and complete registration',
        icon: CheckCircle
      },
      {
        number: 2,
        title: 'Process Setup',
        description: 'Implement GST accounting systems',
        icon: Settings
      },
      {
        number: 3,
        title: 'Return Filing',
        description: 'Timely preparation and filing of GST returns',
        icon: BarChart3
      },
      {
        number: 4,
        title: 'Compliance Review',
        description: 'Audit and remedial measures',
        icon: CheckCircle
      }
    ],
    faqs: [
      {
        question: 'Who needs to register for GST?',
        answer: 'Anyone with annual turnover exceeding ₹40 lakhs (₹10 lakhs for services or ₹5 crore for specific states) must register.'
      },
      {
        question: 'What is the due date for GST filing?',
        answer: 'GSTR-3B is due on 20th of next month, while GSTR-1 (annual) is due within 12 months of FY end.'
      }
    ]
  },
  {
    slug: 'corporate-advisory',
    title: 'Corporate Advisory',
    shortDescription: 'Strategic business advisory for growth and optimization.',
    fullDescription: `Transform your business with strategic corporate advisory. We provide comprehensive guidance on business restructuring, valuations, due diligence, and growth strategies tailored to your organizational goals.`,
    icon: Briefcase,
    highlights: [
      'Business valuation services',
      'M&A due diligence',
      'Business restructuring',
      'Strategic planning'
    ],
    benefits: [
      'Informed business decisions',
      'Risk mitigation',
      'Growth acceleration',
      'Investor confidence',
      'Operational efficiency'
    ],
    industries: ['Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Startups'],
    process: [
      {
        number: 1,
        title: 'Assessment',
        description: 'Analyze current business structure',
        icon: BarChart3
      },
      {
        number: 2,
        title: 'Strategy Development',
        description: 'Create growth and optimization roadmap',
        icon: TrendingUp
      },
      {
        number: 3,
        title: 'Implementation',
        description: 'Execute strategic initiatives',
        icon: CheckCircle
      },
      {
        number: 4,
        title: 'Review & Optimize',
        description: 'Monitor and adjust strategies',
        icon: Settings
      }
    ],
    faqs: [
      {
        question: 'When should we consider business restructuring?',
        answer: 'Consider restructuring for tax efficiency, expansion, investor requirements, or operational optimization.'
      }
    ]
  },
  {
    slug: 'compliance-risk',
    title: 'Compliance & Risk Management',
    shortDescription: 'Comprehensive compliance frameworks and risk mitigation.',
    fullDescription: `Strengthen your organization with robust compliance and risk management frameworks. We help identify, assess, and mitigate operational, financial, and regulatory risks while ensuring full compliance.`,
    icon: ShieldAlert,
    highlights: [
      'Internal audit services',
      'Compliance calendar management',
      'Risk assessment & mitigation',
      'Regulatory compliance'
    ],
    benefits: [
      'Reduced regulatory risk',
      'Enhanced governance',
      'Operational resilience',
      'Stakeholder confidence',
      'Better decision-making'
    ],
    industries: ['Banking', 'Insurance', 'Pharmaceuticals', 'Manufacturing', 'IT Services'],
    process: [
      {
        number: 1,
        title: 'Risk Identification',
        description: 'Identify potential compliance gaps and risks',
        icon: AlertCircle
      },
      {
        number: 2,
        title: 'Assessment',
        description: 'Evaluate risk magnitude and impact',
        icon: BarChart3
      },
      {
        number: 3,
        title: 'Framework Design',
        description: 'Create compliance and risk controls',
        icon: Settings
      },
      {
        number: 4,
        title: 'Monitoring',
        description: 'Ongoing compliance tracking and reporting',
        icon: TrendingUp
      }
    ],
    faqs: [
      {
        question: 'What is internal audit?',
        answer: 'Internal audit is an independent assessment of your organization\'s internal controls, risks, and governance processes.'
      }
    ]
  },
  {
    slug: 'bookkeeping-accounting',
    title: 'Bookkeeping & Accounting',
    shortDescription: 'Complete accounting outsourcing and financial record management.',
    fullDescription: `Focus on your core business while we handle your accounting. From bookkeeping to financial statement preparation, we provide accurate, timely financial records using latest accounting software.`,
    icon: BarChart3,
    highlights: [
      'Monthly bookkeeping',
      'Financial statement preparation',
      'Accounting software setup',
      'Monthly financial reporting'
    ],
    benefits: [
      'Accurate financial records',
      'Reduced errors',
      'Better financial visibility',
      'More time for business growth',
      'Cost-effective accounting'
    ],
    industries: ['All industries'],
    process: [
      {
        number: 1,
        title: 'Setup',
        description: 'Configure accounting systems and processes',
        icon: Settings
      },
      {
        number: 2,
        title: 'Recording',
        description: 'Accurate transaction recording',
        icon: BarChart3
      },
      {
        number: 3,
        title: 'Reconciliation',
        description: 'Monthly bank and account reconciliation',
        icon: CheckCircle
      },
      {
        number: 4,
        title: 'Reporting',
        description: 'Generate financial reports',
        icon: TrendingUp
      }
    ],
    faqs: [
      {
        question: 'What accounting software do you use?',
        answer: 'We use Tally, QuickBooks, Zoho Books, and other popular accounting software based on your requirements.'
      }
    ]
  }
];
