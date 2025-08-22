import HomeBanner from './HomeBanner';
import HomeContent from './HomeContent';
import IndustrySection from './IndustrySection';
import TechnologySection from './TechnologySection';  
import SchoolManagementBanner from './SchoolManagementBanner';
import WhyNilofar  from './WhyNilofar';
import WorkProcess from './WorkProcess';
// import TrustedClients from './TrustedClients';
import Footer from './Footer';

function Home() {
  return (
    <div >
      <HomeBanner /> 
      <HomeContent />
      <IndustrySection />
      <TechnologySection />
      <SchoolManagementBanner />
      <WhyNilofar />
      <WorkProcess />
      {/* <TrustedClients /> */}
      <Footer />
    </div>
  );
}
export default Home;