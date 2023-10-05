"use client"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function CountCollections() {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_INLISLITE}/api/jumlahcollections`, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>



    return (
        <div className="w-36 bg-slate-500 h-32 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
            <p className="bg-red-400 text-white text-center font-bold text-base w-full items-center">Jumlah Koleksi</p>
            <p className="text-center text-4xl mt-4">{data[0].collections}</p>
            <p className="text-center text-xl">Eksemplar</p>
        </div>
    )
}