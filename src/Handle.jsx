import React, { useEffect, useState } from 'react'
import CardScreen from './Components/CardScreen';
import Loder from './Components/Loder';
import axios from 'axios';
export let item;
const Handle = () => {
    let[Loding,setLoding]=useState(true);
    let[Data,setData]=useState();
useEffect(()=>{
 axios.get(' https://reqres.in/api/users?page=1').then(res=>{
    setData(res.data.data);
    item=Data;
    setLoding(false);
 })
},[])
console.log(Data);
  return (
    <>
 {Loding ? <div style={{marginTop:"5rem"}}> <Loder/> </div>: <CardScreen/>}
 </>
  )
}

export default Handle