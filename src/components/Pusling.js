"use client"
import useSWR from 'swr';
import moment from 'moment'
const dateNow = moment().locale('id');
const now = dateNow.format('YYYY-MM-DD');

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Pusling() {
    const { data: pusling, error: errPus, isLoading: loading } = useSWR(`http://localhost:1337/api/events?filters[choice][$eq]=pusling&filters[date][$eq=${now}`, fetcher)
    const keliling = pusling || { data: [] };

    if (errPus) {
        return <div>Failed to load</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-[100%] h-32 bg-cyan-600 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)] relative">
            <p className="text-center font-bold bg-yellow-600 text-xl border-b-4 border-black">Perpustakaan Keliling</p>
            <p className="text-center text-lg border-dashed border-b-2 border-black">Hari ini</p>
            {keliling.data.length === 0 ? (
                <p>Tidak Ada Perpustakaan Keliling</p>
            ) : (
                <marquee>
                    {keliling.data.map((pusling, index) => {
                        const name = pusling.attributes.nameSchool;
                        return (
                            <div key={index} className='overflow-hidden'>
                                <p className="text-center text-xl mt-3 flex" >{name}</p>
                            </div>
                        )
                    })}
                </marquee>
            )

            }

        </div>
    )
}