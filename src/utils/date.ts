function formatDateOnToday(dateInput: string | Date) {
  const now = new Date();
  const inputDate = new Date(dateInput);

  // 1. 오늘 날짜인 경우
  if (inputDate.toDateString() === now.toDateString()) {
    const hourFormat = inputDate.getHours() < 12 ? '오전' : '오후';
    const hour = inputDate.getHours() % 12 || 12; // 0시는 12시로 표시
    const minutes = inputDate.getMinutes();
    return `${hourFormat} ${hour}: ${minutes}`;
  }

  // 2. 올해인 경우
  else if (inputDate.getFullYear() === now.getFullYear()) {
    return `${inputDate.getMonth() + 1}월 ${inputDate.getDate()}일`;
  }

  // 3. 다른 해인 경우
  else {
    return `${inputDate.getFullYear() % 100}.${inputDate.getMonth() + 1}.${inputDate.getDate()}`;
  }
}

export { formatDateOnToday };
