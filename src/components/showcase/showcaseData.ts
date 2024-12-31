export const mindMapNodes = [
  {
    id: 'strategy',
    label: 'Strategy',
    type: 'core',
    children: [
      { id: 'market', label: 'Market', metrics: ['$8.9B TAM', '12.4% Growth'] },
      { id: 'product', label: 'Product', metrics: ['4 Key Features', '2 Patents'] },
      { id: 'team', label: 'Team', metrics: ['25 Members', '3 Offices'] }
    ]
  },
  {
    id: 'operations',
    label: 'Operations',
    type: 'process',
    children: [
      { id: 'sales', label: 'Sales Process', metrics: ['85% Win Rate'] },
      { id: 'delivery', label: 'Delivery', metrics: ['99% On Time'] }
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    type: 'metrics',
    children: [
      { id: 'revenue', label: 'Revenue', metrics: ['$2.5M ARR'] },
      { id: 'growth', label: 'Growth', metrics: ['156% YoY'] }
    ]
  }
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc",
    quote: "Transformed our quarterly planning process. What used to take weeks now happens in real-time.",
    rating: 5
  },
  {
    name: "Mark Rodriguez",
    role: "Strategy Director, Global Solutions",
    quote: "The AI assistance is like having a strategy consultant on demand. Game-changing for our team.",
    rating: 5
  }
];