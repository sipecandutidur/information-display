/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function CarouselImage({ children: autoSlide = true, autoSladeInterval = 60000 }) {
    const { data, error, isLoading } = useSWR('http://localhost:1337/api/instagrams?populate=*', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const post = data.data.map((index) => {
        //console.log(Object.keys(index))
        const post = Object.keys(index)
        return post

    });


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

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSladeInterval)
        return () => clearInterval(slideInterval)
    })


    return (
        <div className="relative overflow-hidden group">
            <div className="flex h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.data.map((post, index) => {
                    const path = post.attributes.post.data.attributes.url
                    return (
                        <Image key={index} width={500} height={500} src={`http://127.0.0.1:1337${path}`} alt={post.attributes.title} />
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