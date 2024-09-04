import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from './components/navigation/navigation'
import { Websoket } from './pages/websoket/websoket'
import { WeatherApp } from './pages/weather/weather'
import { Scroll } from './pages/scroll/scroll'

function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Websoket />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/scroll" element={<Scroll />} />
          </Routes>
        <Navigation/>
      </BrowserRouter>
    </>
  )
}

export default App
