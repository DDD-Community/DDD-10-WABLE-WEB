import styled from '@emotion/styled';

const CardDirectionTabItem = styled.section<{ isActive: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? 'var(--chakra-colors-black)' : '#e2e8f0')};
  color: ${(props) =>
    props.isActive
      ? 'var(--chakra-colors-black)'
      : 'var(--chakra-colors-waggle-gray-700)'};
`;

const ViewTypeTabItem = styled.section<{ isActive: boolean }>`
  cursor: pointer;
  color: ${(props) =>
    props.isActive
      ? 'var(--chakra-colors-gray-600)'
      : 'var(--chakra-colors-gray-400)'};
`;

export { CardDirectionTabItem, ViewTypeTabItem };
