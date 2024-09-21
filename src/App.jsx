import './App.css';
import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { Main } from './components/layout/Main/Main';
import { Parallax } from './components/Parallax/Parallax';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { About } from './section/About/About';
import { ContactUs } from './section/Contacts/ContactUs';
import { DiscoverPortugal } from './section/DiscoverPortugal/DiscoverPortugal';
import { FAQs } from './section/FAQs/FAQs';
import { TravelPlan } from './section/TravelPlan/TravelPlan';

function App() {
    const hookSmooth = useSmoothScroll();

    return (
        <div id="app">
            <Header hookSmooth={hookSmooth}>
                <Parallax hookSmooth={hookSmooth} />
            </Header>
            <Main>
                <DiscoverPortugal tour={hookSmooth.refs.tour} />
                <TravelPlan />
                <FAQs faqs={hookSmooth.refs.faqs} />
                <About about={hookSmooth.refs.about} />
                <ContactUs contact={hookSmooth.refs.contact} />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
