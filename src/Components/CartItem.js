import React, { useState } from 'react';

function CartItem(props) {
    const[quantity,setQuantity]=useState(1);
    let price=130;
     price=price*quantity;
     const item=[
        {
            name:"Cafe Latte",
            img:'Image/c1.webp',


        },
        {
            name:"Bubble Tea",
            img:'Image/c2.jpeg',
            

        },
        {
            name:"soft drink",
            img:'Image/c3.webp',
            

        }
     ];
    return (
        <>
         <div className='flex flex-wrap p-7 justify-between '>
        {
        item.map((item1)=>(
           
        <div className='flex flex-col  gap-3 mt-9 ml-5 p-3 box-border h-96 w-60  border-x-3 border-y-3 shadow-md  '>
            <div className='shadow-sm '>
                <img src={item1.img} alt='dnjknds' className=' h-52 w-56 '/>
          

            </div>
            <h2 className='text-gray-400'>COFFEE BOX</h2>
            <b>{item1.name}</b>
            <h2 className='text-gray-400'>Rs{price}</h2>
            <div className='flex justify-between mt-3'>
               <div> <b className='text-red-700 underline cursor-pointer'>Add to cart</b></div>
               <div className='flex gap-3 pr-4'>
               <button type='button'  className='shadow-md h-5 w-5' onClick={()=>{ setQuantity(preCount=>preCount-1)}}>-</button>
           <div>{quantity}</div>
            <button type='button' className='shadow-md h-5 w-5' onClick={()=>setQuantity(preCount=>preCount+1)}>+</button>
               </div>

            </div>



        </div>
        
      
 ))}  </div>
            
        </>
    );
}

export default CartItem;