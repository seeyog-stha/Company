import React from 'react'

export default function StaffDetails() {
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] flex items-center justify-center'>
        <div className='w-11/12 h-[98vh] bg-base-100 lg:p-5 overflow-y-scroll lg:overflow-y-hidden' >
            {/* for btn  */}
            <div className='flex justify-between'>
                <button className='btn btn-circle'>❮</button>
                <h1 className='text-xl font-bold underline'>Staff Details</h1>
                <div className='lg:space-x-7 space-x-2'>
                    <button className='btn btn-primary btn-outline'>edit</button>
                    <button className='btn btn-secondary btn-outline'>delete</button>
                </div>
            </div>
            {/* for staff info  */}
            <div className='flex justify-between flex-col lg:flex-row items-center lg:items-start'>
                {/* image section  */}
                
                <div className='avatar online lg:h-44 mt-9 lg:ml-7'>
                    <div className='lg:w-44 rounded-full ring '>
                        <img src="https://image.shutterstock.com/image-photo/official-photo-booth-portrait-woman-260nw-303266858.jpg" alt="" />
                    </div>
                </div>
                {/* info section  */}
                <div className='w-2/3 mt-10 lg:mt-0'>
                    {/* basic info  */}
                    <div className='text-xl'>
                        <div className='flex'>
                            <h5 className='font-bold mr-3'>Name:</h5>
                            <p >lajlj</p>
                        </div>
                        <div className='flex'>
                            <h5 className='font-bold mr-3'>Gender:</h5>
                            <p >lajlj</p>
                        </div>
                        <div className='flex'>
                            <h5 className='font-bold mr-3'>Date of birth:</h5>
                            <p >lajlj</p>
                        </div>
                        <div className='flex'>
                            <h5 className='font-bold mr-3'>Nationality:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>Address:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>Contact:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>E-mail:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>Started Date:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>Post:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>Status:</h5>
                            <p >lajlj</p>
                        </div> <div className='flex'>
                            <h5 className='font-bold mr-3'>No. of Projects accomplished:</h5>
                            <p >lajlj</p>
                        </div>
                
                    </div>
                    {/* chart  */}
                        <p className='underline text-xl font-bold mb-5'> summary</p>
                    <div className='flex justify-evenly flex-col items-center lg:flex-row'>
                        <div>
                        <div className="radial-progress ring-1 ring-pink-400 text-pink-300" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}>70%</div>
                        <p className='text-center mt-6'>skill set</p>
                        </div>
                        <div>
                        <div className="radial-progress text-blue-400 ring-1" style={{ "--value": "25", "--size": "10rem", "--thickness": "1rem" }}>1year</div>
                        <p className='text-center mt-6'>experience</p>
                        </div>
                        <div>
                        <div className="radial-progress ring-1 ring-black" style={{ "--value": "50", "--size": "10rem", "--thickness": "1rem" }}>3</div>
                        <p className='text-center mt-6'>projects</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}
