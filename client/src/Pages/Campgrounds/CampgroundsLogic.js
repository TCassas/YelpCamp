import { useEffect, useState } from 'react'
import Axios from 'axios'

const CampgroundsLogic = () => {
    const [campgrounds, setCampgrounds] = useState([])
    
    //Sets all campgrounds from the DB to the state
    useEffect(async () => {
        const response = await Axios.get('/campgrounds')

        await setCampgrounds(response.data)
    }, [])

    return { campgrounds }
}

export default CampgroundsLogic