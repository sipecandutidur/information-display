/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useSWR from 'swr'
import Footer from "./Footer";

const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function CarouselVideo({ children: autoSlide = true }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentVideoDuration, setCurrentVideoDuration] = useState(60000);

   
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_STRIPE}/api/corousels?populate=*`, fetcher)

    const videos = data?.data || [];
    //console.log(Object.keys(videos))
    const posts = videos.map((index) => Object.keys(index));

    // useEffect(() => {
    //     if (!autoSlide) return;

    //     const slideInterval = setInterval(nextSlide, autoSladeInterval);
    //     return () => clearInterval(slideInterval);
    // });
    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setTimeout(() => {
            nextSlide();
        }, currentVideoDuration * 1000);

        return () => clearTimeout(slideInterval);
    }, [currentIndex, currentVideoDuration]);



    const prevSlide = () => {
        const isFristSlide = currentIndex === 0;
        const newIndex = isFristSlide ? posts.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === posts.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


    return (
        <div className="w-full h-fit bg-red-400 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)] relative overflow-hidden group">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {videos.map((post, index) => {
                    const path = post.attributes.video.data.attributes.url
                    console.log(path) 
                    return (
                        <video
                            className="object-top aspect-video"
                           
                            src={`${process.env.NEXT_PUBLIC_STRIPE}${path}`}
                            title={post.attributes.title}
                            key={index}
                            autoPlay
                            muted
                            loop
                            onLoadedMetadata={(e) => {
                                const videoDuration = e.target.duration;
                                // console.log(videoDuration)
                                setCurrentVideoDuration(videoDuration)
                            }}
                        />
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
                    {posts.map((_, i) => (
                        <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full ${currentIndex === i ? "p-1" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}