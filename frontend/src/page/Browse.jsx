import JobCard from '@/components/jobComponet/JobCard'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Browse = () => {
    const arr=[1,23,43,43,4,3,4]
  return (
    <div >
        <Navbar/>
        <div className='container'>
            <h1 className='mt-10 font-bold '>Search job({arr.length})</h1>
            <div className='grid grid-cols-3 gap-3 mt-3'>
                {
                    arr.map((ele)=>(
                        <JobCard/>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Browse