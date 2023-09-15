import Image from "next/image";

export default function Header(){
    return(
        <div className="min-w-full h-32 flex justify-between">
            <div className="flex w-[63%] items-center bg-cyan-500 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                <div className="bg-lime-800 border-r-4 border-black">
                    <Image className="object-contain" width={120} height={120} src="/assets/img/Logo-Kota-Depok.png" alt="Logo Kota Depok"/>
                </div>
                <div className="w-full">
                    <h1 className="font-bold text-2xl ml-2 mt-3">Dinas Kearsipan dan Perpustakaan Kota Depok</h1>
                    <p className="ml-2">Jl.Margonda Raya No.54 Pancoranmas - Kota Depok</p>
                    <div className="border-t-4 border-black bg-red-600 h-full mt-5">
                        <p className="ml-2"><marquee direction="left">text Runing</marquee></p>
                    </div>
                </div>
            </div>
            <div className="w-[35%] h-32 flex gap-7 ">
                <div className="w-1/2 bg-slate-500 h-32 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                    <p className="bg-red-400 text-white text-center font-bold text-xl w-full items-center">Jumlah Anggota</p>
                    <p className="text-center text-4xl mt-4">123124</p>
                </div>
                <div className="w-1/2 bg-orange-700 h-32 flex flex-col items-center border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                    <p className="bg-cyan-500 text-white text-center font-bold text-xl w-full items-center">Hari</p>
                    <p className="font-bold text-4xl">Jam</p>
                    <p>Tanggal</p>
                    <p className="bg-indigo-800 text-center text-xl text-white w-full">Tahun</p>
                </div>
            </div>
        </div>
    )
}