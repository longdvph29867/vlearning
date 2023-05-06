import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

export default function BackTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true);
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return backToTopButton ? (<button 
    style={{
        position: 'fixed',
        width:'40px',
        height:'40px',
        right:'20px',
        bottom:'20px',
        fontSize:'16px',
        color:'#fff',
        backgroundColor:'#41b294',
        border:'none',
        borderRadius:'8px',
        cursor:'pointer',
    }}
    onClick={scrollUp}
    >
        <FaArrowUp/>
    </button>) : <></>
}
