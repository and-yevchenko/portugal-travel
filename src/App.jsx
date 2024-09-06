import './App.css'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { Parallax } from './components/Parallax/Parallax'
import { About } from './section/About/About'
import { ContactUs } from './section/Contacts/ContactUs'
import { DiscoverPortugal } from './section/DiscoverPortugal/DiscoverPortugal'
import { FAQs } from './section/FAQs/FAQs'
import { TravelPlan } from './section/TravelPlan/TravelPlan'


function App() {

  return (
    <div id='app'>
      <Header>
        <Parallax />
      </Header>
      <main className='main'>
        <DiscoverPortugal />
        <TravelPlan />
        <FAQs />
        <About />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
