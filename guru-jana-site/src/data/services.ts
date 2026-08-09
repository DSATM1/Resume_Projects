import type { ComponentType } from 'react';
import { Briefcase, ShieldCheck, Percent, BookOpen, Building2, Layers, ShieldAlert, Globe2, Settings, Sparkles, Users, TrendingUp } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ComponentType<any>;
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription: 'Independent reporting, internal controls and financial statement assurance for businesses of all sizes.',
    description: 'Our audit practice delivers transparent financial reporting, internal audit support and compliance assurance aligned to Indian and global standards.',
    icon: ShieldCheck,
    highlights: ['Statutory audit', 'IFRS / Ind AS reporting', 'Internal controls', 'Risk review'],
  },
  {
    slug: 'direct-tax',
    title: 'Direct Tax',
    shortDescription: 'Corporate tax advisory, compliance and planning for domestic and multinational operations.',
    description: 'We support direct tax strategy, return filings, transfer pricing, dispute resolution and tax-efficient structuring for companies and founders.',
    icon: Percent,
    highlights: ['Corporate tax', 'Tax planning', 'Transfer pricing', 'Tax controversies'],
  },
  {
    slug: 'gst-indirect-tax',
    title: 'GST & Indirect Tax',
    shortDescription: 'Compliance and advisory for GST, customs, service tax, and indirect tax risk management.',
    description: 'Our indirect tax specialists help clients review compliance, optimise working capital, and implement GST strategies across transactions.',
    icon: Building2,
    highlights: ['GST compliance', 'Customs advisory', 'Tax credit review', 'Stakeholder training'],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law & Governance',
    shortDescription: 'Corporate compliance, secretarial services and governance advisory for Indian entities.',
    description: 'We provide company secretarial support, board governance advisory, secretarial audit and counsel on corporate restructuring and filings.',
    icon: BookOpen,
    highlights: ['Board governance', 'Secretarial compliance', 'Corporate restructuring', 'Stakeholder governance'],
  },
  {
    slug: 'india-entry',
    title: 'India Entry Services',
    shortDescription: 'Market entry support for global companies including entity setup, registration and regulatory guidance.',
    description: 'We help international firms establish a foothold in India with local compliance, taxation, payroll and financial reporting support.',
    icon: Globe2,
    highlights: ['Entity setup', 'Regulatory filings', 'Local compliance', 'Advisory support'],
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory',
    shortDescription: 'Financial planning, valuation, due diligence and strategic advice for emerging businesses.',
    description: 'Our advisors work with leadership teams to improve business performance, cash conversion and decision-making through actionable financial insights.',
    icon: TrendingUp,
    highlights: ['Valuation', 'Due diligence', 'Cash flow advisory', 'Performance reporting'],
  },
  {
    slug: 'internal-audit',
    title: 'Internal Audit',
    shortDescription: 'Risk assessments, process assurance and controls testing for operational improvement.',
    description: 'Our internal audit specialists help clients strengthen governance, mitigate risks and improve reporting through independent reviews.',
    icon: ShieldAlert,
    highlights: ['Process review', 'Control testing', 'Risk mitigation', 'Performance audits'],
  },
  {
    slug: 'insolvency',
    title: 'Insolvency & Bankruptcy',
    shortDescription: 'Advisory support for restructuring, turnaround and insolvency compliance.',
    description: 'We guide businesses through corporate restructuring, creditor engagement and financial reorganisation with practical solutions.',
    icon: Briefcase,
    highlights: ['Restructuring', 'Turnaround planning', 'Creditor liaison', 'Compliance management'],
  },
  {
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    shortDescription: 'Capital planning, fundraise advisory and compliance support for early-stage businesses.',
    description: 'Our team helps startups scale responsibly through financial model review, investor reporting and compliance readiness.',
    icon: Sparkles,
    highlights: ['Investor reporting', 'Cash runway planning', 'Scale readiness', 'Regulatory compliance'],
  },
  {
    slug: 'consulting',
    title: 'Financial Consulting',
    shortDescription: 'CFO advisory, budgeting, MIS and financial process improvements.',
    description: 'We support management with budgeting, KPI frameworks, cash flow planning and decision-ready financial analysis.',
    icon: Settings,
    highlights: ['CFO advisory', 'Budgeting', 'MIS implementation', 'Performance analytics'],
  },
];
