import React from 'react'
import { IoIosDocument} from "react-icons/io";
import { GiHealthPotion } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";


function Home() {
  return (
    <div>
        <section className='accupay'> 
         <div className="container">
        <div className='photo'>
            <img src="https://softivuspro.com/accupay/main/assets/images/solution_illustrations.png" alt="" />
        </div>
        <div className='text'>
<h1>Consolidate Payroll Processing</h1>
<p className='pp'>We have designed a fast and effective payroll system that streamlines your payment process.</p>
<div className='icons'>
    <div className='icon'><div className='daire'><IoIosDocument /></div><p>Tax Preparation</p></div>
    <div className='icon'><div className='daire'><GiHealthPotion /></div><p>Payroll Processing</p></div>
</div>
<div className="icons">
<div className='icon'><div className='daire'><FaRegLightbulb /></div><p>Cost Effective</p></div>
<div className='icon'><div className='daire'><IoIosRocket /></div><p>Scale Rapidly</p></div>
</div>
<button className='btn'>Contact Us</button>

        </div>



         </div>
        </section>
    </div>
  )
}

export default Home