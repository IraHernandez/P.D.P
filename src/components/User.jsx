import React from 'react'
import { useParams } from 'react-router'
import { getUser, getUsers } from '../firebase/Firestore'
import { useEffect } from 'react'

const User = () => {

  const {userid} = useParams()
  useEffect(() => {
    getUser(userid).get().then(doc =>{ console.log(doc.data());
    });
 }, []);
  return (
    <div>
      <h1>{userid}</h1>
    </div>
  )
}



export default User
