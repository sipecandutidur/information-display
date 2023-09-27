"use client"
import CarouselVideo from "./CarouselVideo";
import useSWR from 'swr';
import moment from 'moment'
import Pusling from "./Pusling";
import Kunjungan from "./Kunjungan";

const dateNow = moment().locale('id');
const now = dateNow.format('YYYY-MM-DD');


const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function Information() {
    const { data: edukasi, error: err, isLoading: load } = useSWR(`http://localhost:1337/api/events?filters[choice][$eq]=kunjungan&filters[date][$eq]=${now}`, fetcher)
    const { data: pusling, error: errPus, isLoading: loading } = useSWR(`http://localhost:1337/api/events?filters[choice][$eq]=pusling&filters[date][$eq=${now}`, fetcher)
    const kunjungan = edukasi || { data: [] };
    const keliling = pusling || { data: [] };

    if (err || errPus) {
        return <div>Failed to load</div>;
    }

    if (load || loading) {
        return <div>Loading...</div>;
    }

    console.log()
    return (
        <div className="w-[65%] h-full">
            <CarouselVideo />
            <div className="flex gap-5 mt-7">
                <Kunjungan>
                    {kunjungan.data.length === 0 ? (
                        <p>Tidak Ada Kunjungan</p>
                    ) : (
                        kunjungan.data.map((edukasi, index) => {
                            const name = edukasi.attributes.nameSchool;
                            return (

                                <p className="text-center text-xl mt-3" key={index}>{name}</p>
                            )
                        })
                    )}
                </Kunjungan>
                <Pusling>
                    {keliling.data.length === 0 ? (
                        <p>Tidak Ada Perpustakaan Keliling</p>
                    ) : (
                        keliling.data.map((pusling, index) => {
                            const name = pusling.attributes.nameSchool;
                            return (

                                <p className="text-center text-xl mt-3" key={index}>{name}</p>
                            )
                        })
                    )}
                </Pusling>
            </div>
        </div>
    )
}