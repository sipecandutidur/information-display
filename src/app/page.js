"use client";
import { getAllInstagram } from '@/api/stripe';
import CarouselVideo from '@/components/CarouselVideo'
import Header from '@/components/Header'
import Instagram from '@/components/Instagram'
import { useEffect } from 'react'


export default function Home() {  
  useEffect(() =>{
    getAllInstagram();
  },[])

  return (
    <main className="flex min-h-screen flex-col bg-yellow-300 p-5">
      <Header />
      <div className="flex flex-row gap-10 justify-between min-w-full min-h-screen mt-5">
        <CarouselVideo />
        <Instagram />
      </div>
    </main>
  )
}
