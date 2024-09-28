"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


interface Params {
    id: string; // Define the type for the dynamic segment
  }
  
  interface UpdatePageProps {
    params: Params; // Define the type for the component props
  }




export default function Page({ params }: UpdatePageProps) {
    const {id} = params; 

    console.log(id);
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmitButton = () => {
        console.log('button is called.')
        axios.put('http://localhost:5000/update-user/'+id, {name: name, email: email})
        .then(res => {
            console.log(res); 
            router.push('/'); 
        }).catch(error => console.log(error))
    }
    return (
        <div className='mt-12'>
            <h1 className="flex justify-center font-bold text-5xl">Update user here for the project...</h1>

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
