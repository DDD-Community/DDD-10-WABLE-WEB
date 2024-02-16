'use client';

import { useState } from 'react';
import { Divider } from '@chakra-ui/react';

import Calendar from '@/components/pages/client/calendar';
import BirthdayPeopleList from './birthday-people-list';

export default function BirthdaySection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  return (
    <>
      <Calendar date={selectedDate} onChange={setSelectedDate} />
      <Divider my={18} variant="dashboard" />
      <BirthdayPeopleList date={selectedDate} />
    </>
  );
}
