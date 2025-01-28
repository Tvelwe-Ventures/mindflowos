export const mockDashboardData = {
  revenue: {
    total: 11000,
    dailyAverage: 750,
    users: 240
  },
  chartData: Array.from({ length: 20 }, () => ({
    value: Math.floor(Math.random() * 100)
  })),
  progressData: {
    current: 65,
    total: 100
  },
  monthlyData: Array.from({ length: 12 }, () => ({
    value: Math.floor(Math.random() * 100)
  }))
};

export const mockFeedbackData = {
  categories: ['UI/UX', 'Performance', 'Features', 'Bugs'],
  tags: ['Critical', 'Enhancement', 'Question', 'Suggestion'],
  sampleFeedback: [
    {
      id: '1',
      type: 'bug',
      message: 'Dashboard loading slowly',
      status: 'pending'
    },
    {
      id: '2',
      type: 'feature',
      message: 'Add dark mode support',
      status: 'in-progress'
    }
  ]
};

// Console logging helper for development
export const devLog = (message: string, data?: any) => {
  if (import.meta.env.DEV) {
    console.log(`[DEV] ${message}`, data || '');
  }
};