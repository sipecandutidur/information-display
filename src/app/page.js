
import CarouselVideo from '@/components/CarouselVideo'
import CountCollections from '@/components/CountCollections';
import CountMembers from '@/components/CountMembers';
import DateTime from '@/components/DateTime';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Information from '@/components/Information';
import Instagram from '@/components/Instagram'





export default function Home() {


  return (
    <main className="flex h-[100vh] w-[100hv] flex-col bg-yellow-300 p-5">
      <Header />
      <div className="flex flex-row gap-7 justify-between min-w-full min-h-screen mt-5">
        {/* <CarouselVideo /> */}
        <Instagram />
        <div>
          <div className="flex gap-5">
            <CarouselVideo />
            <div className="w-fit h-fit flex flex-col gap-7  justify-stretch">
              <CountMembers />
              <CountCollections />
              <DateTime />
            </div>
          </div>
          <Footer />
        </div>


      </div>
    </main>
  )
}

