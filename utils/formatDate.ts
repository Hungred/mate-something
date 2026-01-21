export default function (unixTime: number, showSeconds = true) {
  // unixTime 是以毫秒為單位的時間戳
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (unixTime < minute && !showSeconds) {
    const secs = Math.floor(unixTime / 1000);
    return showSeconds ? `${secs} 秒` : '剛剛';
  } else if (unixTime < hour) {
    const mins = Math.floor(unixTime / minute);
    return `${mins} 分鐘`;
  } else if (unixTime < day) {
    const hours = Math.floor(unixTime / hour);
    return `${hours} 小時`;
  } else {
    const days = Math.floor(unixTime / day);
    return `${days} 天`;
  }
}
