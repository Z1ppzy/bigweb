import React from 'react';

const LoaderStatus: React.FC = () => {
  return (
    <span className='flex justify-center items-center text-lg'>
      <span className='loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6'></span>
    </span>
  );
};

export default LoaderStatus;
