import React from 'react'


function FilterMovie({search,setSearch}) {
  
  

  
  
  return (
    <div>
      <form className="search">
        <input  placeholder='Search movie..' value={search}type="text" onChange={(e)=>setSearch(e.target.value)}  />
        
         
        <label value="SEARCH">Search</label> 
      </form>
    </div>
  )
}

export default FilterMovie