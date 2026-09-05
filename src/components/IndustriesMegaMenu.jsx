"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Cpu, Building2, ShoppingBag, HardHat, Car, Stethoscope, Truck,
  UtensilsCrossed, HeartHandshake, Briefcase, User, Megaphone,
  Code2, Rocket, Monitor, Cloud, Key, TrendingUp, Handshake,
  Layers, ClipboardList, Coins, ShoppingCart, Globe, Boxes, Store,
  Hammer, Wrench, Ruler, Cog, Smile, Pill, HeartPulse, PawPrint,
  Ship, Bike, Coffee, Pizza, ChefHat, BedDouble, Beer, Martini,
  Calendar, Gamepad2, HandHeart, Users, UserPlus, Lightbulb, Scale,
  Gavel, GraduationCap, BookOpen, Gem, Camera, Film, Palette, Search,
} from 'lucide-react';

const menuData = {
  'Technology Accountants': {
    to: '/industries/technology-accountants/',
    icon: <Cpu size={18} />,
    sections: [
      {
        title: 'Technology',
        items: [
          { label: 'IT Contractor Accountants', to: '/industries/it-contractor-accountants/', icon: <Code2 size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Startup Accountants', to: '/industries/startup-accountants/', icon: <Rocket size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Software Company Accountants', to: '/industries/software-company-accountants/', icon: <Monitor size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'SaaS Accountants', to: '/industries/saas-accountants/', icon: <Cloud size={16} />, color: 'bg-sky-50 text-sky-600' },
        ]
      }
    ]
  },
  'Property Accountants': {
    to: '/industries/property-accountants/',
    icon: <Building2 size={18} />,
    sections: [
      {
        title: 'Property & Real Estate',
        items: [
          { label: 'Real Estate Accountants', to: '/industries/real-estate-accountants/', icon: <Building2 size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Landlord Accountants', to: '/industries/landlord-accountants/', icon: <Key size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Property Investor Accountants', to: '/industries/property-investor-accountants/', icon: <TrendingUp size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Property Developer Accountants', to: '/industries/property-developer-accountants/', icon: <HardHat size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Estate Agent Accountants', to: '/industries/estate-agent-accountants/', icon: <Handshake size={16} />, color: 'bg-pink-50 text-pink-600' },
          { label: 'SPV Accountants', to: '/industries/property-accountants/', icon: <Layers size={16} />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Property Management Accountants', to: '/industries/property-accountants/', icon: <ClipboardList size={16} />, color: 'bg-teal-50 text-teal-600' },
          { label: 'Buy to Let Accountants', to: '/industries/property-accountants/', icon: <Coins size={16} />, color: 'bg-orange-50 text-orange-600' },
        ]
      }
    ]
  },
  'E-commerce Accountants': {
    to: '/industries/ecommerce-accountants/',
    icon: <ShoppingBag size={18} />,
    sections: [
      {
        title: 'E-commerce & Online Retail',
        items: [
          { label: 'Amazon Seller Accountants', to: '/industries/amazon-seller-accountants/', icon: <ShoppingCart size={16} />, color: 'bg-orange-50 text-orange-600' },
          { label: 'Shopify Accountants', to: '/industries/shopify-accountants/', icon: <ShoppingBag size={16} />, color: 'bg-green-50 text-green-600' },
          { label: 'Online Retail Accountants', to: '/industries/online-retail-accountants/', icon: <Globe size={16} />, color: 'bg-cyan-50 text-cyan-600' },
          { label: 'Wholesale Accountants', to: '/industries/wholesale-accountants/', icon: <Boxes size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Retail Accountants', to: '/industries/retail-accountants/', icon: <Store size={16} />, color: 'bg-rose-50 text-rose-600' },
        ]
      }
    ]
  },
  'Construction Accountants': {
    to: '/industries/construction-accountants/',
    icon: <HardHat size={18} />,
    sections: [
      {
        title: 'Construction & Trades',
        items: [
          { label: 'Builder Accountants', to: '/industries/builder-accountants/', icon: <Hammer size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Trade Accountants', to: '/industries/trade-accountants/', icon: <Wrench size={16} />, color: 'bg-slate-100 text-slate-600' },
          { label: 'Contractor Accountants', to: '/industries/contractor-accountants/', icon: <Briefcase size={16} />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Civil Engineering Accountants', to: '/industries/civil-engineering-accountants/', icon: <Ruler size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Engineering Accountants', to: '/industries/engineering-accountants/', icon: <Cog size={16} />, color: 'bg-violet-50 text-violet-600' },
        ]
      }
    ]
  },
  'Automotive Accountants': {
    to: '/industries/automotive-accountants/',
    icon: <Car size={18} />,
    sections: [
      {
        title: 'Automotive & Motor Trade',
        items: [
          { label: 'Car Dealership Accountants', to: '/industries/car-dealership-accountants/', icon: <Car size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Motor Trade Accountants', to: '/industries/motor-trade-accountants/', icon: <Wrench size={16} />, color: 'bg-slate-100 text-slate-600' },
        ]
      }
    ]
  },
  'Healthcare Accountants': {
    to: '/industries/healthcare-accountants/',
    icon: <Stethoscope size={18} />,
    sections: [
      {
        title: 'Healthcare & Medical',
        items: [
          { label: 'Doctor Accountants', to: '/industries/doctor-accountants/', icon: <Stethoscope size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Dental Accountants', to: '/industries/dental-accountants/', icon: <Smile size={16} />, color: 'bg-sky-50 text-sky-600' },
          { label: 'Pharmacy Accountants', to: '/industries/pharmacy-accountants/', icon: <Pill size={16} />, color: 'bg-green-50 text-green-600' },
          { label: 'Medical Practice Accountants', to: '/industries/medical-practice-accountants/', icon: <HeartPulse size={16} />, color: 'bg-red-50 text-red-600' },
          { label: 'Locum Accountants', to: '/industries/locum-accountants/', icon: <User size={16} />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Veterinary Accountants', to: '/industries/veterinary-accountants/', icon: <PawPrint size={16} />, color: 'bg-amber-50 text-amber-600' },
        ]
      }
    ]
  },
  'Logistics Accountants': {
    to: '/industries/logistics-accountants/',
    icon: <Truck size={18} />,
    sections: [
      {
        title: 'Logistics & Transport',
        items: [
          { label: 'Transport Accountants', to: '/industries/transport-accountants/', icon: <Truck size={16} />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Freight Accountants', to: '/industries/freight-accountants/', icon: <Ship size={16} />, color: 'bg-cyan-50 text-cyan-600' },
          { label: 'Courier Accountants', to: '/industries/courier-accountants/', icon: <Bike size={16} />, color: 'bg-green-50 text-green-600' },
        ]
      }
    ]
  },
  'Hospitality Accountants': {
    to: '/industries/hospitality-accountants/',
    icon: <UtensilsCrossed size={18} />,
    sections: [
      {
        title: 'Hospitality & Food & Drink',
        items: [
          { label: 'Restaurant Accountants', to: '/industries/restaurant-accountants/', icon: <UtensilsCrossed size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Cafe Accountants', to: '/industries/cafe-accountants/', icon: <Coffee size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Takeaway Accountants', to: '/industries/takeaway-accountants/', icon: <Pizza size={16} />, color: 'bg-orange-50 text-orange-600' },
          { label: 'Food Business Accountants', to: '/industries/food-business-accountants/', icon: <ChefHat size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Hotel Accountants', to: '/industries/hotel-accountants/', icon: <BedDouble size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Pub Accountants', to: '/industries/pub-accountants/', icon: <Beer size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Bar Accountants', to: '/industries/bar-accountants/', icon: <Martini size={16} />, color: 'bg-pink-50 text-pink-600' },
          { label: 'Event Venue Accountants', to: '/industries/event-venue-accountants/', icon: <Calendar size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Leisure Accountants', to: '/industries/leisure-accountants/', icon: <Gamepad2 size={16} />, color: 'bg-purple-50 text-purple-600' },
        ]
      }
    ]
  },
  'Charity Accountants': {
    to: '/industries/charity-accountants/',
    icon: <HeartHandshake size={18} />,
    sections: [
      {
        title: 'Charity & Not-for-Profit',
        items: [
          { label: 'Nonprofit Accountants', to: '/industries/nonprofit-accountants/', icon: <HandHeart size={16} />, color: 'bg-pink-50 text-pink-600' },
          { label: 'CIC Accountants', to: '/industries/cic-accountants/', icon: <Users size={16} />, color: 'bg-blue-50 text-blue-600' },
        ]
      }
    ]
  },
  'Professional Service Accountants': {
    to: '/industries/professional-service-accountants/',
    icon: <Briefcase size={18} />,
    sections: [
      {
        title: 'Professional Services',
        items: [
          { label: 'Recruitment Accountants', to: '/industries/recruitment-accountants/', icon: <UserPlus size={16} />, color: 'bg-teal-50 text-teal-600' },
          { label: 'Consultant Accountants', to: '/industries/consultant-accountants/', icon: <Lightbulb size={16} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Law Firm Accountants', to: '/industries/law-firm-accountants/', icon: <Scale size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Solicitor Accountants', to: '/industries/solicitor-accountants/', icon: <Gavel size={16} />, color: 'bg-slate-100 text-slate-600' },
          { label: 'School Accountants', to: '/industries/school-accountants/', icon: <GraduationCap size={16} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Training Provider Accountants', to: '/industries/training-provider-accountants/', icon: <BookOpen size={16} />, color: 'bg-orange-50 text-orange-600' },
        ]
      }
    ]
  },
  'Private Client Accountants': {
    to: '/industries/private-client-accountants/',
    icon: <User size={18} />,
    sections: [
      {
        title: 'Private Clients',
        items: [
          { label: 'High Net Worth Accountants', to: '/industries/private-client-accountants/', icon: <Gem size={16} />, color: 'bg-violet-50 text-violet-600' },
          { label: 'Investor Accountants', to: '/industries/private-client-accountants/', icon: <TrendingUp size={16} />, color: 'bg-emerald-50 text-emerald-600' },
        ]
      }
    ]
  },
  'Marketing Accountants': {
    to: '/industries/marketing-accountants/',
    icon: <Megaphone size={18} />,
    sections: [
      {
        title: 'Marketing & Creative',
        items: [
          { label: 'Digital Agency Accountants', to: '/industries/digital-agency-accountants/', icon: <Monitor size={16} />, color: 'bg-sky-50 text-sky-600' },
          { label: 'SaaS Accountants', to: '/industries/saas-accountants/', icon: <Cloud size={16} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Media Accountants', to: '/industries/media-accountants/', icon: <Film size={16} />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Creative Agency Accountants', to: '/industries/creative-agency-accountants/', icon: <Palette size={16} />, color: 'bg-purple-50 text-purple-600' },
          { label: 'Marketing Agency Accountants', to: '/industries/marketing-agency-accountants/', icon: <Megaphone size={16} />, color: 'bg-orange-50 text-orange-600' },
          { label: 'Influencer Accountants', to: '/industries/influencer-accountants/', icon: <Camera size={16} />, color: 'bg-pink-50 text-pink-600' },
          { label: 'SEO Accountants', to: '/industries/marketing-accountants/', icon: <Search size={16} />, color: 'bg-emerald-50 text-emerald-600' },
        ]
      }
    ]
  },
};

const IndustriesMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Technology Accountants');
  const active = menuData[activeCategory];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[930px] max-w-[calc(100vw-2rem)] z-50">
      <div className="w-full menu-enter bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-300/40 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[32%] shrink-0 bg-slate-50/70 border-r border-slate-100 flex flex-col">
        <div className="p-5 pb-3">
          <p className="m-0 text-[11px] font-bold uppercase tracking-widest text-slate-400">Who We Assist</p>
        </div>
        <div className="px-3 pb-4 flex flex-col gap-1">
          {Object.keys(menuData).map((category) => (
            <Link
              key={category}
              href={menuData[category].to}
              onMouseEnter={() => setActiveCategory(category)}
              className={`relative w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out rounded-lg border-0 no-underline ${
                activeCategory === category
                  ? 'bg-white text-orange-600 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.12)]'
                  : 'text-slate-500 hover:bg-white/70 hover:text-slate-900'
              }`}
            >
              {activeCategory === category && (
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-orange-500 rounded-r-full" />
              )}
              {React.cloneElement(menuData[category].icon, {
                className: `shrink-0 ${activeCategory === category ? 'text-orange-600' : 'text-slate-400'}`
              })}
              <span className="min-w-0 leading-snug">{category}</span>
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
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200 min-w-0 leading-snug">
                    {item.label}
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

export { menuData as industriesMenuData };
export default IndustriesMegaMenu;
