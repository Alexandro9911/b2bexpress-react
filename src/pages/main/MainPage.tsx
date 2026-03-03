import Overlay from "../../components/common/Overlay/Overlay.tsx";
import Section1Image from "../../assets/images/section1_test.jpg";
import SectionVideo from "../../assets/video/truck-crop.mov";
import Section1_1 from "../../components/Content/mainPage/Section1_1/Section1_1.tsx";
import NavMenu from "../../components/NavMenu/NavMenu.tsx";
import Section1_2 from "../../components/Content/mainPage/Section1_2/Section1_2.tsx";
import Section1_3 from "../../components/Content/mainPage/Section1_3/Section1_3.tsx";
import Section2 from "../../components/Content/mainPage/Section2/Section2.tsx";
import Section2_1 from "../../components/Content/mainPage/Section2_1/Section2_1.tsx";
import Section2_2 from "../../components/Content/mainPage/Section2_2/Section2_2.tsx";
import Section3 from "../../components/Content/mainPage/Section3/Section3.tsx";
import Section4 from "../../components/Content/mainPage/Section4/Section4.tsx";
import LogistSkills from "../../components/Content/investPage/LogistSkills/LogistSkills.tsx";

export default function MainPage(){
  return (
    <div className="main-content">
      <NavMenu/>
      <section className="content-section">
        <Overlay
          imageSrc={Section1Image}
          videoSrc={SectionVideo}
        >
          <Section1_1/>
        </Overlay>
        <section id="aboutUs" data-section='section1' className="section-item">
          <Section1_2/>
          <Section1_3/>
        </section>
      </section>
      <section id="services" data-section="section2" className="section-item">
        <Section2/>
        <LogistSkills mainInfo/>
        <Section2_1/>
        <Section2_2/>
      </section>
      <section id="feedback" data-section="section3" className="section-item">
        <Section3/>
      </section>
      <section id='contacts' data-section="section4" className="section-item">
        <Section4/>
      </section>
    </div>
  )
}