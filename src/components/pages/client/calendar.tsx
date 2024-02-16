'use client';

import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import { StyleWrapper } from './calendar.style';
import 'react-day-picker/dist/style.css';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  return (
    <StyleWrapper>
      <DayPicker
        mode="single"
        captionLayout="dropdown"
        fromYear={2024}
        toYear={2024}
        showOutsideDays
        required
        selected={selectedDate}
        modifiers={{ booked: [new Date(2024, 1, 11)] }}
        modifiersStyles={{ booked: { border: '2px solid currentColor' } }}
        weekStartsOn={1}
        onSelect={setSelectedDate}
      />
    </StyleWrapper>
  );
}
