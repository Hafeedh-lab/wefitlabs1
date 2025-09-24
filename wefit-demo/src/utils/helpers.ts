export const formatPercentage = (value: number, digits = 0) => `${(value * 100).toFixed(digits)}%`;

export const formatNumber = (value: number) =>
  value >= 1000 ? `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k` : value.toString();

export const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
