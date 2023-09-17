
"use client"
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function CarouselVideo({ children: autoSlide = false, autoSladeInterval = 1000 }) {
    const { data, error, isLoading } = useSWR('http://localhost:1337/api/corousels?populate=*', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const video = data.data.map((post, index) => {
        const path = post.attributes.video.data;
        // console.log(path)
        return path;
    })


    const post = data.data.map((index) => {
        //console.log(Object.keys(index))
        const post = Object.keys(index)
        return post

    });


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFristSlide = currentIndex === 0;
        const newIndex = isFristSlide ? post.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === post.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSladeInterval)
        return () => clearInterval(slideInterval)
    })


    return (
        <div className="w-[65%] bg-red-400 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)] relative overflow-hidden group">
            <div className="flex h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {video.map((post, index) => {
                    const path = post[0].attributes.url
                    {/* console.log(path) */ }
                    return (
                        <video className="object-cover aspect-video" key={index} src={`http://127.0.0.1:1337${path}`} title={post[0].attributes.name} autoPlay muted loop />
                    );
                })}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevSlide}>
                    <BsChevronLeft size={30} className="hidden group-hover:text-slate-600 group-hover:block" />
                </button>
                <button onClick={nextSlide}>
                    <BsChevronRight size={30} className="hidden group-hover:text-slate-600 group-hover:block" />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {post.map((_, i) => (
                        <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full ${currentIndex === i ? "p-1" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>

        </div>
    )
}