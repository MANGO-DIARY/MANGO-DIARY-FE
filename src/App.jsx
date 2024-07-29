import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login, NickNameReset, NotFound, PasswordReset, SignUp, Splash } from './pages';
import DiaryList from './pages/DiaryList/DiaryList';

// 데이터를 DiaryList 페이지 구현때문에 임시로 만들었어요.
const mocData = [
  {
    id: 1,
    createdDate: new Date('2024-07-19').getTime(),
    emotionId: 1,
    content: '안녀하세요 오늘 너무 즐거웠어요호호 . . .',
  },
  {
    id: 2,
    createdDate: new Date('2024-07-18').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2024-07-28').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
  {
    id: 4,
    createdDate: new Date('2024-07-29').getTime(),
    emotionId: 1,
    content: '4번 일기 내용',
  },
];

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
          <Route path="/diaryList" element={<DiaryList data={mocData} />} />
          {/* notFound : 일치하는 라우트 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
