
import './App.css';
import Card from './components/Card';
import Navbar from "./components/Navbar"
import Data from "./Data"

function App() {

  const newdata = Data.map((item) => {
    return (
    < Card
        item={item}
    />
    )
  })
  return (
      <div>
      <Navbar/>
      {newdata}
      </div>
  )
}

export default App;
