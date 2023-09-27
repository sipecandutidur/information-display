import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faInstagram, faGlobe)

export default function Footer() {
    return (
        <div className="flex gap-2 mt-4 items-center border-4 border-black bg-indigo-400 p-2 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faGlobe} />
                <p>diskarpus.depok.go.id</p>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faFacebook} />
                <p>Perpustakaan Kota Depok</p>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faInstagram} />
                <p>@perpustakaanumumkotadepok</p>
            </div>

            <marquee>
                <p>dasdas</p><p>addsdadada</p>
            </marquee>
        </div>
    )
}