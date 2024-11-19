const BrandCard = ({ brandName, logoSrc }: { brandName: string; logoSrc: string }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={logoSrc}
          alt={`${brandName} logo`}
          className="w-16 h-16 object-contain mb-2"
        />
        <span className="text-sm font-semibold text-gray-700">{brandName}</span>
      </div>
    );
  }
export default BrandCard;