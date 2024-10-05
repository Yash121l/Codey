import React, { useState } from 'react';
import { signIn } from '../services/authService';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn({ email, password });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded shadow-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-6">Sign In</h2>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="border p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="border p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
