import React from 'react';
import { useParams } from 'react-router-dom';

function DiaryDetail() {
  const { diaryId } = useParams();

  return <>diaryDetail {diaryId}</>;
}

export default DiaryDetail;
