import './App.css'
import { Header } from './components/layout/Header/Header'
import { Parallax } from './components/Parallax/Parallax'
import { Title } from './components/Title/Title'
import { DiscoverPortugal } from './section/DiscoverPortugal/DiscoverPortugal'
import { TravelPlan } from './section/TravelPlan/TravelPlan'


function App() {
  
  return (
    <div id='app'>
      <Header>
        <Parallax>
          <Title>Portugal</Title>
        </Parallax>
      </Header>
      <main className='main'>
        <DiscoverPortugal />
        <TravelPlan />
        <section className='three'></section>
      </main>
    </div>
  )
}

export default App
