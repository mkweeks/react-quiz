import {Route, Routes} from 'react-router-dom'
import MainMenu from "./Views/MainMenu"
import QuestionPage from './Views/QuestionPage.jsx'
import FinalScore from './Views/FinalScore.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path='/:id' element={<QuestionPage />} />
        <Route path='/:id/score' element={<FinalScore />} />
      </Routes>
    </>
  )
}

export default App
