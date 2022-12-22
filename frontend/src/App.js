import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const { word, setWord } = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Header />
      <Search word={word} setWord={setWord} searchSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
