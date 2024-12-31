import { SectionData } from './types';

export const sections: SectionData = {
  document: {
    title: 'Document',
    subsections: ['Cover Page', 'Table of Contents'],
    status: 'complete'
  },
  overview: {
    title: 'Overview',
    subsections: ['Executive Summary', 'SWOT Analysis', 'Business Models', 'Viability Analysis'],
    status: 'in_progress',
    metrics: [
      { label: 'Market Size', value: '$500M' },
      { label: 'Growth Rate', value: '12% YoY' }
    ]
  },
  marketResearch: {
    title: 'Market Research',
    subsections: ['Industry Overview', 'Target Audience', 'Market Size & Trends', 'Competitor Analysis'],
    status: 'in_progress',
    metrics: [
      { label: 'Target Market Size', value: '$2.5B' },
      { label: 'Market Share', value: '15%' }
    ]
  },
  productsServices: {
    title: 'Products & Services',
    subsections: ['Core Offerings', 'Secondary Offerings', 'Expansion Opportunities', 'Customer Service'],
    status: 'attention',
    metrics: [
      { label: 'Product Lines', value: '3' },
      { label: 'Service Coverage', value: '24/7' }
    ]
  },
  financials: {
    title: 'Financials',
    subsections: ['Revenue', 'Expenses', 'Financing', 'Dividends', 'Taxes', 'Profit & Loss', 'Balance Sheet', 'Cash Flow', 'Funding Plan'],
    status: 'in_progress',
    metrics: [
      { label: 'Revenue Target', value: '$1.2M' },
      { label: 'Operating Margin', value: '25%' }
    ]
  }
};