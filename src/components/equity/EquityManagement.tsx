import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AddEquityButton from './AddEquityButton';
import EquityList from './EquityList';

interface EquityItem {
  name: string;
  value: string;
}

export const EquityManagement = () => {
  const [equityData, setEquityData] = useState<EquityItem[]>([]);

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
          <AddEquityButton onClick={addEquity} />
        </div>
        <EquityList equityData={equityData} />
      </CardContent>
    </Card>
  );
};