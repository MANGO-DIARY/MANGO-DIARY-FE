/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import NavBar from '../../components/navBar/navBar';
import { MainContainer, MainTop, MainMiddle, FrameHeader, HeaderButton, MainBottom, Rank, EmotionRank, First, Second, Third, Phase } from './Main.styles';
import { useMain } from '../../api/queries/main/main';
import { useUserInfo } from '../../api/queries/user/useUserInfo';
import getEmotionImage from '../../util/get-emotion-img';
import { useKakaoLogin } from '../../api/queries/auth/kakao-Login.js';
import { PATH_API } from '../../api/path.js';

function Main() {
  const nav = useNavigate(); // 네비게이션 훅
  const { data: mainData, isLoading: isMainLoading } = useMain(); // 데이터, 로딩 상태, 에러 상태
  const { data: userInfo, isLoading: isUserLoading } = useUserInfo(); // 데이터, 로딩 상태, 에러 상태

  // 현재 URL 정보를 가져오는 훅
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const { mutate, isLoading } = useKakaoLogin(code);

  useEffect(() => {
    if (code) {
      mutate({
        code,
        redirectUri: PATH_API.REDIRECT_URL,
      });
    }
  }, [code, mutate]);

  // 로딩 중 상태 처리
  if (isMainLoading || isUserLoading) return <div>로딩 중...</div>;

  // 데이터가 없을 때의 처리
  if (!mainData) return <div>데이터가 없습니다</div>;

  // 데이터가 있을 때의 렌더링
  return (
    <MainContainer>
      <MainTop>
        <div>
          <img src={Images.joy} alt="icon" />
        </div>
        <div>{mainData.todayComment}</div>
      </MainTop>
      <MainMiddle>
        <FrameHeader>
          {userInfo?.userName}님의 최근 일기
          <HeaderButton onClick={() => nav('/diary-list')}>
            <img src={Images.right} alt="icon" />
          </HeaderButton>
        </FrameHeader>
        <DiaryItem emotion={mainData.todayDiary.emotion} date={mainData.todayDiary.date} content={mainData.todayDiary.content} />
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
            {mainData.topThreeEmotionThisMonth[0] && (
              <First>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[0]?.emotion)} alt="img" />
              </First>
            )}
            {mainData.topThreeEmotionThisMonth[1] && (
              <Second>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[1]?.emotion)} alt="img" />
              </Second>
            )}
            {mainData.topThreeEmotionThisMonth[2] && (
              <Third>
                <img src={getEmotionImage(mainData.topThreeEmotionThisMonth[2]?.emotion)} alt="img" />
              </Third>
            )}
          </EmotionRank>
          <Phase>
            <img src={Images.rank} alt="img" />
          </Phase>
        </Rank>
      </MainBottom>
      <div className="navBar">
        <NavBar />
      </div>
    </MainContainer>
  );
}

export default Main;
