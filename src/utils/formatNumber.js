export const formatNumber = (num, style = 'currency') => {
  if (style === 'percent') return `${num.toFixed(2)}%`;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 3,
  }).format(num);
};
