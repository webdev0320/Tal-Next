export default function CharteredAccountantInfo() {
  return (
    <section 
      className="py-10 lg:py-20 relative bg-center bg-cover"
      style={{ 
        backgroundImage: "url('/images/2025/08/Awards.webp')"
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#1D3C45]/80"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Chartered Accountant Services</h2>
          <div className="bg-[#d2601a] mx-auto my-6" style={{ width: "80px", height: "4px" }}></div>
          <p className="text-lg lg:text-xl leading-relaxed opacity-90">
            Chartered Accountants are financial professionals with specialised knowledge and expertise in tax laws, accounting, and financial management. 
            They’re an essential resource for anyone seeking to optimise their tax efficiency and financial performance. 
            Below, we’ll explore the different types of individuals and businesses who can benefit from chartered accountant services:
          </p>
        </div>
      </div>
    </section>
  );
}
