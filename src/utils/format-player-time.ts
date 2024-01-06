import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);
export function formatPlayerTime(time: number, duration: number): string {
  const secondsLeft = duration - time;
  const isLongerThanHour = secondsLeft >= 3600;
  return dayjs.utc(secondsLeft * 1000, 'ss').format(isLongerThanHour ? '-HH:mm:ss' : '-mm:ss');
}
