export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export const featuredInsights: InsightArticle[] = [
  {
    slug: 'gst-compliance-priority-2026',
    title: 'GST compliance priorities for Indian businesses in 2026',
    category: 'GST',
    excerpt: 'Key actions to strengthen your GST reporting and minimise indirect tax risk while maintaining working capital efficiency.',
    content: 'This article explains the key compliance controls and reporting timelines relevant for Indian businesses. It emphasises practical action and governance to avoid interest and penalty exposure.',
  },
  {
    slug: 'audit-readiness-for-growth',
    title: 'Audit readiness for scaling enterprises',
    category: 'Audit',
    excerpt: 'A governance framework for fast-growing companies preparing for audit, investor due diligence and business expansion.',
    content: 'Scaling companies need a consistent financial close process, strong internal controls, and clear documentation to align stakeholders before an audit or investor review.',
  },
];

export const insights: InsightArticle[] = [
  ...featuredInsights,
  {
    slug: 'tax-structuring-for-startups',
    title: 'Tax structuring for startups and venture-backed firms',
    category: 'Tax',
    excerpt: 'Founders should plan ownership, funding and exit-ready tax structures early to avoid unintended liabilities.',
    content: 'A strong tax plan helps startups preserve cash and negotiate confidently with investors while complying with Indian regulations and transfer pricing expectations.',
  },
  {
    slug: 'governance-for-family-business',
    title: 'Governance essentials for family businesses',
    category: 'Corporate Law',
    excerpt: 'Practical governance practices that help family enterprises professionalise and protect stakeholder value.',
    content: 'Family businesses can strengthen their decision-making and risk management by documenting policies, creating a strong board advisory structure, and improving financial transparency.',
  },
];
