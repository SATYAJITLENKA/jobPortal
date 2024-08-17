import CategoryCarousel from '@/components/homeComponent/CategoryCarousel'
import HeroSection from '@/components/homeComponent/HeroSection'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import useGetAllJobs from '../../hooks/useGetAllJobs'
import React from 'react'
import LatestJobs from '@/components/homeComponent/LatestJobs'

export const Home = () => {
  useGetAllJobs()
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}
