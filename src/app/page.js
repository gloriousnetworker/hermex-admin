import Navbar from '../components/landing/Navbar';
import SectionOne from '../components/landing/SectionOne';
import SectionTwo from '../components/landing/SectionTwo';
import SectionThree from '../components/landing/SectionThree';
import SectionFour from '../components/landing/SectionFour';
import SectionFive from '../components/landing/SectionFive';
import SectionSix from '../components/landing/SectionSix';
import SectionSeven from '../components/landing/SectionSeven';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionOne id="section1" />
      <SectionTwo id="section2" />
      <SectionThree id="section3" />
      <SectionFour id="section4" />
      <SectionFive id="section5" />
      <SectionSix id="section6" />
      <SectionSeven id="section7" />
      <Footer />
    </div>
  );
}
