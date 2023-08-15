import React from "react";
import { useState, useEffect } from "react";

export default function Interval() {

   // The text to be gradually revealed
   const name = "Hii! My name is Ionathan and I'm a Frontend Developer!";

   // State to store the gradually revealed text
   const [info, setInfo] = useState("");
 
   // Effect to reveal text gradually
   useEffect(() => {
     let count = 0;
 
     // Set up an interval to add characters to the 'info' state
     let timer = setInterval(() => {
       if (count < name.length - 1) {
         // Add the current character to the 'info' state
         setInfo((prevInfo) => prevInfo + name[count]);
         count++;
       } else {
         clearInterval(timer); // Stop the interval when the entire string is added.
       }
     }, 100); // Interval every 100ms
 
     // Clean up by clearing the interval when the component unmounts
     return () => clearInterval(timer);
   }, []); // Empty dependency array, runs only once after component mount
 
  return (
    <main>
      <div>
        <div className="welcome">Welcome to my Portfolio</div>
        <h1>{info}</h1>
        <div className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odit
          quia quod repellat, recusandae fuga eligendi modi cumque minus
          doloremque perspiciatis at asperiores natus quae, deleniti blanditiis
          consequuntur voluptatum. Ipsa.
        </div>
      </div>
      <div className="astro-div">
        <img src="../public/astro.svg" />
      </div>
    </main>
  );
}
