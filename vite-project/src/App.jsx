import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PublicPage from './pages/PublicPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PublicPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
