/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const DiaryItemWrapper = styled.div`
  height: 200px;
  border: 1px solid #707070;
  border-radius: 20px;
  margin: 0 25px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ImgSection = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  font-size: 20px;

  &.img_section_1 {
    color: #f21717;
  }
  &.img_section_2 {
    color: #c525fe;
  }
  &.img_section_3 {
    color: #918e92;
  }
  &.img_section_4 {
    color: #ed9c24;
  }
  &.img_section_5 {
    color: #fa57f4;
  }
  &.img_section_6 {
    color: #f5c829;
  }
  &.img_section_7 {
    color: #0eb6ec;
  }
  &.img_section_8 {
    color: #1b89c6;
  }
`;

export const CreatedDate = styled.div`
  position: absolute;
  left: 0%;
  margin-left: 20px;
`;

export const Content = styled.div`
  max-width: 200px;
  font-size: 20px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  position: relative;
`;
