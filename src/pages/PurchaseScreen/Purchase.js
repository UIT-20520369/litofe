import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Payment } from '@mui/icons-material';
import "./Purchase.css"

const Purchase = () => {
  const [formData, setFormData] = useState({
    paymentMethod: 'Credit Card',
    plan: 'Personal',
    price: '₫82,417',
    billing: 'Bill yearly'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className='containerPurchase'>
        <div style={{backgroundColor:"#1C0F1E", minHeight:"40px", width:"500px", borderRadius:"10px 10px 0 0"}}></div>
        <div className='div-content-style'>
            <h2 style={{marginBottom:"0.1em"}}>You’re almost there</h2>
            <h4 style={{marginTop:"0.1em", fontWeight:"lighter"}}>Keep business and entertainment on track.</h4>
            <form onSubmit={handleSubmit}>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                    <h1 style={{paddingRight:"10px"}}>{formData.price}</h1>
                    <span>per month</span>
                </div>
                <h3 style={{marginBottom:"0.3em"}}>Payment summary</h3>
                <p style={{marginTop:"0.3em", fontWeight:"lighter"}}>{formData.price} x 12 months ₫989,000</p>
                <Button variant='outlined' startIcon={<Payment />}>Check out now</Button>
                <h3>INCLUDED IN PERSONAL</h3>
                <ul style={{listStyleType:"none"}}>
                    <li>✓ Unlimited streaming video</li>
                    <li>✓ More privilege</li>
                    <li>✓ and more.</li>
                </ul>
            </form>
        </div>  
    </div>
  );
}

export default Purchase;
