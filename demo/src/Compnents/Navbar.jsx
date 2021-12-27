import React,{useState} from 'react'
import './Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";


function Navbar() {
    const[showLinks,setShowLinks]=useState(false);

    return (
        <>
        <div className='Navbar'>
            <div className='leftside'>
                <div className='links' id={showLinks? "hidden":""}>
                 <a href='/Home'> Home</a>
                 <a href='/About Us'>About Us</a>
                 <a href='/Contact Us'>Contact</a>
                 <a href='/Feedback'>Feedback</a>
                 </div>
                 <button onClick={()=>setShowLinks(!showLinks)}>{" "}<ReorderIcon/></button>

                 </div>
            <div className='rightside'>
                <input type="text"placeholder='Search...'/>
                <button><SearchIcon/></button>
            </div>
        </div>
        <div className='well'>
            <h1>WellCome <br/>To <br/>SearchingYard</h1>
            </div>

        </>
    )
}

export default Navbar
