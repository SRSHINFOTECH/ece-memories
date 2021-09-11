import React from 'react'
import "./mainPage.css"
import User  from '../users/User.js'
import Search from '../../common/search/Search';

export default function MainPage() {

    return (
        <div className="main-page">
          <div className="main-page-user">
          <User/>
        </div>
        </div>

    )
}
