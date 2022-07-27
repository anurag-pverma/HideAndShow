import React from 'react'
import { useState, useEffect } from 'react'

export default function FetchMethod() {
    const [user, setUser] = useState([]);

    // useEffect ke andar fetch method ko call karenge 
    // fetch promice return karta hai usko handle karne ke liye then ka use karte hai
    const  fetchData=()=>{
        fetch("https://randomuser.me/api/?nat=us&results=9&page=1")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            // console.log(data);  // response ko handle karne ke liye data ko likhenge
            let mydata = data.results;
            console.log(mydata);
            setUser(mydata);
        })
    }


    useEffect(()=>{
        fetchData();
    },[])










//  https://randomuser.me/api/?nat=us&res...

  return (
    <div>FetchMethod

        <div>




            {

                user.map(item=>(
                    <div key={item.length}>

                        <img src={item.picture.medium} alt="" />
                        <p>{item.name.first} {item.name.last} {item.name.title}</p>
                    </div>
                ))
            }







        </div>



    </div>
  )
}


// feth Promise return karega usko handle karne ke liye ham then use kar rahe hai
// uske andar respose object aayega 
// fetch ("https://jsonplaceholder.typicode.com/users")
//.then((response)=>{
    // console.log(response )
    // return response.json();// uske andar jo response object aaega usko return kar denge  aur response ko json form me pass karenge
// }).then((data)=>{   //   response se actual data ko le lenge
    // console.log(data);
// })