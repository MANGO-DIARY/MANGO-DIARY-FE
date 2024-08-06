/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Colors } from '../../styles/colors.js';

export const DiaryWriteContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .progress {
    margin-top: 40px;
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 160px;
  padding: 20px 20px;
  font-size: 19px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  resize: none;
  font-size: 19px;
  line-height: 30px;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  &:focus {
    outline: none;
    border: none;
    border-radius: 8px;
  }
`;

export const CreateButton = styled.button`
  margin-left: auto;
  right: 0;
  width: fit-content;
  color: black;
  padding: 0 15px;
  height: 40px;
  cursor: pointer;
  font-size: 17px;
  border: none;
  border-radius: 30px;
  background-color: ${Colors.Light_Red};
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
`;

export const AiSection = styled.div`
  padding: 10px;
`;

export const AiSection2 = styled.div`
  padding: 10px;
`;

export const AiRecommendContainer = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  font-size: 17px;
`;

export const AiRecommendText1 = styled.div`
  width: 88%;
  display: flex;
  align-items: flex-start;

  img {
    margin-right: 15px;
  }
`;

export const AiRecommendText2 = styled.div`
  margin-left: 45px;
  color: #909090;
`;

export const AiButtonContainer1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

export const EmotionNone = styled.button`
  min-width: 84px;
  height: 58px;
  text-align: center;
  font-size: 15px;
  color: black;
  border: none;
  border-radius: 30px;
  background-color: rgba(182, 177, 181, 0.2);
  cursor: pointer;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;

  :hover {
    border: 2px solid #d9d9d9;
  }
`;

export const AiButtonContainer2 = styled.div`
  width: 100%;
  display: gird;
  margin-top: 15px;
  gap: 10px;
`;

export const AiComment = styled.div`
  margin-top: 5px;
  margin: 30px 10px;
  padding: 20px;
  font-size: 17px;
  display: flex;
  align-items: flex-start;
  border: 1px solid #808080;
  border-radius: 8px;

  img {
    margin-right: 15px;
  }
`;
