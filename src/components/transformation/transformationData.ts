export const transformationStatus = {
  executiveSummary: 'complete',
  marketAnalysis: 'complete',
  financials: 'processing',
  operations: 'pending',
  strategy: 'pending'
};

export const sections = [
  { 
    id: 'executiveSummary',
    title: 'Executive Summary',
    elements: ['Vision', 'Mission', 'Key Objectives']
  },
  {
    id: 'marketAnalysis',
    title: 'Market Analysis',
    elements: ['Target Market', 'Competition', 'Market Size']
  },
  {
    id: 'financials',
    title: 'Financial Plan',
    elements: ['Projections', 'Cash Flow', 'Funding Requirements']
  },
  {
    id: 'operations',
    title: 'Operations',
    elements: ['Process Flow', 'Resources', 'Timeline']
  },
  {
    id: 'strategy',
    title: 'Strategy',
    elements: ['Growth Plan', 'Risk Analysis', 'Success Metrics']
  }
];