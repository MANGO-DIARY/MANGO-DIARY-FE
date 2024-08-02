import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import Header from '../../components/header/Header';
import { Images } from '../../styles/images';
import getHeaderDate from '../../util/getHeaderDate';
import { DiaryDetailWrap } from './styles';

const mockupData = {
  id: 1,
  content:
    '오늘은 가족과 함께 놀이공원에 갔다. 아침 일찍 출발해서 놀이공원에 도착하니 벌써 많은 사람들이 있었다. 먼저 롤러코스터를 탔다. 처음에는 무서웠지만, 타고 나니 정말 신났다. 그 다음에는 관람차를 타고 높은 곳에서 놀이공원을 내려다봤다. 풍경이 정말 아름다웠다.',
  date: '2024-08-02',
  emotion: '기쁨',
  aiComment: '오늘 하루 정말 즐거운 시간을 보낸 것 같아서 기뻐요. 이런 소중한 추억들이 앞으로도 많은 힘이 될 거예요!',
};

function DiaryDetail() {
  const { diaryId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('2024.08.06.');
  const [diaryData, setDiaryData] = useState(mockupData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(diaryId);
    setDiaryData(mockupData);
    setDate(getHeaderDate(mockupData.date));
    setIsLoading(true);
  }, [diaryId]);

  return (
    isLoading && (
      <DiaryDetailWrap emotion={diaryData.emotion}>
        <Header title={date} iconSrc={Images.left} onClick={() => navigate(-1)} />
        <Stack>
          <div className="top">
            <img alt="emotion" />
            <p id="emotion-name">{diaryData.emotion}</p>
          </div>
          <article>{diaryData.content}</article>
          <div className="ai-wrap">
            <img alt="ai" src={Images.ai} />
            <span className="ai-comment">&quot;{diaryData.aiComment}&quot;</span>
          </div>

          <div className="bottom">
            <Button variant="contained" color="secondary">
              삭제하기
            </Button>
          </div>
        </Stack>
      </DiaryDetailWrap>
    )
  );
}

export default DiaryDetail;
