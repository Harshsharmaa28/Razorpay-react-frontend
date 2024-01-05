import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Header from './components/header';
import HeroSection from './components/herosection';
import FeatureSection from './components/featuresec1';
import CoreFeaturesSection from './components/coresection';
import NewFeatureSection from './components/newfeature';
import CoreFeature from './components/corefeature';
import FeatureSection2 from './components/featuresec2';
import JoinRazorpaySection from './components/joinrazorpay';
import TestimonialSection from './components/testionomial';
import CTASection from './components/ctasection';
import Footer from './components/footer';


function App() {
  return (
    <div className=' overflow-x-hidden' >
      <Banner></Banner>
      <Header></Header>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <FeatureSection2></FeatureSection2>
      <NewFeatureSection></NewFeatureSection>
      <CoreFeature></CoreFeature>
      <JoinRazorpaySection></JoinRazorpaySection>
      <TestimonialSection></TestimonialSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </div>
  );
}

export default App;
