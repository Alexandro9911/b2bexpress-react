import './invest.sass';
import IntroBlock from "../../components/Content/investPage/IntroBlock/IntroBlock.tsx";
import OfferRules from "../../components/Content/investPage/OfferRules/OfferRules.tsx";
import InvestList from "../../components/Content/investPage/InvestList/InvestList.tsx";
import FranchiseSection from "../../components/Content/investPage/Franchise/FranchiseSection.tsx";
import LogistSkills from "../../components/Content/investPage/LogistSkills/LogistSkills.tsx";
import NoObligations from "../../components/Content/investPage/NoObligation/NoObligations.tsx";
import Security from "../../components/Content/investPage/Security/Security.tsx";
import BecomeInvestor from "../../components/Content/investPage/BecomeInvestor/BecomeInvestor.tsx";
import StartNow from "../../components/Content/investPage/StartNow/StartNow.tsx";
import WhatNext from "../../components/Content/investPage/WhatNext/WhatNext.tsx";
import NavMenuInvest from "../../components/Content/investPage/NavMenu/NavMenuInvest.tsx";

export default function PageInvest(){
  return (
    <>
      <div className="page-invest">
        <NavMenuInvest/>
        <div className="page-title">Инвестиции в автопарк</div>
        <div className="page-subtitle">Станьте совладельцем компании с собственным автопарком, действующими контрактами и сильной командой</div>
        <IntroBlock/>
        <OfferRules/>
        <InvestList/>
        <FranchiseSection/>
        <LogistSkills/>
        <NoObligations/>
        <Security/>
        <BecomeInvestor/>
        <StartNow/>
        <WhatNext/>
      </div>
    </>
  )
}