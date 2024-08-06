/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, CircularProgress, Grid } from '@mui/material';
import { Images } from '../../styles/images';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import NavBar from '../../components/navBar/navBar';

import {
  AiComment,
  AiRecommendContainer,
  AiRecommendText1,
  AiRecommendText2,
  AiSection,
  AiSection2,
  CreateButton,
  DiaryWriteContainer,
  EmotionNone,
  TextArea,
  TextAreaContainer,
} from './DiaryWrite.styles';
import { useEmotionAnalyz } from '../../api/queries/diary/emoton-analyz.js';
import { useComment } from '../../api/queries/diary/comment.js';
import emotionList from '../../util/constants.js';

function DiaryWrite() {
  const [diary, setDiary] = useState();
  const [emotion, setEmotion] = useState();
  const [diaryContent, setDiaryContent] = useState();
  const [otherEmotion, setOtherEmotion] = useState();
  const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage(error.message);
          },
        }
      );
    }
  };
  const onComment = (emotion) => {
    if (diary && emotion) {
      commentMutate(
        {
          diaryContent: diary,
          emotion: emotion,
        },
        {
          onSuccess: (data) => {
            setDiaryContent(data.aiComment);
          },
          onError: (error) => {
            setErrorMessage(error.message);
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
      {emotion && !otherEmotion && (
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
                    onComment(item);
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={3}>
              <EmotionNone
                onClick={() => {
                  setOtherEmotion(true);
                }}
              >
                다른감정선택
              </EmotionNone>
            </Grid>
          </Grid>
        </AiSection>
      )}

      {otherEmotion && (
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
                <EmotionButton
                  {...item}
                  onClick={() => {
                    onComment(item.emotion);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </AiSection2>
      )}
      {(isAnalyzLoading || isCommentLoading) && <CircularProgress className="progress" color="inherit" />}

      {diaryContent && !isCommentLoading && (
        <AiComment>
          <img src={Images.Bulb} alt="icon" />
          {diaryContent}
        </AiComment>
      )}
      {errorMessage && (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage('');
          }}
          sx={{ margin: '10px 20px' }}
        >
          {errorMessage}
        </Alert>
      )}
      <NavBar />
    </DiaryWriteContainer>
  );
}

export default DiaryWrite;
