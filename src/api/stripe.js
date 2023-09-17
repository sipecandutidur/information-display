import api from ".";


const ENDPOINTS = {
    INSTAGRAM : '/instagrams',
    CAROUSEL : '/carousels',
}

const getAllInstagram = async () => {
    try {
        const instagram = await api.get(`${ENDPOINTS.INSTAGRAM}?populate=*`)
        console.log(instagram.data)
        return instagram.data;
    } catch (err){
        throw Error(err)
    }
}


export { getAllInstagram }