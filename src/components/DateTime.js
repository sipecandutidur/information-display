"use client"
import moment from 'moment'
import moments from 'moment-timezone';
import { useEffect, useState } from 'react';



moment.updateLocale('id', {
    months: [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ],
    weekdays: [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
    ]
})


let localDate = moment().local('id');


export default function DateTime() {
    const [time, setTime] = useState(moments().tz('Asia/Jakarta'));
    const updateClock = () => {
        setTime(moments().tz('Asia/Jakarta'));
        requestAnimationFrame(updateClock);
    }

    useEffect(() => {
        const animationFrameId = requestAnimationFrame(updateClock);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);


    const formattedTime = time.format('HH:mm');

    return (
        <div className='w-full'>
            <div className="w-1/2 bg-orange-700 h-32 flex flex-col items-center border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                <p className="bg-cyan-500 text-white text-center font-bold text-xl w-full items-center">{localDate.format('dddd')}</p>
                <p className="font-bold text-4xl">{formattedTime}</p>
                <p>{localDate.date()} {localDate.format('MMMM')}</p>
                <p className="bg-indigo-800 text-center text-xl text-white w-full">{localDate.year()}</p>
            </div>
        </div>
    )

}