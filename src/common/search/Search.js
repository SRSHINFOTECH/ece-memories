import React from 'react'
import "./search.css"

export default function Search({searchData,onChangeSearch}) {
    return (
<div className="search">
<div class="search-container">
  <div class="searchInputWrapper">
    <input onChange={()=>{console.log("kkk");
    }}class="searchInput" type="text" placeholder='focus here to search'/>
    <i class="searchInputIcon fa fa-search"></i>
  
  </div>
</div>
  </div>
    )
}
