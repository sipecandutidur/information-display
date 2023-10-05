"use client"
import CarouselVideo from "./CarouselVideo";
import useSWR from 'swr';
import moment from 'moment'
import Pusling from "./Pusling";
import Kunjungan from "./Kunjungan";
import Footer from "./Footer";

const dateNow = moment().locale('id');
const now = dateNow.format('YYYY-MM-DD');


const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function Information() {
    const { data: edukasi, error: err, isLoading: load } = useSWR(`${process.env.NEXT_PUBLIC_STRIPE}/api/events?filters[choice][$eq]=kunjungan&filters[date][$eq]=${now}`, fetcher)
    const { data: pusling, error: errPus, isLoading: loading } = useSWR(`${process.env.NEXT_PUBLIC_STRIPE}/api/events?filters[choice][$eq]=pusling&filters[date][$eq=${now}`, fetcher)
    const kunjungan = edukasi || { data: [] };
    const keliling = pusling || { data: [] };

    if (err || errPus) {
        return <div>Failed to load</div>;
    }

    if (load || loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="w-3/4 h-4/5 flex flex-col justify-stretch gap-5 ">
            <CarouselVideo />
            <Footer />
        </div>
    )
}