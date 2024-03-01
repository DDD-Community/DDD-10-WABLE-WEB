import styled from '@emotion/styled';
import { cardTypeImages } from '@/utils/cardImage';
import { CardType } from '../types';

const CardModalContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const Card = styled.div<{ type: CardType }>`
  width: 561px;
  height: 647px;
  padding: 62px 55px 0;

  background-image: ${(props) =>
    'url(' + cardTypeImages[props.type]['xl'] + ')'};
  background-repeat: no-repeat;
  background-size: cover;
`;

export { CardModalContainer, Card };
