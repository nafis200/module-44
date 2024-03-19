import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phone = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
    //    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //    .then(res => res.json())
    //    .then(data => setPhones(data.data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(data => setPhones(data.data.data))
    .then(data => {
          const Phonedata = data.data.data;
          const PhonesWith = Phonedata.map(phone =>{
            const obj = {
                name: phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
          })
          setPhones(PhonesWith);
          console.log(PhonesWith);
    } )

    },[])
    return (
        <div>
            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={1200} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phone;