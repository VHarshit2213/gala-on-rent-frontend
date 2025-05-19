import { Route, Routes } from 'react-router-dom'
import './App.css'
import { nonPrivateRoute } from './Route'

function App() {

  return (
    <Routes>
      {
        nonPrivateRoute?.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))
      }
    </Routes>
  )
}

export default App
