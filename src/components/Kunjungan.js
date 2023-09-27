"use client"
import useSWR from 'swr';
import moment from 'moment'
const dateNow = moment().locale('id');
const now = dateNow.format('YYYY-MM-DD');


const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Kunjungan() {
    const { data: edukasi, error: err, isLoading: load } = useSWR(`http://localhost:1337/api/events?filters[choice][$eq]=kunjungan&filters[date][$eq]=${now}`, fetcher)

    const kunjungan = edukasi || { data: [] };
    if (err) {
        return <div>Failed to load</div>;
    }

    if (load) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-[100%] h-32 bg-cyan-600 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
            <p className="text-center font-bold bg-yellow-600 text-xl border-b-4 border-black">Kunjungan Edukasi</p>
            <p className="text-center text-xl border-dashed border-b-2 border-black">Hari ini</p>
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
        </div>
    )
}