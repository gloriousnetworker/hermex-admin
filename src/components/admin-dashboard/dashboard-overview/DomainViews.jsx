import React from 'react';

const DomainViews = () => {
  const domains = [
    { name: 'Hermextravels.com', color: 'bg-[#4E148C]' },
    { name: 'Herssa AI', color: 'bg-[#4E148C80]' },
    { name: 'Hermex Medical', color: 'bg-[#4E148C80]' }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mx-2 sm:mx-0">
      <h2 className="text-sm sm:text-lg font-semibold text-[#2C0637] font-space-grotesk">Domain Views</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 sm:p-4 w-full sm:w-fit">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {domains.map((domain, index) => (
            <div key={index} className={`${domain.color} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity font-space-grotesk`}>
              {domain.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainViews;