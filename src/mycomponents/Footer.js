import React from 'react'
import { useState } from "react";
import Slideshow from "./Slideshow";


export const Footer = () => {
 


    const [divs, setDivs] = useState([]);

    const addDiv = () => {
      setDivs([...divs, {}]); // Add an empty object to the array
    };
  
  

  return (
    
    <div class="container">
    <div class="row">
      
      <div class="col-4">
      
         {/* Search shops */}

         <input class="search" type="search" placeholder="Search shops"/>


         <div className='scroll' id='scroll'>
          
          <div style={{ textAlign: "center", padding: "20px" }}>
                <button onClick={addDiv} style={{ marginBottom: "10px" }}>
                  Create Shop
                </button>
                <div className="container" style={{ border: "2px solid black", padding: "10px" }}>
                  {divs.map((_, index) => (
                    <div
                      key={index}
                      className="dynamic-div"
                      style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#485a60",
                        margin: "10px",
                        display: "inline-block",
                        textAlign: "center",
                        lineHeight: "100px",
                        fontWeight: "bold",
                      }}
                    >
                      Shop {index + 1}
                    </div>
                  ))}
                </div>
              </div>
          
          
          {/* <div className='shopkeepers'>
            mayank gupta
          </div> */}
         
         </div>
        </div>


        {/* col-6 */}
        
      <div class="col-6">
     
      <h1 className="text-center text-3xl mt-4"></h1>
      <Slideshow />
      </div> 

      </div>
        
  </div>
  )  

}


