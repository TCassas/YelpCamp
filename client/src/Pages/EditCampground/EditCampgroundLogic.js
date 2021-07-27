import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const EditCampgroundLogic = () => {
    const [campground, setCampground] = useState({})
    const { id } = useParams()

    useEffect(async () => {
        const response = await Axios.get(`/campgrounds/${id}`)

        setCampground(response.data)
    }, [])

    return { campground }
}

export default EditCampgroundLogic