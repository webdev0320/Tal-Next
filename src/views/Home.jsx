import HeroBanner from '../components/HeroBanner';
import ReviewsBadge from '../components/ReviewsBadge';
import WhyChooseUs from '../components/WhyChooseUs';
import Expertise from '../components/Expertise';
import Partners from '../components/Partners';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import Achievements from '../components/Achievements';
import OnlineAccountants from '../components/OnlineAccountants';
import CharteredAccountantInfo from '../components/CharteredAccountantInfo';
import TargetSegments from '../components/TargetSegments';
import SwitchAccountantsCTA from '../components/SwitchAccountantsCTA';
import StatsCounter from '../components/StatsCounter';
import SoftwareSection from '../components/SoftwareSection';
import TopRatedCTA from '../components/TopRatedCTA';
import ReviewsSlider from '../components/ReviewsSlider';
import TeamRefer from '../components/TeamRefer';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';

function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="-mt-16"><ReviewsBadge /></div>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal animation="fade-in" delay={100}>
        <Expertise />
      </ScrollReveal>
      <ScrollReveal animation="fade-in" delay={100}>
        <Partners />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-left">
        <AboutUsSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-in">
        <CharteredAccountantInfo />
      </ScrollReveal>
      <ScrollReveal animation="fade-right">
        <Achievements />
      </ScrollReveal>
      <ScrollReveal>
        <OnlineAccountants />
      </ScrollReveal>
      <ScrollReveal animation="fade-left">
        <TargetSegments />
      </ScrollReveal>
      <ScrollReveal animation="scale-in">
        <SwitchAccountantsCTA />
      </ScrollReveal>
      <ScrollReveal>
        <StatsCounter />
      </ScrollReveal>
      <ScrollReveal animation="fade-right">
        <TopRatedCTA />
      </ScrollReveal>
      <ScrollReveal>
        <ReviewsSlider />
      </ScrollReveal>
      <ScrollReveal animation="fade-in" delay={100}>
        <SoftwareSection />
      </ScrollReveal>
      <ScrollReveal>
        <TeamRefer />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>
    </div>
  );
}

export default Home;
