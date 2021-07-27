import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const ShowLogic = () => {
    const [campground, setCampground] = useState({})
    const { id } = useParams()
    const history = useHistory()

    useEffect(async () => {
        const response = await Axios.get(`/campgrounds/${id}`)

        await setCampground(response.data)
    }, [])

    const handleClickDelete = async () => {
        try {
            const response = await Axios.delete(`/campgrounds/${id}`)

            history.push('/campgrounds')
        } catch (err) {
            console.log(err)
        }
    }

    return { campground, handleClickDelete }
}

export default ShowLogic