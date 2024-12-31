import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, Plus, CircleDollarSign, CalendarDays } from 'lucide-react';

export const EquityManagement = () => {
  const [equityData, setEquityData] = useState([]);

  const addEquity = () => {
    // Logic to add equity
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equity Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Your Equity</h2>
          <button onClick={addEquity} className="flex items-center text-accent">
            <Plus className="mr-2" /> Add Equity
          </button>
        </div>
        <ul className="mt-4">
          {equityData.map((equity, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
              <span>{equity.name}</span>
              <span className="text-gray-600">{equity.value} <CircleDollarSign className="inline" /></span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
