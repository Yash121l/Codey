import React, { useState, useEffect } from 'react';
import PenCard from '../components/PenCard';
import { getAllPens } from '../services/penService';

function Home() {
    const [pens, setPens] = useState([]);

    useEffect(() => {
        // Fetch all pens on component mount
        const fetchPens = async () => {
            const response = await getAllPens();
            setPens(response);
        };
        fetchPens();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Explore Pens</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pens.map((pen) => (
                    <PenCard key={pen._id} pen={pen} />
                ))}
            </div>
        </div>
    );
}

export default Home;
