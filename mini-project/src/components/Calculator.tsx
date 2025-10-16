import { CALCULATOR_BUTTON_CONFIG } from '../constants';
import type { ButtonType } from '../types';
import { useCalculator } from '../hooks/useCalculator';

export default function Calculator() {
  const { displayValue, handleButtonClick } = useCalculator();

  function getButtonStyle(type: ButtonType) {
    switch (type) {
      case 'action':
        return 'bg-red-500 text-white hover:bg-red-600';
      case 'equals':
        return 'bg-green-500 text-white hover:bg-green-600 col-span-2 aspect-auto!';
      default:
        return 'bg-gray-200 text-black hover:bg-gray-300';
    }
  }

  return (
    <>
      <div className='flex flex-col gap-4 w-[340px] p-4 bg-white shadow-lg rounded-lg'>
        <div className='flex flex-1 justify-end p-6 rounded-lg bg-gray-900 text-2xl text-white font-bold'>
          {displayValue}
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {CALCULATOR_BUTTON_CONFIG.map((config) => (
            <div
              key={config.value}
              className={`cursor-pointer aspect-square flex items-center justify-center rounded-lg text-2xl ${getButtonStyle(
                config.type
              )}`}
              onClick={() => handleButtonClick(config.value)}
            >
              {config.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
