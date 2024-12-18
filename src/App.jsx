import './App.css'
import RoutesPages from './Routes'
import HeaderComponent from './components/header/Header'
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <main >
          <HeaderComponent />
          <RoutesPages />
        </main>
      </div>
    </>
  )
}

export default App
