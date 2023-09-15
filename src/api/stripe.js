import api from ".";


const ENDPOINTS = {
    INSTAGRAM : '/instagrams',
    CAROUSEL : '/carousels',
}

const getAllInstagram = async () => {
    try {
        const instagram = await api.get(ENDPOINTS.INSTAGRAM)
        console.log(ENDPOINTS.INSTAGRAM);
        return instagram.data;
    } catch (error){
        throw Error(error)
    }
}


export { getAllInstagram }