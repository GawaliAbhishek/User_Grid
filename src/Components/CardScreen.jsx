import React from 'react'
import Data from '../Components/users.json'
import Card from "./Card";
import '../CSS/CardScreen.css';

function CardScreen(props) {
   
  console.log("Card");
   let data1=Data.data[0];
   let data2=Data.data[1];
   let data3=Data.data[2];
   let data4=Data.data[3];
   let data5=Data.data[4];
   let data6=Data.data[5];
    return (
        <div className="container">
            <div className="row1">
                <Card first_name={data1.first_name} last_name={data1.last_name} img={data1.avatar} email={data1.email} />
                <Card first_name={data2.first_name} last_name={data2.last_name} img={data2.avatar} email={data2.email} />
                <Card first_name={data3.first_name} last_name={data3.last_name} img={data3.avatar} email={data3.email} />

            </div>
            <div className="row2">
                <Card first_name={data4.first_name} last_name={data4.last_name} img={data4.avatar} email={data4.email} />
                <Card first_name={data5.first_name} last_name={data5.last_name} img={data5.avatar} email={data5.email} />
                <Card first_name={data6.first_name} last_name={data6.last_name} img={data6.avatar} email={data6.email} />

            </div>
        </div>
    )
}

export default CardScreen