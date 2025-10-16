import type { ButtonType } from '../types';

export const CALCULATOR_BUTTON_CONFIG: {
  label: string;
  value: string;
  type: ButtonType;
}[] = [
  { label: 'C', value: 'clear', type: 'action' },
  { label: '←', value: 'backspace', type: 'action' },
  { label: '%', value: '%', type: 'operator' },
  { label: '/', value: '/', type: 'operator' },
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  { label: '9', value: '9', type: 'number' },
  { label: '*', value: '*', type: 'operator' },
  { label: '4', value: '4', type: 'number' },
  { label: '5', value: '5', type: 'number' },
  { label: '6', value: '6', type: 'number' },
  { label: '-', value: '-', type: 'operator' },
  { label: '1', value: '1', type: 'number' },
  { label: '2', value: '2', type: 'number' },
  { label: '3', value: '3', type: 'number' },
  { label: '+', value: '+', type: 'operator' },
  { label: '0', value: '0', type: 'number' },
  { label: '.', value: '.', type: 'number' },
  { label: '=', value: 'equals', type: 'equals' },
];
