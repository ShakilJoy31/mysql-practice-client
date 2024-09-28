"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  interface IUserData {
    ID: number;
    Name: string;
    Email: string;
  }
  const router = useRouter();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])


  // The functionality for delete... 
  const handleDeleteParticularUser = async (id: number) => {
    try{
      await axios.delete('http://localhost:5000/delete-user/'+id)
    }catch(error){
      console.log(error); 
    }

  }


  return (
    <div className='mt-12'>
      <h1 className="flex justify-center ">This is the new project for learning mysql...</h1>
      <h1 className="flex justify-center font-bold text-5xl">A simple CRUD app</h1>

      <button onClick={()=> router.push('/add-user')} style={{
        backgroundColor: '#4CAF50',
        color: 'white',
      }} className='flex justify-end ml-12'>Add User +</button>
      <div className='flex justify-center mt-6'>

        <table>
          <thead>
            <tr>
              <th>SL no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='text-black'>
            {
              users.map((user: IUserData, index) => <tr key={index}>
                <td>{user.ID}</td>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>
                  <button style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    marginRight: '5px'
                  }} onClick={()=> router.push(`update/${user.ID}`)}>Edit</button>


                  <button onClick={()=> handleDeleteParticularUser(user.ID)} style={{
                    backgroundColor: '#f44336',
                    color: 'white'
                  }} >Delete</button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}
