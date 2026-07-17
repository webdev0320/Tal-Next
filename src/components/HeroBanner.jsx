import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1e293b] leading-tight hero-enter">
            Award Winning Accountants in London for Small Businesses, Contractors, Landlords and Startups
          </h1>
          
          <p className="text-lg text-[#475569] hero-enter-delay-1">
            Fixed-fee accounting, proactive tax planning, and same-day responses from a named accountant.
          </p>

          {/* CTA Buttons */}
         {/* CTA Buttons Row 1 */}
         <div className="flex flex-nowrap items-center gap-2 hero-enter-delay-2">
           <Link href="/contact-us/" 
             className="flex-1 px-4 py-2 text-sm bg-[#d2601a] text-white font-semibold rounded-full hover:bg-[#b55216] transition-all duration-300 shadow-md hover:shadow-lg text-center no-underline"
           >
             <i className="fas fa-quote-right me-2"></i> Get an Instant Quote
           </Link>

           <a 
             href="https://calendly.com/taxaccolega/book-a-meeting" 
             target="_blank" 
             rel="noreferrer" 
             className="flex-1 px-4 py-2 text-sm border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-[#d2601a] hover:text-[#d2601a] hover:bg-slate-50 transition-all duration-300 text-center no-underline"
           >
             <i className="fas fa-calendar-alt me-2"></i> Book Consultation
           </a>
         </div>

         {/* CTA Buttons Row 2 */}
         <div className="flex flex-nowrap items-center gap-2 hero-enter-delay-3">
           <a 
             href="tel:+02081270728" 
             className="flex-1 px-4 py-2 text-sm bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg text-center no-underline"
           >
             <i className="fas fa-phone-alt me-2"></i> Call Us
           </a>

           <a 
             href="https://wa.me/447471170484" 
             target="_blank" 
             rel="noreferrer" 
             className="flex-1 px-4 py-2 text-sm bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-center no-underline"
           >
             <i className="fab fa-whatsapp me-2"></i> WhatsApp
           </a>
         </div>

         {/* Trust Footer */}
        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3 hero-enter-delay-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Image src="/images/avatar-1.webp" alt="Taxaccolega client" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/avatar-2.webp" alt="Taxaccolega client" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/avatar-3.webp" alt="Taxaccolega client" width={32} height={32} className="rounded-full border-2 border-white" />
            </div>
            <span className="font-semibold text-[#475569]">300+ 5-star Reviews</span>
          </div>
          <p className="text-sm text-[#475569]">
            Average first response under hour • 99% client retention
          </p>
        </div>
      </div>


        {/* Right Content (Image) */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          {/* Gradient Overlay for blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
          
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
            alt="Taxaccolega chartered accountants team collaborating in a modern London office"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hero-image-enter"
            priority
          />
        </div>

      </div>
    </section>
  );
}
