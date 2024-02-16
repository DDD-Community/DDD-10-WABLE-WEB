import styled from '@emotion/styled';

const StyleWrapper = styled.div`
  .rdp {
    --rdp-cell-size: 44px;
    --rdp-background-color: #fff;

    margin: 0;
    margin-bottom: 16px;
  }

  .rdp-month {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rdp-caption {
    justify-content: center;
  }

  .rdp-caption_dropdowns {
    display: flex;
    gap: 38px;
  }

  .rdp-caption_label {
    padding: 8px 16px;
    font-size: 14px;
  }

  .rdp-dropdown_month {
    background: #fff;
    border-radius: 40px;
  }

  .rdp-head_cell {
    font-size: 14px;
    text-transform: none;
  }

  th[aria-label='Saturday'],
  .rdp-row .rdp-cell:nth-child(6) {
    color: #2b6cb0;
  }

  th[aria-label='Sunday'],
  .rdp-row .rdp-cell:nth-child(7) {
    color: #c53030;
  }

  .rdp-day {
    font-size: 12px;
    font-weight: 500;
  }

  .rdp-day_outside {
    color: #dcdcdd;
  }

  .rdp-day[aria-selected='true'] {
    font-weight: normal;
    background-color: black;
  }
`;

export { StyleWrapper };
