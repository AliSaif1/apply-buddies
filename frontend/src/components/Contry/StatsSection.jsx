const StatsSection = () => {
  const stats = [
    { value: '100+', label: 'Countries' },
    { value: '50K+', label: 'Students Helped' },
    { value: '5K+', label: 'Universities' },
    { value: '$10M+', label: 'Scholarships' }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;