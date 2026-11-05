import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#f8f6f4] py-20 text-center">
      <h1 className="text-5xl font-bold text-[#1D3C45]">Page not found</h1>
      <p className="mt-4 text-secondary">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn-warning mt-6">Back to homepage</Link>
    </div>
  );
}
