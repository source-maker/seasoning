import dayjs from 'dayjs';

// format date to japanese format
export function formatJapaneseDate(date: Date | string, showDay = true) {
  return (
    `${dayjs(date).format('YYYY年MM月DD日')}` +
    (showDay ? `(${dayToKanji(dayjs(date).day())})` : '')
  );
}

// format date to iso format
export function formatIsoDate(date: Date | string) {
  return `${dayjs(date).format('YYYY/MM/DD')}`;
}

function dayToKanji(day: number) {
  switch (day) {
    case 1:
      return '月';
    case 2:
      return '火';
    case 3:
      return '水';
    case 4:
      return '木';
    case 5:
      return '金';
    case 6:
      return '土';
    case 0:
      return '日';
    default:
      return '';
  }
}
