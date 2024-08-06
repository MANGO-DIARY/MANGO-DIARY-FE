/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Images } from '../../styles/images';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import NavBar from '../../components/navBar/navBar';

import { AiComment, AiRecommendContainer, AiRecommendText1, AiRecommendText2, AiSection, CreateButton, DiaryWriteContainer, EmotionNone, TextArea, TextAreaContainer } from './DiaryWrite.styles';
import { useEmotionAnalyz } from '../../api/queries/diary/emoton-analyz.js';
import { useComment } from '../../api/queries/diary/comment.js';

function DiaryWrite() {
  const [diary, setDiary] = useState();
  const [emotion, setEmotion] = useState();
  const [selectEmotion, setSelectEmotion] = useState();
  const [diaryContent, setDiaryContent] = useState();
  const { mutate: emotionAnalyzMutate, isPending: isAnalyzLoading } = useEmotionAnalyz();
  const { mutate: commentMutate, isPending: isCommentLoading } = useComment();

  const onEmotionAnalyz = () => {
    if (diary) {
      emotionAnalyzMutate(
        {
          diaryContent: diary,
        },
        {
          onSuccess: (data) => {
            setEmotion(data.emotions);
          },
          onError: (error) => {
            console.log(error.message);
          },
        }
      );
    }
  };
  const onComment = () => {
    if (diary && emotion) {
      commentMutate(
        {
          diaryContent: diary,
          emotion: selectEmotion,
        },
        {
          onSuccess: (data) => {
            setDiaryContent(data.aiComment);
          },
          onError: (error) => {
            console.log(error.message);
          },
        }
      );
    }
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
        <TextArea value={diary} onChange={(e) => setDiary(e.target.value)} placeholder={'오늘 있었던 핵시 사건과 감정에 관한 일기를 150자 이내로 작성해보세요.'} />
      </TextAreaContainer>
      <CreateButton onClick={onEmotionAnalyz}>일기쓰기</CreateButton>
      {emotion && (
        <AiSection>
          <AiRecommendContainer>
            <AiRecommendText1>
              <img src={Images.ai} alt="icon" />
              일기를 바탕으로 유사한 감정 3개를 추려봤어요. 현재 기분과 가장 가까운 감정을 선택해주세요.
            </AiRecommendText1>
            <AiRecommendText2>(만약 감정이 없다면, 다른 감정 선택을 눌러주세요)</AiRecommendText2>
          </AiRecommendContainer>
          <Grid container spacing={1} sx={{ marginTop: '5px' }}>
            {emotion?.map((item, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item xs={3} key={key}>
                <EmotionButton
                  emotion={item}
                  onClick={() => {
                    setSelectEmotion(item);
                    onComment();
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={3}>
              <EmotionNone> 다른감정선택</EmotionNone>
            </Grid>
          </Grid>
        </AiSection>
      )}
      {isAnalyzLoading && <div>감정 분석중...</div>}
      {/* <AiSection2> */}
      {/*   <AiRecommendContainer> */}
      {/*     <AiRecommendText1> */}
      {/*       <img src={Images.ai} alt="icon" /> */}
      {/*       감정을 선택해주세요! */}
      {/*     </AiRecommendText1> */}
      {/*   </AiRecommendContainer> */}
      {/*   <Grid container spacing={1} sx={{ marginTop: '5px' }}> */}
      {/*     {emotionList.map((item) => ( */}
      {/*       <Grid item xs={3} key={item.emotion}> */}
      {/*         <EmotionButton {...item} /> */}
      {/*       </Grid> */}
      {/*     ))} */}
      {/*   </Grid> */}
      {/* </AiSection2> */}
      {diaryContent && (
        <AiComment>
          <img src={Images.Bulb} alt="icon" />
          {diaryContent}
        </AiComment>
      )}

      <NavBar />
    </DiaryWriteContainer>
  );
}

export default DiaryWrite;
