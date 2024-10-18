import { Route, Routes } from 'react-router-dom'
import MainMenu from "./Views/MainMenu"
import QuestionPage from './Views/QuestionPage.jsx'
import FinalScore from './Views/FinalScore.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index path='/' element={<MainMenu />} />
            <Route path='/:id' element={<QuestionPage />} />
            <Route path='/:id/score' element={<FinalScore />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
