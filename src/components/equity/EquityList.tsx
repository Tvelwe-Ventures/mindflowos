import { CircleDollarSign } from 'lucide-react';

interface EquityItem {
  name: string;
  value: string;
}

interface EquityListProps {
  equityData: EquityItem[];
}

const EquityList = ({ equityData }: EquityListProps) => {
  return (
    <ul className="mt-4">
      {equityData.map((equity, index) => (
        <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
          <span>{equity.name}</span>
          <span className="text-gray-600">
            {equity.value} <CircleDollarSign className="inline" />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default EquityList;