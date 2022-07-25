import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black py-10 contactSection'>
        <div className='d-flex container text-white flex-column justify-content-center'>
            <div className='text-center'>
                <h4>Whats next</h4>
            </div>
            <div className='text-center'>
                <h2>Lets work together.</h2>
            </div>
            <div className='text-center'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Sit doloremque aspernatur error illum corrupti consequuntur nisi facere a, temporibus saepe?
                     Explicabo officia tempore voluptatibus aliquam fugiat error non velit illo.</p>
            </div>
            <div className='text-center'>
                <a className='link text-white'>Write an email..<i class="fa fa-envelope"></i></a>
            </div>

        </div>
    </div>
  )
}

export default Contact