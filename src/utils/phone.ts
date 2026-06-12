export function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (!digits.startsWith('7') && digits.length > 0) digits = '7' + digits;

  let formatted = '';
  if (digits.length > 0) formatted = '+7';
  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
  if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
  if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
  if (digits.length > 9) formatted += '-' + digits.slice(9, 11);

  return formatted;
}

export function buildWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
