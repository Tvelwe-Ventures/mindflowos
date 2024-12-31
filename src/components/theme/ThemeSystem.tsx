import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Moon, Brain } from 'lucide-react';

const ThemeSystem = () => {
  const [theme, setTheme] = useState('dark');

  const themes = {
    light: {
      background: 'bg-gradient-to-br from-gray-50 via-white to-blue-50',
      card: 'bg-white/90 border-gray-200',
      text: {
        primary: 'text-gray-900',
        secondary: 'text-gray-600'
      },
      accent: {
        primary: 'from-blue-600 to-indigo-600',
        secondary: 'from-blue-500/10 to-indigo-500/10'
      },
      button: {
        primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
        secondary: 'bg-gray-100 text-gray-900'
      }
    },
    dark: {
      background: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
      card: 'bg-gray-900/50 border-gray-800',
      text: {
        primary: 'text-gray-200',
        secondary: 'text-gray-400'
      },
      accent: {
        primary: 'from-blue-400 to-purple-400',
        secondary: 'from-blue-500/20 to-purple-500/20'
      },
      button: {
        primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
        secondary: 'bg-gray-800 text-gray-200'
      }
    }
  };

  const currentTheme = themes[theme];

  const ThemePreview = ({ mode, isActive }) => (
    <Card className={`${themes[mode].card} backdrop-blur-xl transition-all ${
      isActive ? 'ring-2 ring-blue-500' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 bg-gradient-to-br ${themes[mode].accent.secondary} 
            rounded-xl border border-blue-500/20`}>
            <Brain className={`h-6 w-6 ${
              mode === 'light' ? 'text-blue-600' : 'text-blue-400'
            }`} />
          </div>
          <h3 className={`text-lg font-semibold ${themes[mode].text.primary}`}>
            MindflowOS
          </h3>
        </div>

        <div className="space-y-4">
          <div className={`h-2 w-3/4 rounded bg-gradient-to-r ${themes[mode].accent.primary}`} />
          <div className={`h-2 w-1/2 rounded bg-gradient-to-r ${themes[mode].accent.secondary}`} />
        </div>

        <div className="flex gap-2 mt-6">
          <button className={`px-4 py-2 rounded-lg ${themes[mode].button.primary}`}>
            Primary
          </button>
          <button className={`px-4 py-2 rounded-lg ${themes[mode].button.secondary}`}>
            Secondary
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className={`min-h-screen ${currentTheme.background} p-8`}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.accent.primary} 
            bg-clip-text text-transparent mb-4`}>
            Theme System
          </h2>
          <p className={currentTheme.text.secondary}>
            Seamlessly switch between sophisticated light and dark modes
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              theme === 'light' 
                ? themes.light.button.primary
                : themes.dark.button.secondary
            }`}
          >
            <Sun className="h-4 w-4" />
            Light Mode
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              theme === 'dark' 
                ? themes.dark.button.primary
                : themes.light.button.secondary
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark Mode
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ThemePreview mode="light" isActive={theme === 'light'} />
          <ThemePreview mode="dark" isActive={theme === 'dark'} />
        </div>
      </div>
    </div>
  );
};

export default ThemeSystem;
