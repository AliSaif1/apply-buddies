import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCards';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CountriesList = () => {
  const countries = [
    { id: 1, name: 'United States', flag: '🇺🇸', students: '250K+', universities: '4,500+' },
    { id: 2, name: 'United Kingdom', flag: '🇬🇧', students: '180K+', universities: '160+' },
    { id: 3, name: 'Canada', flag: '🇨🇦', students: '120K+', universities: '250+' },
    { id: 4, name: 'Australia', flag: '🇦🇺', students: '90K+', universities: '43' },
    { id: 5, name: 'Germany', flag: '🇩🇪', students: '75K+', universities: '400+' },
    { id: 6, name: 'France', flag: '🇫🇷', students: '65K+', universities: '3,500+' },
  ];
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(`/`)}
          className="flex items-center text-primary hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>
        <h2 className="text-3xl font-bold text-center mb-12">Popular Study Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link key={country.id} to={`/Countries/${country.id}`}>
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesList;