"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import useSWR from 'swr'
import CarouselImage from "./CarouselImage";



library.add(fas, faHeart, faComment, faPaperPlane, faBookmark)

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Instagram() {

  const { data, error, isLoading } = useSWR('http://localhost:1337/api/instagrams?populate=*', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const slides = data.data;

  return (

    <div className="w-[35%] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
      <div className="flex p-3">
        <div className="w-11 h-11 ring-2 ring-[#e96443] ring-offset-1 rounded-full flex items-center justify-center  overflow-auto">
          <Image className="object-contain" width={500} height={500} src="/assets/img/perpustakaan.jpeg" alt="profile" />
        </div>
        <div>
          <p className="ml-2 font-medium text-lg">perpustakaanumumkotadepok</p>
          <p className="ml-2 text-xs text-slate-500">Kota Depok</p>
        </div>
      </div>

      <div className="w-full h-96 bg-zink-600 mt-3">
        {/* {data.data.map((post, index) => {
          const path = post.attributes.post.data.attributes.url
          return (
            <Image key={index} width={200} height={200} src={`http://127.0.0.1:1337${path}`} alt={post.attributes.title} />
          );
        })} */}
        <CarouselImage autoSlide={true} autoSladeInterval={1000} />
      </div>

      <div className="gap-2 flex mt-20 p-3">
        <FontAwesomeIcon icon={faHeart} className="text-red-700 text-xl" />
        <FontAwesomeIcon icon={faComment} flip="horizontal" className="text-xl" />
        <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
        <FontAwesomeIcon icon={faBookmark} className="text-xl" />
      </div>
      <div className="p-3 -mt-2">
        <p className="font-bold">12.100 Likes</p>
        <p className="font-bold">perpustakaanumumkotadepok</p>
        <p>Hai.. Sobat literasi, selamat datang di perpustakaan umum kota depok ...</p>
        <p className="text-zinc-600">more</p>
      </div>
    </div>
  )
}

