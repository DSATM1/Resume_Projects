export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobs: JobRole[] = [
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant',
    department: 'Audit & Assurance',
    location: 'Bengaluru, India',
    type: 'Full-time',
    experience: '3+ years',
    summary: 'Lead financial audits and compliance reviews for clients across multiple industries.',
    responsibilities: ['Manage audit engagements', 'Coordinate with client finance teams', 'Prepare reports and recommendations'],
    qualifications: ['CA qualified', 'Strong analytical skills', 'Experience with financial reporting']
  },
  {
    id: 'tax-associate',
    title: 'Tax Associate',
    department: 'Tax & Regulatory',
    location: 'Bengaluru, India',
    type: 'Full-time',
    experience: '1-3 years',
    summary: 'Support tax compliance, return preparation, and advisory services for corporate clients.',
    responsibilities: ['Assist with tax filings', 'Analyse client tax positions', 'Support tax advisory projects'],
    qualifications: ['CA intermediate', 'Good understanding of Indian tax laws', 'Strong communication skills']
  },
  {
    id: 'audit-assistant',
    title: 'Audit Associate',
    department: 'Internal Audit',
    location: 'Bengaluru, India',
    type: 'Full-time',
    experience: '0-2 years',
    summary: 'Join audits and internal review assignments to help clients strengthen operational controls.',
    responsibilities: ['Perform fieldwork', 'Document findings', 'Communicate with audit teams'],
    qualifications: ['Graduate in commerce', 'Attention to detail', 'Desire to learn audit methodology']
  }
];
