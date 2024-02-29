export type CardType =
  | 'GREETING'
  | 'CELEBRATION'
  | 'ENCOURAGEMENT'
  | 'GRATITUDE';

export interface CardInfo {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  sid: CardType;
  fromUser: {
    id: number;
    name: string;
  };
  toUser: {
    id: number;
    name: string;
  };
  group: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
    };
  };
  content: string;
  visible: boolean;
}

export type CardDirection = 'SENT' | 'RECEIVED';

export type CardViewType = 'GRID' | 'LIST';
