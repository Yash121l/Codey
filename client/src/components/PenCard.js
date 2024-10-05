import React from 'react';
import { Link } from 'react-router-dom';

function PenCard({ pen }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{pen.title}</h2>
            <p className="text-gray-600">{pen.description}</p>
            <Link to={`/editor/${pen._id}`} className="text-blue-500 mt-4 block">
                View Pen
            </Link>
        </div>
    );
}

export default PenCard;
