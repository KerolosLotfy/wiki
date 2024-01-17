import './App.css'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { MainSection } from './components/main-section';
import { Home } from './components/sub-components/home';
import { Soon } from './components/sub-components/soon';
import { Quizzes } from './components/sub-components/quizzes';
import { Error404 } from './components/error';

function App() {
  return (
    <Browser basename='wiki'>
      <Header />
      <Routes>
        <Route path='/' element={<> <MainSection /></>}>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Soon />} />
        </Route>
        <Route path='quizzes' element={<Quizzes />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </Browser>
  )
}

export default App;
