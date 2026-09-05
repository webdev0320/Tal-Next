"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  PieChart, BookOpen, Scale, Code, Landmark,
  Calculator, Receipt, Shield, ShieldAlert, FlaskConical, Lightbulb,
  BadgeDollarSign, Coins, Clapperboard, ScrollText, HandCoins, Wallet,
  Briefcase, Globe2, Building, FileSpreadsheet, WalletCards, PiggyBank,
  ChartBar, Users, HeartPulse, Banknote, ChartLine, Sparkles,
  Mail, Smartphone, Lock, Rocket, Cloud, Layers, Database, Bitcoin,
  TrendingUp, FileText,
} from 'lucide-react';

const menuData = {
  Taxation: {
    to: '/taxation',
    icon: <PieChart size={18} />,
    sections: [
      {
        title: 'Corporate & Business Tax',
        items: [
          { label: 'Corporation Tax', desc: 'Compliance & returns', to: '/taxation/company-tax-return-accountants', icon: <Calculator size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Value Added Tax', desc: 'VAT registration & filings', to: '/taxation/vat-accountants', icon: <Receipt size={16} />, color: 'bg-sky-50 text-sky-600' },
          { label: 'Tax Investigation', desc: 'Expert defense & guidance', to: '/taxation/tax-investigation-insurance', icon: <ShieldAlert size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Research & Development', desc: 'Incentives & claims', to: '/taxation/rd/', icon: <FlaskConical size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Tax Advisory', desc: 'Strategic planning advice', to: '/taxation/tax-advisors', icon: <Lightbulb size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'EMI Scheme', desc: 'Employee share plans', to: '/taxation/emi-schemes', icon: <BadgeDollarSign size={16} />, color: 'bg-green-50 text-green-600' },
          { label: 'SEIS and EIS Accountants', desc: 'Investment scheme support', to: '/taxation/seis-tax-relief', icon: <Coins size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Film Tax Relief', desc: 'Relief & compliance', to: '/taxation/film-tax-relief', icon: <Clapperboard size={16} />, color: 'bg-pink-50 text-pink-600' },
        ]
      },
      {
        title: 'Private & Personal Tax',
        items: [
          { label: 'Inheritance Tax', desc: 'Strategic wealth planning', to: '/taxation/inheritance-tax-planning', icon: <ScrollText size={16} />, color: 'bg-orange-50 text-orange-600' },
          { label: 'Capital Gains Tax', desc: 'Asset disposal planning', to: '/taxation/capital-gains-tax-accountants', icon: <TrendingUp size={16} />, color: 'bg-teal-50 text-teal-600' },
          { label: 'Estate Tax Planning', desc: 'Future security planning', to: '/taxation/estate-property-tax-planning', icon: <Landmark size={16} />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Non-UK Resident', desc: 'Expat tax solutions', to: '/taxation/non-uk-resident-taxation', icon: <Globe2 size={16} />, color: 'bg-cyan-50 text-cyan-600' },
          { label: 'LET Property Campaign', desc: 'Property income compliance', to: '/taxation/let-property-campaign', icon: <Building size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Worldwide Disclosure Facility', desc: 'Offshore compliance', to: '/taxation/worldwide-disclosure-facility', icon: <Globe2 size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Cryptocurrency', desc: 'Digital asset tax advice', to: '/taxation/cryptocurrency', icon: <Bitcoin size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Income Tax', desc: 'Personal tax efficiency', to: '/taxation/personal-income-tax', icon: <Wallet size={16} />, color: 'bg-emerald-50 text-emerald-600' },
        ]
      }
    ]
  },
  Accounts: {
    to: '/accounts',
    icon: <BookOpen size={18} />,
    sections: [
      {
        title: 'Accounting Services',
        items: [
          { label: 'Bookkeeping', to: '/accounts/bookkeeping-services', icon: <FileSpreadsheet size={16} />, color: 'bg-sky-50 text-sky-600' },
          { label: 'Statutory Accounts', to: '/accounts/statutory-accounts', icon: <FileText size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Management Accounts', to: '/accounts/management-accounts', icon: <ChartBar size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Payroll Services', to: '/accounts/payroll-services', icon: <Users size={16} />, color: 'bg-teal-50 text-teal-600' },
          { label: 'Self-Assessment & Tax Return', to: '/accounts/self-assessment', icon: <Calculator size={16} />, color: 'bg-orange-50 text-orange-600' },
          { label: 'Pension & Auto Enrolment', to: '/accounts/auto-enrolment-pension-contributions', icon: <PiggyBank size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Consolidated Accounts', to: '/accounts/consolidated-accounts', icon: <Layers size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Financial Forecasting', to: '/accounts/financial-forecasting', icon: <ChartLine size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Cashflow Forecasting', to: '/accounts/cash-flow-forecasting', icon: <Banknote size={16} />, color: 'bg-green-50 text-green-600' },
        ]
      }
    ]
  },
  Legal: {
    to: '/legal',
    icon: <Scale size={18} />,
    sections: [
      {
        title: 'Legal & Secretarial',
        items: [
          { label: 'Company Formation', desc: 'Setup & registration', to: '/legal/formation', icon: <Building size={16} />, color: 'bg-blue-50 text-blue-600' },
        ]
      }
    ]
  },
  Software: {
    to: '/software',
    icon: <Code size={18} />,
    sections: [
      {
        title: 'Financial Software',
        items: [
          { label: 'Xero', desc: 'Cloud accounting', to: '/software/xero', icon: <Cloud size={16} />, color: 'bg-sky-50 text-sky-600' },
          { label: 'QuickBooks', desc: 'Business finance', to: '/software/quickbooks', icon: <Briefcase size={16} />, color: 'bg-emerald-50 text-emerald-600' },
        ]
      }
    ]
  },
  Banks: {
    to: '/banks',
    icon: <Landmark size={18} />,
    sections: [
      {
        title: 'Banking Solutions',
        items: [
          { label: 'Starling', desc: 'Digital banking', to: '/banks/starling', icon: <Landmark size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Monzo', desc: 'Smart accounts', to: '/banks/monzo', icon: <WalletCards size={16} />, color: 'bg-pink-50 text-pink-600' },
        ]
      }
    ]
  }
};

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Taxation');
  const active = menuData[activeCategory];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[930px] max-w-[calc(100vw-2rem)] z-50">
      <div className="w-full menu-enter bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-300/40 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[30%] shrink-0 bg-slate-50/70 border-r border-slate-100 flex flex-col">
        <div className="p-5 pb-3">
          <p className="m-0 text-[11px] font-bold uppercase tracking-widest text-slate-400">Services</p>
        </div>
        <div className="px-3 pb-4 flex flex-col gap-1">
          {Object.keys(menuData).map((category) => (
            <Link
              key={category}
              href={menuData[category].to}
              onMouseEnter={() => setActiveCategory(category)}
              className={`relative w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out rounded-lg border-0 no-underline ${
                activeCategory === category
                  ? 'bg-white text-orange-600 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.12)]'
                  : 'text-slate-500 hover:bg-white/70 hover:text-slate-900'
              }`}
            >
              {activeCategory === category && (
                <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-orange-500 rounded-r-full" />
              )}
              {React.cloneElement(menuData[category].icon, {
                className: activeCategory === category ? 'text-orange-600' : 'text-slate-400'
              })}
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              {React.cloneElement(active.icon, { size: 18 })}
            </span>
            <span className="text-base font-bold text-slate-800">{activeCategory}</span>
          </div>
          <Link
            href={active.to}
            className="text-xs font-semibold text-orange-600 hover:text-[#243d45] no-underline transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="p-5 grid grid-cols-2 gap-x-4 gap-y-1">
          {active.sections.map((section, index) => (
            <React.Fragment key={index}>
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.to}
                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 no-underline transition-all duration-200 ease-in-out"
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.color} transition-transform duration-200 group-hover:scale-110`}>
                    {item.icon}
                  </span>
                  <span className="min-w-0 leading-snug">
                    <span className="block text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200 truncate">
                      {item.label}
                    </span>
                    {item.desc && (
                      <span className="block text-[11px] text-slate-400 truncate">{item.desc}</span>
                    )}
                  </span>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export { menuData as servicesMenuData };
export default MegaMenu;
