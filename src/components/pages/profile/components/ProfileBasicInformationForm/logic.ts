import { useState } from 'react';

/**
 * @description input select들(year, month, day)의 option들을 관리하는 훅입니다.
 *              years는 현재로부터 100년 전까지, months는 1월부터 12월까지, days는 윤년의 2월 등을 고려해 선택된 year, month에 따라 동적으로 변합니다.
 *
 * @example 생일 입력에 사용될 수 있습니다.
 */
export function useDateInput() {
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), 0, 1),
  );
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from(
    {
      length: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).getDate(),
    },
    (_, i) => i + 1,
  );

  function handleChangeDate({
    year,
    month,
    day,
  }: {
    year?: number;
    month?: number;
    day?: number;
  }) {
    setCurrentDate(
      new Date(
        year ?? currentDate.getFullYear(),
        (month ?? currentDate.getMonth()) - 1,
        day ?? currentDate.getDate(),
      ),
    );
  }

  return {
    currentDate,
    years,
    months,
    days,
    handleChangeDate,
  };
}
