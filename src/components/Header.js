"use client"
import Image from "next/image";
import DateTime from "./DateTime";
import CountMembers from "./CountMembers";
import CountCollections from "./CountCollections";
import Kunjungan from "./Kunjungan";
import Pusling from "./Pusling";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faInstagram, faGlobe)

export default function Header() {
    return (
        <div className="min-w-full h-32 flex justify-between">
            <div className="flex w-[60%] items-center bg-cyan-500 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                <div className="bg-lime-800 border-r-4 border-black">
                    <Image className="object-contain" width={120} height={120} src="/assets/img/Logo-Kota-Depok.png" alt="Logo Kota Depok" />
                </div>
                <div className="w-full">
                    <h1 className="font-bold text-2xl ml-2 mt-3">Dinas Kearsipan dan Perpustakaan Kota Depok</h1>
                    <p className="ml-2">Jl.Margonda Raya No.54 Pancoranmas - Kota Depok</p>
                    <div className="flex gap-3 border-t-4 border-black bg-indigo-400 h-fit mt-6">
                        <div className='flex items-center gap-2 ml-5'>
                            <FontAwesomeIcon icon={faGlobe} />
                            <p>diskarpus.depok.go.id | </p>
                        </div>
                        {/* <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <p className="text-sm">Perpustakaan Kota Depok</p>
                        </div> */}
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faInstagram} />
                            <p>@perpustakaanumumkotadepok</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[38%] h-32 flex gap-5 ">
                <Kunjungan />
                <Pusling />
            </div>
        </div>
    )
}