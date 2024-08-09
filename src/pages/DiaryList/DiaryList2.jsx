import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { axiosInstance } from '../../api/axios';
import { PATH_API } from '../../api/path';
import { DiaryListWrapper, EmotionListWrapper, EmotionAll, Toggle, ScrollableEmotionList } from './DiaryList.styles';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import emotionList from '../../util/constants';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { Button } from '../../components/ToggleButton/ToggleButton.styles';

function DiaryList2() {
  const nav = useNavigate();
  const [selectedEmotionName, setSelectedEmotionName] = useState(null);

  const handleEmotionClick = (emotionName) => {
    setSelectedEmotionName(emotionName);
  };

  const handleShowAllClick = () => {
    setSelectedEmotionName(null);
  };

  // fetch
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(4);
  const [hasNextPage, setHasNextPage] = useState(false);

  // intersection observer
  const { ref, inView } = useInView();

  const fetchDiaryList = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(PATH_API.DIARY_LIST, {
        params: { page, size },
      });
      // data = {content: []}
      setData((prev) => [...prev, ...response.data.content]);
      setPage((p) => p + 1);
      setHasNextPage(!response?.data?.last);
      console.log('@@@ response', response.data);
    } catch (err) {
      console.error('에러발생~~~~~~~~~~~~~', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchDiaryList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('@@@,fgajirfj', hasNextPage, isLoading);
    if (inView && hasNextPage && !isLoading) {
      fetchDiaryList();
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <DiaryListWrapper>
      <Header title="일기장" iconSrc={Images.left} onClick={() => nav(-1)} showButtonRight onRightClick={() => nav('/search')} />
      <Toggle>
        <ToggleButton />
      </Toggle>
      <ScrollableEmotionList>
        <EmotionAll onClick={handleShowAllClick}> 전체일기</EmotionAll>
        {emotionList.map((item) => (
          <EmotionButton onClick={() => handleEmotionClick(item.emotionName)} key={item.emotionName} {...item} />
        ))}
      </ScrollableEmotionList>
      <DiaryListWrapper>
        {data?.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
        <div style={{ width: '100%', backgroundColor: 'red' }} ref={ref}>
          {isLoading && <p>Loading ...</p>}
        </div>
      </DiaryListWrapper>
    </DiaryListWrapper>
  );
}

export default DiaryList2;
