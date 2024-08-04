import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DiaryDetail, Done, Login, NickNameReset, NotFound, PasswordReset, SignUp, Splash, CalendarPage } from './pages';
import DiaryList from './pages/DiaryList/DiaryList';
import DiaryList2 from './pages/DiaryList/DiaryList2';
import Search from './pages/Search/Search';
import { PATH } from './route/path.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.root} element={<Splash />} />
          <Route path={PATH.SIGNUP} element={<SignUp />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.PASSWORD_RESET} element={<PasswordReset />} />
          <Route path={PATH.NICKNAME_RESET} element={<NickNameReset />} />
          <Route path={PATH.DIARYLIST} element={<DiaryList />} />
          <Route path="/test" element={<DiaryList2 />} />
          <Route path={PATH.SEARCH} element={<Search />} />
          <Route path={PATH.DONE} element={<Done />} />
          <Route path={PATH.DIARYDETAIL} element={<DiaryDetail />} />
          <Route path={PATH.CALENDAR} element={<CalendarPage />} />
          {/* notFound : 일치하는 라우트 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
