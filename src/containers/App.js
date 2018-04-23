import React, {Component} from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import HeroImage from '../components/Sections/HeroImage'
import AboutGxx from '../components/Sections/AboutGxx'
import Service from '../components/Sections/Service'
import Contact from '../components/Sections/Contact'
import ContactUs from '../components/Sections/ContactUs'
import Question from '../components/Sections/Question'
import Should from '../components/Sections/Should'
import Statistics from '../components/Sections/Statistics'
import CardBg from '../components/Sections/CardBg'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <HeroImage/>
                <AboutGxx />
                <Service />
                <Should />
                <CardBg />
                <Contact />
                <Statistics />
                <Question />
                <ContactUs />
                <Footer/>
            </div>
        );
    }
}

export default App;
