import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/Home/HomePage';
import Layout from './Layout/Layout';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryCoursePage from './pages/CategoryCoursePage/CategoryCoursePage';
import InfoUserPage from './pages/InfoUserPage/InfoUserPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ListCoursePage from './pages/ListCoursePage/ListCoursePage';
import BlogPage from './pages/BlogPage/BlogPage';
import EventPage from './pages/EventPage/EventPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout Component={HomePage} />} />
          <Route path='/detail/:id' element={<Layout Component={DetailPage} />} />
          <Route path='/category/:id' element={<Layout Component={CategoryCoursePage} />} />
          <Route path='/infouser' element={<Layout Component={InfoUserPage} />} />
          <Route path='/search/:value' element={<Layout Component={SearchPage} />} />
          <Route path='/listcourse' element={<Layout Component={ListCoursePage} />} />
          <Route path='/blog' element={<Layout Component={BlogPage} />} />
          <Route path='/event/sale' element={<Layout Component={EventPage} />} />
          <Route path='/about' element={<Layout Component={AboutPage} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
