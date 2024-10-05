import React, { useState, useEffect } from 'react';
import { getUserPens } from '../services/userService';

function Profile({ match }) {
    const [pens, setPens] = useState([]);

    useEffect(() => {
        const fetchPens = async () => {
            const response = await getUserPens(match.params.username);
            setPens(response);
        };
        fetchPens();
    }, [match.params.username]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">User's Pens</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pens.map((pen) => (
                    <div key={pen._id} className="border p-4">
                        <h2 className="font-semibold">{pen.title}</h2>
                        <p>{pen.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
