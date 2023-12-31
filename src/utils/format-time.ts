import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);
export function formatPlayerTime(time: number, duration: number): string {
  const secondsLeft = duration - time;
  const isLongerThanHour = secondsLeft >= 3600;
  return dayjs.utc(secondsLeft * 1000, 'ss').format(isLongerThanHour ? '-HH:mm:ss' : '-mm:ss');
}

export function formatRunTime(minutes: number): string {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}


export function formatDate(date: string, format: DateFormats): string {
  return dayjs(date).format(format);
}

export enum DateFormats {
  Short = 'YYYY-MM-DD',
  Standard = 'MMMM D, YYYY'
}
