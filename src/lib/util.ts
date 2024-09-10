export function normalizeTelephone(value: string) {
  return (value || '').replace(/(\D)/g, '');
}

export function formatTelephone(val: string) {
  const match = normalizeTelephone(val).match(/^(\d{1,2}|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? `+${match[1]} ` : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
}
