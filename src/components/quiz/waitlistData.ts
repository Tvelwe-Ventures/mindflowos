import { Brain, Map, Target } from 'lucide-react';

export const stages = [
  {
    id: 'welcome',
    title: "Transform Your Business Strategy",
    description: "Take a short quiz to join the exclusive waitlist and be first to experience the future",
    type: 'intro'
  },
  {
    id: 'vision',
    title: "Visualize Your Strategy",
    description: "How do you currently visualize your business strategy?",
    type: 'strategy-map',
    options: [
      { id: 'documents', label: 'Traditional Documents', icon: Map },
      { id: 'mindmaps', label: 'Mind Maps', icon: Brain },
      { id: 'presentations', label: 'Presentations', icon: Target }
    ]
  },
  {
    id: 'challenges',
    title: "Strategic Challenges",
    description: "Select your biggest strategic planning challenge:",
    type: 'challenge-select',
    options: [
      { id: 'alignment', label: 'Team Alignment' },
      { id: 'execution', label: 'Strategy Execution' },
      { id: 'adaptation', label: 'Market Adaptation' }
    ]
  },
  {
    id: 'completion',
    title: "Ready to Transform Your Strategy",
    description: "Join our exclusive waitlist to be among the first to experience MindflowOS",
    type: 'completion'
  }
];