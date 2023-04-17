import React from "react";
import ReactStars from "react-rating-stars-component";
import { MdLocationOn } from 'react-icons/md';

function Item(props) {
  
  const FoodItems=[{
    name:'The Muglan Resturant',
    img:'Image/f1.webp',
    location:'Milanchock,Butwal'

  },
  {
    name:'KFC',
    img:'Image/f2.jpg',
    location:'Kalikanagar,Butwal'

  },
  {
    name:'Black Forest',
    img:'Image/f3.jfif',
    location:'Manigram,Butwal'

  },
  {
    name:'Camellia Pizza',
    img:'Image/f4.jfif',
    location:'Sukhanagar,Butwal'

  },
  {
    name:'Dark Hood',
    img:'Image/f2.jpg',
    location:'Yogikuti,Butwal'

  },
  {
    name:'Benny Penny ',
    img:'Image/f2.jpg',
    location:'Murgiya,Butwal'

  },

];
  return (

   
      <>
      <div className="flex mt-6 justify-center items-center ">
       
        <div className="flex-col">
          <b className="flex justify-center items-center m-6">FoodMood Top Picks!</b>
          <div className="flex flex-wrap justify-center gap-7 ">
        {
       FoodItems.map((item)=>(
          <div >
          <div className="h-60 w-80 bg-gradient-to-t from-zinc-400 shadow-2xl border-solid ">
           <div className="object-contain pl-9 mt-3 h-60 w-30 hover:scale-95 ease-linear duration-75">
           <img src= {item.img} alt="first" className="object-contain pr-9  "/>
            </div>

     
           <div className="flex justify-end  pr-4  ">

             <ReactStars
               count={5}
               isHalf={true}
               size={24}
               activeColor="#ffd700" />
           </div>
         </div><div className="w-80 h-20 box-border border-black shadow-2xl">
             <b>{item.name}</b>
             <div className="flex ">
               <i className="pt-1"><MdLocationOn /></i>
               <h2 className="pl-2"> {item.location}</h2>
             </div>

           </div><div>


           </div>
           </div>
       ))}
       </div>
       
          
          
        </div>
        
      </div>
      
    </>

  
   
  );
}

export default Item;
