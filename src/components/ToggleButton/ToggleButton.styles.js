/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Switch = styled.div`
  position: relative;
  width: 180px;
  height: 26px;
  display: flex;
  align-items: center;
  border: 1px solid #909090;
  border-radius: 12px;
  span {
    position: absolute;
    width: 90px;
    height: 21px;
    border-radius: 15px;
    background-color: #505050;
    margin: 0 1px;
    // transition: all 0.6s ease-in-out;
    z-index: 1;
    transform: ${({ value }) => (value === 'Diary' ? 'translateX(1px)' : 'translateX(86px)')};
  }
`;

export const Button = styled.button`
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 21px;
  color: #9c9c9c;
  gap: 3px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background: none;
  z-index: 2;
`;

export const DiaryBtn = styled(Button)`
  color: ${({ value }) => (value === 'Diary' ? '#ffffff' : null)};
`;

export const CalendarBtn = styled(Button)`
  color: ${({ value }) => (value === 'Calendar' ? '#ffffff' : null)};
  padding-left: 1px;
`;
