import { ReactNode } from 'react';

interface StatusCardProps {
  title: string;
  count: number;
  icon: ReactNode;
  bgColor: string;
  textColor: string;
}

const StatusCard = ({ title, count, icon, bgColor, textColor }: StatusCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="flex items-center">
        <div className={`${bgColor} rounded-full p-3 mr-4`}>
          {icon}
        </div>
        <span className={`text-3xl font-bold ${textColor}`}>{count}</span>
      </div>
    </div>
  );
};

export default StatusCard;