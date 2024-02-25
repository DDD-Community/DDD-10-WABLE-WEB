'use client';

import { useState } from 'react';
import { Divider } from '@chakra-ui/react';

import Calendar from '@/components/pages/home/calendar';
import DashboardItem from '@/components/common/dashboard-item';
import BirthdayPeopleList from './birthday-people-list';

export default function BirthdaySection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  return (
    <DashboardItem flexDir="column">
      <Calendar date={selectedDate} onChange={setSelectedDate} />
      <Divider my={18} variant="dashboard" />
      <BirthdayPeopleList date={selectedDate} />
    </DashboardItem>
  );
}
