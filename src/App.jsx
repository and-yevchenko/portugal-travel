import './App.css'
import { Header } from './components/layout/Header/Header'
import { Parallax } from './components/Parallax/Parallax'
import { Title } from './components/Title/Title'


function App() {
  
  return (
    <div id='app'>
      <Header>
        <Parallax>
          <Title>Portugal</Title>
        </Parallax>
      </Header>
      <main className='main'></main>
    </div>
  )
}

export default App
