import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login, NickNameReset, NotFound, PasswordReset, SignUp, Splash } from './pages';
import DiaryList from './pages/DiaryList/DiaryList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/nickname-reset" element={<NickNameReset />} />
          <Route path="/diaryList" element={<DiaryList />} />
          {/* notFound : 일치하는 라우트 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
