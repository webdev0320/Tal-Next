import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './react-pages/Home';
import AboutUs from './react-pages/AboutUs';
import Blog from './react-pages/Blog';
import ContactUs from './react-pages/ContactUs';
import SwitchAccountant from './react-pages/SwitchAccountant';
import ReferAndEarn from './react-pages/ReferAndEarn';
import Awards from './react-pages/Awards';
import ScheduleCall from './react-pages/ScheduleCall';
import Taxation from './react-pages/Taxation';
import Accounts from './react-pages/Accounts';
import Legal from './react-pages/Legal';
import CompanyFormation from './react-pages/CompanyFormation';
import RegisteredAddress from './react-pages/RegisteredAddress';
import CompanySecretarial from './react-pages/CompanySecretarial';
import EmploymentAgreement from './react-pages/EmploymentAgreement';
import ShareTransfer from './react-pages/ShareTransfer';
import Software from './react-pages/Software';
import Banks from './react-pages/Banks';
import BookkeepingServices from './react-pages/BookkeepingServices';
import PayrollServices from './react-pages/PayrollServices';
import SelfAssessment from './react-pages/SelfAssessment';
import Pensions from './react-pages/Pensions';
import FinancialForecasting from './react-pages/FinancialForecasting';
import IndustryPage from './react-pages/IndustryPage';
import PackagePage from './react-pages/PackagePage';
import TaxationSubPage from './react-pages/TaxationSubPage';

// New Imports
import AnnualAccounts from './react-pages/AnnualAccounts';
import StatutoryAccounts from './react-pages/StatutoryAccounts';
import ManagementAccounts from './react-pages/ManagementAccounts';
import CashFlowForecasting from './react-pages/CashFlowForecasting';
import SoleTraderPackage from './react-pages/SoleTraderPackage';
import LtdCompanyPackage from './react-pages/LtdCompanyPackage';
import ContractorLtdPackage from './react-pages/ContractorLtdPackage';
import LandlordsPackage from './react-pages/LandlordsPackage';
import SpvsLtdPackage from './react-pages/SpvsLtdPackage';
import CharitiesPackage from './react-pages/CharitiesPackage';
import ReferAFriend from './react-pages/ReferAFriend';
import PrivacyPolicy from './react-pages/PrivacyPolicy';
import CompanyTaxReturn from './react-pages/CompanyTaxReturn';
import VatAccountants from './react-pages/VatAccountants';
import InheritanceTaxPlanning from './react-pages/InheritanceTaxPlanning';
import EmiSchemesPage from './react-pages/EmiSchemes';
import LetPropertyCampaign from './react-pages/LetPropertyCampaign';
import WorldwideDisclosureFacility from './react-pages/WorldwideDisclosureFacility';
import CryptocurrencyTax from './react-pages/CryptocurrencyTax';
import PersonalIncomeTax from './react-pages/PersonalIncomeTax';
import ConsolidatedAccounts from './react-pages/ConsolidatedAccounts';
import SingleBlog from './react-pages/SingleBlog';
import MainLayout from '@/src/components/Layout/MainLayout';
import DynamicWpPage from './react-pages/DynamicWpPage';
import { useLocation } from 'react-router-dom';
import IDVerificationModal from '@/src/components/IDVerificationModal';

const SPECIAL_WORDS = {
  'ir35': 'IR35',
  'vat': 'VAT',
  'ltd': 'Ltd',
  'spvs': 'SPVs',
  'emi': 'EMI',
  'hmrc': 'HMRC',
  'saas': 'SaaS',
};

