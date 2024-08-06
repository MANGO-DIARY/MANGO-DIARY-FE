/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Images } from '../../styles/images';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import NavBar from '../../components/navBar/navBar';

import {
  DiaryWriteContainer,
  TextAreaContainer,
  TextArea,
  AiSection,
  AiSection2,
  AiRecommendContainer,
  AiRecommendText1,
  AiRecommendText2,
  AiComment,
  EmotionNone,
  CreateButton,
} from './DiaryWrite.styles';
import getEmotionImage from '../../util/get-emotion-img';
import emotionList from '../../util/constants';

const mocData = [
  {
    createdDate: new Date('2024-07-19').getTime(),
    emotion: '기쁨',
    content: '1번 일기 내용',
  },
];

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE':
//       return [action.data, ...state];
//     default:
//       return state;
//   }
// }

function DiaryWrite() {
  // const [data, dispatch] = useReducer(reducer, mocData);
  //
  // const onCreate = (content) => {
  //   dispatch({
  //     type: 'CREATE',
  //     data: {
  //       content,
  //     },
  //   });
  // };

  const onSubmit = (input) => {
    // onCreate(input.content);
  };

  const date = new Date();

  const year = date.getFullYear().toString().slice();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;
  const nav = useNavigate();

  return (
    <DiaryWriteContainer>
      <Header title={formattedDate} iconSrc={Images.left} onClick={() => nav(-1)} />
      <TextAreaContainer>
        <TextArea />
      </TextAreaContainer>
      <CreateButton onClick={onSubmit}>일기쓰기</CreateButton>
      <AiSection>
        <AiRecommendContainer>
          <AiRecommendText1>
            <img src={Images.ai} alt="icon" />
            일기를 바탕으로 유사한 감정 3개를 추려봤어요. 현재 기분과 가장 가까운 감정을 선택해주세요.
          </AiRecommendText1>
          <AiRecommendText2>(만약 감정이 없다면, 다른 감정 선택을 눌러주세요)</AiRecommendText2>
        </AiRecommendContainer>
        <Grid container spacing={1} sx={{ marginTop: '5px' }}>
          <Grid item xs={3}>
            <EmotionButton emotion="기쁨" />
          </Grid>
          <Grid item xs={3}>
            <EmotionButton emotion="행복" />
          </Grid>
          <Grid item xs={3}>
            <EmotionButton emotion="평온" />
          </Grid>
          <Grid item xs={3}>
            <EmotionNone> 다른감정선택</EmotionNone>
          </Grid>
        </Grid>
      </AiSection>
      <AiSection2>
        <AiRecommendContainer>
          <AiRecommendText1>
            <img src={Images.ai} alt="icon" />
            감정을 선택해주세요!
          </AiRecommendText1>
        </AiRecommendContainer>
        <Grid container spacing={1} sx={{ marginTop: '5px' }}>
          {emotionList.map((item) => (
            <Grid item xs={3} key={item.emotion}>
              <EmotionButton {...item} />
            </Grid>
          ))}
        </Grid>
      </AiSection2>
      <AiComment>
        <img src={Images.Bulb} alt="icon" />이 일기에 담긴 감정은 기쁨입니다. 하루 종일 놀이공원에서 가족과 함께한 시간이 행복하고 신나는 경험으로 가득 차 있음을 보여줍니다.
      </AiComment>
      <NavBar />
    </DiaryWriteContainer>
  );
}

export default DiaryWrite;
