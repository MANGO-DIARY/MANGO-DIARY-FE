import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { DiaryListWrapper, EmotionListWrapper, EmotionAll, Toggle, ScrollableEmotionList, NoneData } from './DiaryList.styles';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import emotionList from '../../util/constants';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { Button } from '../../components/ToggleButton/ToggleButton.styles';
import { useDiaryList } from '../../api/queries/diary/diary-list';
import NavBar from '../../components/navBar/navBar';
import { PATH } from '../../route/path';
import Spiner from '../../components/Spiner/Spiner.jsx';

function DiaryList() {
  const { ref, inView } = useInView();
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // 감정 필터를 useDiaryList에 전달
  const { data, isLoading, isFetched, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useDiaryList(selectedEmotion);

  const nav = useNavigate();

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    refetch(); // 새로운 감정 선택 시 데이터를 다시 가져옴
  };

  const handleShowAllClick = () => {
    setSelectedEmotion(null);
    refetch(); // 전체 일기 보기 클릭 시 데이터를 다시 가져옴
  };

  // Infinite scroll로 다음 페이지 데이터 로드
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  const isNotData = !isLoading && !data?.pages[0]?.content?.length;

  return (
    <DiaryListWrapper className="use-navbar">
      <Header title="일기장" iconSrc={Images.left} onClick={() => nav(-1)} showButtonRight onRightClick={() => nav('/search')} rightIconSrc={Images.headerSearch} />
      <Toggle>
        <ToggleButton />
      </Toggle>
      <ScrollableEmotionList>
        <EmotionAll onClick={handleShowAllClick}> 전체일기</EmotionAll>
        {emotionList.map((item) => (
          <EmotionButton onClick={() => handleEmotionClick(item.emotion)} key={item.emotion} {...item} />
        ))}
      </ScrollableEmotionList>
      <DiaryListWrapper>
        {isNotData && <NoneData>등록된 일기가 없습니다.</NoneData>}
        {isFetched &&
          data?.pages.map((group, i) => (
            <React.Fragment key={String(i + 1)}>
              {group.content.map((item) => (
                <DiaryItem
                  onClick={() => {
                    nav(`${PATH.DIARYDETAIL_ENDPOINT}${item.id}`);
                  }}
                  key={item.id}
                  {...item}
                />
              ))}
            </React.Fragment>
          ))}
        <div style={{ width: '100%' }} ref={ref}>
          {isFetchingNextPage && <Spiner />}
        </div>
      </DiaryListWrapper>
      <NavBar></NavBar>
    </DiaryListWrapper>
  );
}

export default DiaryList;
