// src/components/universities/Universities.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UniversitiesHero from '../components/university/UniversitiesHero';
import UniversitiesFilters from '../components/university/UniversitiesFilters';
import UniversitiesList from '../components/university/UniversitiesList';
// import UniversitiesMap from '../components/university/UniversitiesMap';
import UniversitiesTestimonials from '../components/university/UniversitiesTestimonials';

const Universities = () => {
    const [filters, setFilters] = useState({
        country: '',
        ranking: '',
        programs: '',
        tuition: ''
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-light"
        >
            <UniversitiesHero />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="sticky top-24"> {/* top-24 = 6rem = 96px */}
                            <UniversitiesFilters filters={filters} setFilters={setFilters} />
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <UniversitiesList filters={filters} />
                    </div>
                </div>
            </div>

            <UniversitiesTestimonials />
        </motion.div>
    );
};

export default Universities;