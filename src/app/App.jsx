import { HomePage } from '@pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import './styles/global.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App