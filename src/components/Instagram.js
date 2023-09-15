import { getAllInstagram } from "@/api/stripe";
import Image from "next/image";
import { useEffect } from "react";


export default function Instagram(){
    useEffect(() =>{
        getAllInstagram();
      },[])

    return (
        <div className="w-[35%] p-3 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
          <div className="flex p-2">
            <div className="w-11 h-11 ring-2 ring-[#e96443] ring-offset-1 rounded-full flex items-center justify-center  overflow-auto">
              <Image className="object-contain" width={500} height={500} src="/assets/img/perpustakaan.jpeg" alt="profile"/>
            </div>
            <div>
              <p className="ml-2">perpustakaanumumkotadepok</p>
              <p className="ml-2 text-xs text-slate-500">Kota Depok</p>
            </div>
          </div>
        </div>
    )
}