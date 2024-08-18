import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { t } from 'i18next';
import { Stack } from '@mui/material';
import Header from '../../components/header/Header';
import { Images } from '../../styles/images';
import getHeaderDate from '../../util/getHeaderDate';
import { DiaryDetailWrap } from './styles';
import { AiComment, NavBar } from '../../components';
import { useDiaryDetail } from '../../api/queries/diary/diary-detail';
import { useDiaryDelelte } from '../../api/queries/diary/diary-delete';
import { PATH } from '../../route/path';
import Spiner from '../../components/Spiner/Spiner.jsx';

function DiaryDetail() {
  const { diaryId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('2024.08.06.');
  const { data: diaryData, isLoading: isDiaryLoading, refetch } = useDiaryDetail({ diaryId });
  const { mutate, isLoading: isDeleteLoading } = useDiaryDelelte(
    { diaryId },
    {
      onSuccess: () => {
        alert(t('diary-detail.delete-alert'));
        navigate(PATH.HOME);
      },
    }
  );

  function handleDeleteClick() {
    const isDelete = window.confirm(t('diary-detail.delete-confirm'));

    if (!isDelete) return;

    console.log('delete', isDelete, diaryId);
    mutate({ diaryId });
  }

  useEffect(() => {
    if (diaryId) {
      console.log(diaryId);
      refetch();
    }
  }, [refetch, diaryId]);

  useEffect(() => {
    if (diaryData) {
      setDate(getHeaderDate(diaryData?.date));
    }
  }, [diaryData]);

  if (isDiaryLoading || isDeleteLoading) {
    return <Spiner />;
  }

  return (
    diaryData && (
      <DiaryDetailWrap emotion={diaryData?.emotion} className="use-navbar">
        <Header
          title={date}
          iconSrc={Images.left}
          onClick={() => navigate(-1)}
          showButtonRight
          rightIconSrc={Images.deleteIcon}
          onRightClick={() => {
            handleDeleteClick();
          }}
        />
        <Stack>
          <div className="top">
            <img alt="emotion" />
            <p id="emotion-name">{t(`emotion.${diaryData?.emotion}`)}</p>
          </div>
          <article>{diaryData?.content}</article>
          <div className="ai-wrap">
            <AiComment aiComment={diaryData?.aiComment} />
          </div>
        </Stack>
        <NavBar />
      </DiaryDetailWrap>
    )
  );
}

export default DiaryDetail;
