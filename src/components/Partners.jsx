"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Partners = () => {
  const partners = [
    { src: "/images/2023/06/A.webp", alt: "Partner Logo A", link: "https://www.freeagent.com/en/" }, 
    { src: "/images/2023/06/ACCA.webp", alt: "ACCA", link: "https://www.accaglobal.com" },
    { src: "/images/2023/06/BTC-Softwares.webp", alt: "BTC Software", link: "https://www.btcsoftware.co.uk" },
    { src: "/images/2023/06/Croydon-Chamber.webp", alt: "Croydon Chamber", link: "https://www.croydonchamber.co.uk" }, // TODO: verify
    { src: "/images/2023/06/Croydon.webp", alt: "Croydon Council", link: "https://www.croydon.gov.uk" },
    { src: "/images/2023/06/Dext.webp", alt: "Dext", link: "https://dext.com" },
    { src: "/images/2023/06/Go-Cardless.webp", alt: "GoCardless", link: "https://gocardless.com" },
    { src: "/images/2023/06/Intuit-Quick-Books.webp", alt: "Intuit QuickBooks", link: "https://quickbooks.intuit.com" },
    { src: "/images/2023/06/Lewisham.webp", alt: "Lewisham Council", link: "https://www.lewisham.gov.uk" },
    { src: "/images/2023/06/Simply-Business.webp", alt: "Simply Business", link: "https://www.simplybusiness.co.uk" },
    { src: "/images/2023/06/SME-News.webp", alt: "SME News", link: "https://sme-news.co.uk" },
    { src: "/images/2023/06/TAXCALC-1.webp", alt: "TaxCalc", link: "https://www.taxcalc.com" },
    { src: "/images/2023/06/Three-Best-Rated.webp", alt: "Three Best Rated", link: "https://threebestrated.com" },
    { src: "/images/2023/06/VT-Software.webp", alt: "VT Software", link: "https://www.vtsoftware.co.uk" },
    { src: "/images/2023/06/XERO-1.webp", alt: "XERO", link: "https://www.xero.com" },
    { src: "/images/2023/06/Xpert-SM.webp", alt: "Xpert SM", link: "https://xpert-smm.com/" }, 
  ];

  return (
    <section className="py-5">
        <div className="container">
            <div className="text-center max-w-xl mx-auto mb-5">
                <div className="flex justify-center">
                    <h4 className="mt-2 text-brand-dark display-5 whitespace-nowrap">Our Clients and Collaborative Partners</h4>
                </div>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
                <p className="text-secondary lead fs-6">Trusted by leading organizations and industry experts.</p>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
                        {partner.link ? (
                            <a
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    width={120}
                                    height={48}
                                    style={{ maxWidth: "120px", height: "auto" }}
                                />
                            </a>
                        ) : (
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                width={120}
                                height={48}
                                style={{ maxWidth: "120px", height: "auto" }}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default Partners;