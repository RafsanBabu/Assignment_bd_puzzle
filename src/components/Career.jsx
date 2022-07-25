import React from 'react'

const Career = () => {
  return (
    <div className='bg-black py-10'>
        <div className='container text-white'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='pb-3'>Career</h1>
                </div>
                <div>
                    <a className='link text-white pb-3'>Get CV</a>
                </div>

            </div>
            <div className='row'>
                <div className='d-flex'>
                    <div className='careerItem flex-row col-md-3'>
                        <div className='personCard'>
                            <h2>John Loe</h2>
                            <h4>UI/UX Designer</h4>
                            <p>Mar 2019 - Present</p>
                        </div>

                    </div>
                    <div className='careerItem flex-row col-md-3'>
                        <div className='personCard'>
                            <h2>John Loe</h2>
                            <h4>UI/UX Designer</h4>
                            <p>Mar 2019 - Present</p>
                        </div>

                    </div>
                    <div className='careerItem flex-row col-md-3'>
                        <div className='personCard'>
                            <h2>John Loe</h2>
                            <h4>UI/UX Designer</h4>
                            <p>Mar 2019 - Present</p>
                        </div>

                    </div>
                    <div className='careerItem flex-row col-md-3'>
                        <div className='personCard'>
                            <h2>John Loe</h2>
                            <h4>UI/UX Designer</h4>
                            <p>Mar 2019 - Present</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Career