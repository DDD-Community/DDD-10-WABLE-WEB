import Card from '@/components/pages/home/card';
import { DividerWithContent } from '@/components/common/divider-with-content';

const MOCK_DATA = [
  {
    from: '조성원',
    to: '김도경',
    type: '감사',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '신승준',
    to: '김도경',
    type: '인사',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '조성원',
    to: '신승준',
    type: '응원',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    from: '김도경',
    to: '신승준',
    type: '축하',
    time: new Date(),
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
];

export default function CardSection() {
  return (
    <>
      <DividerWithContent
        content="12월 20일"
        bg="waggle.gray.100"
        variant="dashboard"
        fontSize={12}
      />
      {MOCK_DATA.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </>
  );
}
