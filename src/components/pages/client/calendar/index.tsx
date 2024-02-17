import { DayPicker } from 'react-day-picker';
import { StyleWrapper } from './style';
import 'react-day-picker/dist/style.css';

export default function Calendar({
  date,
  onChange,
}: {
  date: Date | undefined;
  onChange: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <StyleWrapper>
      <DayPicker
        mode="single"
        captionLayout="dropdown"
        fromYear={2024}
        toYear={2024}
        showOutsideDays
        required
        selected={date}
        modifiers={{ booked: [new Date(2024, 1, 11)] }}
        modifiersStyles={{
          booked: {
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
          },
        }}
        weekStartsOn={1}
        onSelect={onChange}
      />
    </StyleWrapper>
  );
}
