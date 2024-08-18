import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { DiaryDetail, Done, Login, NickNameReset, NotFound, PasswordReset, SignUp, Splash, CalendarPage, ChartPage } from './pages';
import DiaryList from './pages/DiaryList/DiaryList';
import { PATH } from './route/path.js';
import Main from './pages/Main/Main.jsx';
import Search from './pages/Search/Search';
import Setting from './pages/setting/Setting.jsx';
import DiaryWrite from './pages/DiaryWrite/DiaryWrite.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, [accessToken]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isAuthenticated && <Route path="*" element={<Navigate to={PATH.HOME} />} />}

          <Route path={PATH.root} element={<Splash />} />
          <Route path={PATH.SIGNUP} element={<SignUp />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.PASSWORD_RESET} element={<PasswordReset />} />
          <Route path={PATH.NICKNAME_RESET} element={<NickNameReset />} />
          <Route path={PATH.DIARYLIST} element={<DiaryList />} />
          <Route path={PATH.HOME} element={<Main />} />
          <Route path={PATH.DIARYWRITE} element={<DiaryWrite />} />
          <Route path={PATH.SEARCH} element={<Search />} />
          <Route path={PATH.DONE} element={<Done />} />
          <Route path={PATH.DIARYDETAIL} element={<DiaryDetail />} />
          <Route path={PATH.CHART} element={<ChartPage />} />
          <Route path={PATH.CALENDAR} element={<CalendarPage />} />
          <Route path={PATH.SETTING} element={<Setting />} />
          {/* notFound : 일치하는 라우트 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
