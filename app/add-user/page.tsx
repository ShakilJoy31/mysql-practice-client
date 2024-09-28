"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmitButton = () => {
        console.log('button is called.')
        axios.post('http://localhost:5000/create-user', {name: name, email: email})
        .then(res => {
            console.log(res); 
            router.push('/'); 
        }).catch(error => console.log(error))
    }
    return (
        <div className='mt-12'>
            <h1 className="flex justify-center font-bold text-5xl">Add a new user here for the project...</h1>

            <div className='flex justify-center mt-6'>
                <div>
                    <h1 className='mb-2'>Enter Your Name and email: </h1>

                    <div className='grid gap-4'>
                        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter your name" required className='text-black' />

                        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" required className='text-black' />
                    </div>

                    <button onClick={handleSubmitButton} style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                    }} className='mt-4'>Submit</button>

                </div>
            </div>
        </div>
    );
}
