/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
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
import { useDiarySubmit } from '../../api/queries/diary/diary-submit.js';
import { useMain } from '../../api/queries/main/main.js';

const today = dayjs(new Date());

function DiaryWrite() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today); // dayjs 객체!!
  const [diary, setDiary] = useState();
  const [emotion, setEmotion] = useState();
  const [diaryContent, setDiaryContent] = useState();
  const [selectEmotion, setSelectEmotion] = useState();
  const [otherEmotion, setOtherEmotion] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate: emotionAnalyzMutate, isPending: isAnalyzLoading } = useEmotionAnalyz();
  const { mutate: commentMutate, isPending: isCommentLoading } = useComment();
  const { mutate: diaryMutate, isPending: isDiaryLoading } = useDiarySubmit();
  const { refetch: mainRefetch } = useMain();

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
  // eslint-disable-next-line no-shadow
  const onComment = (emotion) => {
    if (diary && emotion) {
      commentMutate(
        {
          diaryContent: diary,
          emotion: emotion,
        },
        {
          onSuccess: (data) => {
            setSelectEmotion(emotion);
            setDiaryContent(data.aiComment);
          },
          onError: (error) => {
            setErrorMessage(error.message);
          },
        }
      );
    }
  };

  const onSubmit = () => {
    diaryMutate(
      {
        content: diary,
        date: selectedDate.format('YYYY-MM-DD'),
        emotion: selectEmotion,
        aiComment: diaryContent,
      },
      {
        onSuccess: (data) => {
          console.log('diary submit success on ', selectedDate.format('YYYY-MM-DD'));
          mainRefetch();
        },
        onError: (error) => {
          setErrorMessage(error.message);
        },
      }
    );
  };

  const nav = useNavigate();

  return (
    <div className="use-navbar">
      <Header
        title={selectedDate.format('YYYY년 MM월 DD일')}
        iconSrc={Images.left}
        onClick={() => nav(-1)}
        showButtonRight
        rightIconSrc={Images.calendar}
        onRightClick={() => {
          setIsOpen(true);
        }}
      />
      <DiaryWriteContainer>
        <DiaryWirteDatePicker {...{ selectedDate, setSelectedDate, isOpen, setIsOpen }} />
        <TextAreaContainer>
          <TextArea value={diary} onChange={(e) => setDiary(e.target.value)} placeholder="오늘 있었던 핵심 사건과 감정에 관한 일기를 150자 이내로 작성해보세요." />
        </TextAreaContainer>
        <CreateButton onClick={onEmotionAnalyz}>일기 분석하기</CreateButton>
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
                  다른감정
                  <br />
                  선택
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
            sx={{ margin: '10px 40px', width: '100%' }}
          >
            {errorMessage}
          </Alert>
        )}
        {diaryContent && !isCommentLoading && <CreateButton onClick={onSubmit}>저장하기</CreateButton>}
        <NavBar />
      </DiaryWriteContainer>
    </div>
  );
}

export default DiaryWrite;

function DiaryWirteDatePicker({ selectedDate, setSelectedDate, isOpen, setIsOpen }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        openTo="day"
        views={['year', 'month', 'day']}
        disableFuture
        slots={{ field: () => null }}
        value={selectedDate}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        onChange={(e) => {
          setSelectedDate(e);
          setIsOpen(false);
        }}
      />
    </LocalizationProvider>
  );
}
