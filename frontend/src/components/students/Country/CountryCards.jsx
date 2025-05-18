const CountryCard = ({ country, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{country.flag}</span>
          <h3 className="text-xl font-bold">{country.name}</h3>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{country.students} students</span>
          <span>{country.universities} universities</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;