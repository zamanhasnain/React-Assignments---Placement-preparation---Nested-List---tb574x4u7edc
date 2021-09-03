import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  let [state1,setState1]= useState(false);
  let [state2,setState2]= useState(false);
  let [state3,setState3]= useState(false);
  let [state4,setState4]= useState(false);

  let [city1,setCity1] =useState(false);
  let [city2,setCity2]= useState(false);
  let [city3,setCity3]= useState(false);
  //  for state 2  city list 
  let [city11,setCity11] =useState(false);
  let [city22,setCity22]= useState(false);
  let [city33,setCity33]= useState(false);
  //  for state 3 city list
  let [city111,setCity111] =useState(false);
  let [city222,setCity222]= useState(false);
  let [city333,setCity333]= useState(false);
  //  for state 4 city list
  let [city1111,setCity1111] =useState(false);
  let [city2222,setCity2222]= useState(false);
  let [city3333,setCity3333]= useState(false);

   

    let discity1 =()=>{
      setState1(state1= !state1);       
    }
    let discity2 =()=>{
      setState2(state2= !state2);       
    }
    let discity3 =()=>{
      setState3(!state3);       
    }
    let discity4 =()=>{
      setState4(!state4);       
    }

    let distown1 =()=>{
      setCity1(!city1);
    }
    let distown2 =()=>{
      setCity2(!city2);
    }
    let distown3 =()=>{
      setCity3(!city3);
    }
    // for town of state2
    let distown11 =()=>{
      setCity11(!city11);
    }
    let distown22 =()=>{
      setCity22(!city22);
    }
    let distown33 =()=>{
      setCity33(!city33);
    }
    // for town of state3
    let distown111 =()=>{
      setCity111(!city111);
    }
    let distown222 =()=>{
      setCity222(!city222);
    }
    let distown333 =()=>{
      setCity333(!city333);
    }
    // for town of state4
    let distown1111 =()=>{
      setCity1111(!city1111);
    }
    let distown2222 =()=>{
      setCity2222(!city2222);
    }
    let distown3333 =()=>{
      setCity3333(!city3333);
    }

    


  return <div id="main"> 
  <button id="state1" onClick={discity1} >{states[0]['name']}</button>
  {state1? <><button id="city1" onClick={distown1}>{states[0].cities[0]['name']}</button>
  {city1?<> <button id="town1">{states[0].cities[0].towns[0]['name']}</button>
  <button id="town2">{states[0].cities[0].towns[1]['name']}</button>
   </>
   :null }

  <button id="city2" onClick={distown2} >{states[0].cities[1]['name']}</button>
  {city2?<> <button id="town1">{states[0].cities[1].towns[0]['name']}</button>
  <button id="town2">{states[0].cities[1].towns[1]['name']}</button>
   </>
   :null }

  <button id="city3" onClick={distown3} >{states[0].cities[2]['name']}</button> 
  {city3? <button id="town1">{states[0].cities[2].towns[0]['name']}</button>   
   :null }
  </>
  :null}

{/* STATE 2 */}


  <button id="state2" onClick={discity2}>{states[1]['name']}</button>
  {state2? <><button id="city1" onClick={distown11} >{states[1].cities[0]['name']}</button>
  {city11?<> <button id="town1">{states[1].cities[0].towns[0]['name']}</button>
  <button id="town2">{states[1].cities[0].towns[1]['name']}</button>
   </>
   :null }

  <button id="city2" onClick={distown22}>{states[1].cities[1]['name']}</button>
  {city22?<> <button id="town1">{states[1].cities[1].towns[0]['name']}</button>
  <button id="town2">{states[1].cities[1].towns[1]['name']}</button>
   </>
   :null }
  <button id="city3" onClick={distown33} >{states[1].cities[2]['name']}</button> 
  {city33?<> <button id="town1">{states[1].cities[2].towns[0]['name']}</button>
  <button id="town2">{states[1].cities[2].towns[1]['name']}</button>
   </>
   :null }  
  </>
  :null}

  {/*  State 3 */}
   
  <button id="state3" onClick={discity3}>{states[2]['name']}</button>
  {state3? <><button id="city1" onClick={distown111} >{states[2].cities[0]['name']}</button>
  {city111?<> <button id="town1">{states[2].cities[0].towns[0]['name']}</button>
  <button id="town2">{states[2].cities[0].towns[1]['name']}</button>
   </>
   :null }

  <button id="city2" onClick={distown222}>{states[2].cities[1]['name']}</button>
  {city222?<> <button id="town1">{states[2].cities[1].towns[0]['name']}</button>
  <button id="town2">{states[2].cities[1].towns[1]['name']}</button>
   </>
   :null }

  <button id="city3" onClick={distown333} >{states[2].cities[2]['name']}</button> 
  {city333?<> <button id="town1">{states[2].cities[2].towns[0]['name']}</button>
  <button id="town2">{states[2].cities[2].towns[1]['name']}</button>
   </>
   :null }   
  </>
  :null}






<button id="state4" onClick={discity4}>{states[3]['name']}</button>
  {state4? <><button id="city1" onClick={distown1111} >{states[3].cities[0]['name']}</button>
  {city1111?<> <button id="town1">{states[3].cities[0].towns[0]['name']}</button>
  <button id="town2">{states[3].cities[0].towns[1]['name']}</button>
   </>
   :null }


  <button id="city2" onClick={distown2222} >{states[3].cities[1]['name']}</button>
  {city2222?<> <button id="town1">{states[3].cities[1].towns[0]['name']}</button>
  <button id="town2">{states[3].cities[1].towns[1]['name']}</button>
   </>
   :null }


  <button id="city3" onClick={distown3333} >{states[3].cities[2]['name']}</button>
  {city3333?<> <button id="town1">{states[3].cities[2].towns[0]['name']}</button>
  <button id="town2">{states[3].cities[2].towns[1]['name']}</button>
   </>
   :null }   
  </>
  :null}
  </div>
  
}

export default App;
