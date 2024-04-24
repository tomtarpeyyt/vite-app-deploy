import './App.css'
import HeroSection from './components/hero-section';

import Navbar from './components/nav-bar';
import PricingSection from './components/pricing-section';
import ProductSection from './components/products';
import WorkSection from './components/work';

export default function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      { /* TODO: maybe a Features section? */ }
      <WorkSection />
      <PricingSection />
      <ProductSection />
      { /* TODO: Footer */ }
    </>
  )
}


