export const convertCase = (
  str?: string,
  toCase: 'camel' | 'title' | 'kebab' | 'sentence' | 'snake' = 'camel',
) => {
  if (!str) return '';

  const delimiter =
    toCase === 'snake'
      ? '_'
      : toCase === 'kebab'
        ? '-'
        : ['title', 'sentence'].includes(toCase)
          ? ' '
          : '';

  const transform: (x: string) => string = ['camel', 'pascal'].includes(toCase)
    ? (x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()
    : ['snake', 'kebab'].includes(toCase)
      ? (x) => x.toLowerCase()
      : toCase === 'title'
        ? (x) => x.slice(0, 1).toUpperCase() + x.slice(1)
        : (x) => x;

  const finalTransform: (x: string) => string =
    toCase === 'camel'
      ? (x) => x.slice(0, 1).toLowerCase() + x.slice(1)
      : toCase === 'sentence'
        ? (x) => x.slice(0, 1).toUpperCase() + x.slice(1)
        : (x) => x;

  const words = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  );

  return finalTransform(words?.map(transform).join(delimiter) || str);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (data: any): data is (...args: any[]) => any =>
  typeof data === 'function';

export const formatTelephone = (value: string): string => {
  const match = normalizeTelephone(value).match(/^(\d{1,2}|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? `+${match[1]} ` : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return value;
};

export const normalizeTelephone = (value?: string): string => {
  return (value || '').replace(/(\D)/g, '');
};
