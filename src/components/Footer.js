import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faInstagram, faGlobe)

export default function Footer() {
    const pusling = ['SD Mekar', 'SD Bumi'];



    return (
        <div className="flex gap-2 items-center border-4 mt-4 border-black bg-orange-600 p-2 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">

            <marquee>Selamat Datang {pusling.toString()}</marquee>
        </div>
    )
}