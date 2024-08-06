/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import NavBar from '../../components/navBar/navBar';
import { MainContainer, MainTop, Comment, MainMiddle, FrameHeader, HeaderButton, MainBottom, Rank, EmotionRank, First, Second, Third, Phase } from './Main.styles';
import { useMain } from '../../api/queries/main/main';
import { useUserInfo } from '../../api/queries/user/useUserInfo';
import { useKakaoLogin } from '../../api/queries/auth/kakao-login.js';
import getEmotionImage from '../../util/get-emotion-img';
import { PATH_API } from '../../api/path.js';
import Spiner from '../../components/Spiner/Spiner.jsx';

function Main() {
  const nav = useNavigate(); // 네비게이션 훅
  const { data: CommentData } = useMain();
  const { data: mainData, isLoading: isMainLoading } = useMain(); // 데이터, 로딩 상태, 에러 상태
  const { data: userInfo, isLoading: isUserLoading } = useUserInfo(); // 데이터, 로딩 상태, 에러 상태

  // 현재 URL 정보를 가져오는 훅
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const { mutate, isLoading: KakaoLoading } = useKakaoLogin(code);

  useEffect(() => {
    if (code) {
      mutate({
        code,
        redirectUri: PATH_API.REDIRECT_URL,
      });
    }
  }, [code, mutate]);

  // 로딩 중 상태 처리
  if (isMainLoading || isUserLoading) return <Spiner />;

  const hasData = mainData && Array.isArray(mainData.topThreeEmotionThisMonth);

  // 데이터가 있을 때의 렌더링
  return (
    <MainContainer className="use-navbar">
      <MainTop>
        <div>
          <img src={Images.joy} alt="icon" />
        </div>
        <Comment>{CommentData.todayComment}</Comment>
      </MainTop>
      <MainMiddle>
        <FrameHeader>
          {userInfo?.userName}님의 최근 일기
          <HeaderButton onClick={() => nav('/diary-list')}>
            <img src={Images.right} alt="icon" />
          </HeaderButton>
        </FrameHeader>
        {hasData && mainData.todayDiary ? (
          <DiaryItem onClick={nav('/diary/detail/:diaryId')} emotion={mainData.todayDiary.emotion} date={mainData.todayDiary.date} content={mainData.todayDiary.content} />
        ) : (
          <DiaryItem content="작성하신 일기가 없습니다. 일기를 작성해 주세요" formattedDate={null} emotion="none" />
        )}
      </MainMiddle>
      <MainBottom>
        <FrameHeader>
          이번달의 감정순위
          <HeaderButton>
            <img src={Images.right} alt="icon" />
          </HeaderButton>
        </FrameHeader>
        <Rank>
          <EmotionRank>
            {hasData && mainData.topThreeEmotionThisMonth[0] && (
              <First onClick={nav('/chart')}>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[0]?.emotion)} alt="img" />
              </First>
            )}
            {hasData && mainData.topThreeEmotionThisMonth[1] && (
              <Second onClick={nav('/chart')}>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[1]?.emotion)} alt="img" />
              </Second>
            )}
            {hasData && mainData.topThreeEmotionThisMonth[2] && (
              <Third onClick={nav('/chart')}>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[2]?.emotion)} alt="img" />
              </Third>
            )}
            {!hasData && (
              <>
                <First></First>
                <Second></Second>
                <Third></Third>
              </>
            )}
          </EmotionRank>
          <Phase>
            <img src={Images.rank} alt="img" />
          </Phase>
        </Rank>
      </MainBottom>

      <NavBar />
    </MainContainer>
  );
}

export default Main;
