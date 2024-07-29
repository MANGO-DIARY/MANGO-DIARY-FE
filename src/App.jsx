import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login, NotFound, PasswordReset, SignUp, Splash } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          {/* notFound : 일치하는 라우트 없는 경우 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
