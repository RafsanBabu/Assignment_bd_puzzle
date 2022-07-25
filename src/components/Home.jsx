import React from 'react'
import '../App.css'
const Home = () => {
  return (
      <div className='bg-black home-section py-10'>
    <div className='container'>
        <div className='d-flex row'>
            <div className='intro text-white self-center col-md-6'>
                <div className='flex-row relative'>
                <h3 className='pb-3'>Hello, it's me</h3>
                <h1 className='pb-3'>Bangla Puzzle <i className="fa fa-circle text-purple-600"></i></h1>
                <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Consequatur deleniti quae
                    , voluptatum dolores labore alias atque incidunt rem voluptates vel 
                    laudantium culpa ipsum nemo quos s
                    ed reiciendis dolorum placeat praesentium.</p>
                    <a className='link text-white'>Scroll For More</a>
                    </div>

            </div>
            {/* <div className='profile-img text-white col-md-6 w-50 relative'>
                <img src='../Assets/Home/home-bg.jpg'/>
            </div> */}
        </div>

    </div>
    </div>
  )
}

export default Home