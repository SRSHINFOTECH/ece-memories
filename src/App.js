import {React} from 'react'
import MainPage  from '../src/components/mainPage/MainPage.js'
import SideNavBar  from '../src/components/navBar/SideNavBar.js'
import TopNavBar  from '../src/components/navBar/TopNavBar.js'
import "../src/assets/css/twbs.css"

export default function App() {
 
  return (
    <>
      <TopNavBar/>
      <div style={{display:"flex"}}>
        <SideNavBar/>
         <MainPage/>
      </div>
     
    </>
  )
}
