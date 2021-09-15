import React from 'react'
import "./navBar.css"

export default function SideNavBar() {
    let items = document.querySelectorAll('li');

      items.forEach(item => {
       item.addEventListener('click', () => {
        items.forEach(item => item.classList.remove('active'))
         item.classList.add('active')
    
       })
    })
    return (
        <>

<div class="side-bar">
  <ul className="side-bar-h">
    <li class="active">Home</li>
    <li>Profile</li>
    <li>Messages</li>
    <li>Setting</li>
    <li>Help</li>
    <li>Password</li>
    <li>Sign Out</li>
  </ul>
</div>
</>
    )
}
