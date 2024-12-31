import { Plus } from 'lucide-react';

interface AddEquityButtonProps {
  onClick: () => void;
}

const AddEquityButton = ({ onClick }: AddEquityButtonProps) => {
  return (
    <button onClick={onClick} className="flex items-center text-accent">
      <Plus className="mr-2" /> Add Equity
    </button>
  );
};

export default AddEquityButton;