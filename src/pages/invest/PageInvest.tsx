import OffersList from "../../components/Content/investPage/OffersList/OffersList.tsx";
import './invest.sass';
import IntroBlock from "../../components/Content/investPage/IntroBlock/IntroBlock.tsx";
import NavMenu from "../../components/NavMenu/NavMenu.tsx";
import OfferRules from "../../components/Content/investPage/OfferRules/OfferRules.tsx";
import OfferRules2 from "../../components/Content/investPage/OfferRules2/OfferRules2.tsx";
export default function PageInvest(){
  return (
    <>
      <NavMenu/>
      <div className="page-invest">
        <div className="page-title">Инвестиции в автопарк</div>
        <div className="page-subtitle">Станьте совладельцем компании с собственным автопарком, действующими контрактами и сильной командой</div>
        <IntroBlock/>
        <OfferRules/>
        <OfferRules2/>
        <OffersList/>

      </div>
    </>
  )
}