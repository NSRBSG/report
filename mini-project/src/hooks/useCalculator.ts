import { useState } from 'react';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    if (displayValue === 'Error') {
      setDisplayValue('0');
      return;
    }

    switch (value) {
      case 'clear':
        setDisplayValue('0');
        return;
      case 'backspace':
        setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        return;
      case 'equals':
        try {
          const result = eval(displayValue);
          setDisplayValue(String(result));
        } catch {
          setDisplayValue('Error');
        }
        return;
      default:
        setDisplayValue((prev) => (prev === '0' ? value : prev + value));
        return;
    }
  };

  return {
    displayValue,
    handleButtonClick,
  };
};