function humanize(segment) {
  return segment
    .split('-')
    .map(word => {
      const lower = word.toLowerCase();
      if (SPECIAL_WORDS[lower]) {
        return SPECIAL_WORDS[lower];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function TitleUpdater() {
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    let title = 'Taxaccolega';

    if (path && path !== '/') {
      const segments = path.split('/').filter(Boolean);
      if (segments.length > 0) {
        const lastSegment = segments[segments.length - 1];
        const formattedSegment = humanize(lastSegment);
        title = `${formattedSegment} | Taxaccolega`;
      }
    } else {
      title = 'Taxaccolega | Chartered Accountants & Tax Advisors';
    }

    document.title = title;
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout><SingleBlog /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path="/switch-accountant" element={<MainLayout><SwitchAccountant /></MainLayout>} />
        <Route path="/refer-and-earn" element={<MainLayout><ReferAndEarn /></MainLayout>} />
        <Route path="/awards-accolades-accreditations" element={<MainLayout><Awards /></MainLayout>} />
        <Route path="/schedule-a-phone-call-or-video-meeting" element={<MainLayout><ScheduleCall /></MainLayout>} />
        <Route path="/taxation" element={<MainLayout><Taxation /></MainLayout>} />
        <Route path="/accounts" element={<MainLayout><Accounts /></MainLayout>} />
        <Route path="/accounts/bookkeeping-services/" element={<MainLayout><BookkeepingServices /></MainLayout>} />
        <Route path="/accounts/payroll-services" element={<MainLayout><PayrollServices /></MainLayout>} />
        <Route path="/accounts/hmrc-self-assessment-tax-returns-accountant" element={<MainLayout><SelfAssessment /></MainLayout>} />
        <Route path="/accounts/auto-enrolment-pension-contributions/" element={<MainLayout><Pensions /></MainLayout>} />
        <Route path="/accounts/financial-forecasting/" element={<MainLayout><FinancialForecasting /></MainLayout>} />
        <Route path="/company-formation" element={<MainLayout><CompanyFormation /></MainLayout>} />
        <Route path="/registered-address" element={<MainLayout><RegisteredAddress /></MainLayout>} />
        <Route path="/company-secretarial" element={<MainLayout><CompanySecretarial /></MainLayout>} />
        <Route path="/employment-agreement" element={<MainLayout><EmploymentAgreement /></MainLayout>} />
        <Route path="/share-transfer" element={<MainLayout><ShareTransfer /></MainLayout>} />
        <Route path="/legal" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="/software" element={<MainLayout><Software /></MainLayout>} />
        <Route path="/banks" element={<MainLayout><Banks /></MainLayout>} />
        <Route path="/taxation/company-tax-return-accountants" element={<MainLayout><CompanyTaxReturn /></MainLayout>} />
        <Route path="/taxation/vat-accountants" element={<MainLayout><VatAccountants /></MainLayout>} /> 
        <Route path="/taxation/inheritance-tax-planning" element={<MainLayout><InheritanceTaxPlanning /></MainLayout>} />
        <Route path="/taxation/emi-schemes" element={<MainLayout><EmiSchemesPage /></MainLayout>} />
        <Route path="/taxation/let-property-campaign" element={<MainLayout><LetPropertyCampaign /></MainLayout>} />
        <Route path="/taxation/worldwide-disclosure-facility" element={<MainLayout><WorldwideDisclosureFacility /></MainLayout>} />
        <Route path="/taxation/cryptocurrency" element={<MainLayout><CryptocurrencyTax /></MainLayout>} />
        <Route path="/taxation/personal-income-tax-professionals-and-chartered-accountants" element={<MainLayout><PersonalIncomeTax /></MainLayout>} />

        {/* New Accounting Routes */}

        <Route path="/accounts/annual-accounts" element={<MainLayout><AnnualAccounts /></MainLayout>} />
        <Route path="/accounts/statutory-accounts" element={<MainLayout><StatutoryAccounts /></MainLayout>} />
        <Route path="/accounts/management-accounts" element={<MainLayout><ManagementAccounts /></MainLayout>} />
        <Route path="/accounts/consolidated-accounts" element={<MainLayout><ConsolidatedAccounts /></MainLayout>} />
        <Route path="/accounts/cash-flow-forecasting" element={<MainLayout><CashFlowForecasting /></MainLayout>} />

        {/* New Package Routes */}
        <Route path="/packages/sole-trader" element={<MainLayout><SoleTraderPackage /></MainLayout>} />
        <Route path="/packages/sole-trader-pricing" element={<MainLayout><SoleTraderPackage /></MainLayout>} />
        <Route path="/packages/ltd-company" element={<MainLayout><LtdCompanyPackage /></MainLayout>} />
        <Route path="/packages/ltd-company-pricing" element={<MainLayout><LtdCompanyPackage /></MainLayout>} />
        <Route path="/packages/contractor-ltd" element={<MainLayout><ContractorLtdPackage /></MainLayout>} />
        <Route path="/packages/contractor-ltd-pricing" element={<MainLayout><ContractorLtdPackage /></MainLayout>} />
        <Route path="/packages/landlords" element={<MainLayout><LandlordsPackage /></MainLayout>} />
        <Route path="/packages/landlords-3" element={<MainLayout><LandlordsPackage /></MainLayout>} />
        <Route path="/packages/spvs-ltd" element={<MainLayout><SpvsLtdPackage /></MainLayout>} />
        <Route path="/packages/spvs-ltd-pricing" element={<MainLayout><SpvsLtdPackage /></MainLayout>} />
        <Route path="/packages/charities" element={<MainLayout><CharitiesPackage /></MainLayout>} />
        <Route path="/packages/charities-pricing" element={<MainLayout><CharitiesPackage /></MainLayout>} />

        {/* General Routes */}
        <Route path="/refer-a-friend" element={<MainLayout><ReferAFriend /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        
        {/* Dynamic Industry Routes */}
        <Route path="/industries/:slug" element={<MainLayout><IndustryPage /></MainLayout>} />
        <Route path="/charities" element={<MainLayout><IndustryPage slug="charities" /></MainLayout>} />

        {/* Dynamic Package Routes */}
        <Route path="/packages/:slug" element={<MainLayout><PackagePage /></MainLayout>} />

        {/* Dynamic Taxation Routes */}
        <Route path="/taxation/:slug" element={<MainLayout><TaxationSubPage /></MainLayout>} />

        {/* Catch-all for imported WordPress Pages */}
        <Route path="*" element={<MainLayout><DynamicWpPage /></MainLayout>} />
      </Routes>
      <IDVerificationModal />
    </Router>
  );
}

export default App;
