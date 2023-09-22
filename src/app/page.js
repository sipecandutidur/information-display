
import CarouselVideo from '@/components/CarouselVideo'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Information from '@/components/Information';
import Instagram from '@/components/Instagram'
import useSWR from 'swr'




export default function Home() {


  return (
    <main className="flex min-h-screen flex-col bg-yellow-300 p-5">
      <Header />
      <div className="flex flex-row gap-7 justify-between min-w-full min-h-screen mt-5">
        {/* <CarouselVideo /> */}
        <Information />
        <Instagram />
      </div>
      <Footer />
    </main>
  )
}

