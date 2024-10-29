export const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;
  
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / (1000 * 60)) % 60);
      const secs = Math.floor((difference / 1000) % 60);
  
      return {
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        mins: mins < 10 ? `0${mins}` : mins,
        secs: secs < 10 ? `0${secs}` : secs,
      };
    } else {
      return { days: '00', hours: '00', mins: '00', secs: '00' };
    }
};
  

export const currentDateAndMonth = () => {
  const now = new Date();
  const day = now.getDate();

  return {
    day: day < 10 ? `0${day}` : day,
    month: String(now).slice(3, 7).toUpperCase()
  }
}