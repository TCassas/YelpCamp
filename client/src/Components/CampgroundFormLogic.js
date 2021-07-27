import Axios from 'axios'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const NewCampgroundFormLogic = () => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState(0)
    const { id } = useParams()

    const history = useHistory() //To redirect

    //If there is an id parameter in the url, get that campground and fill the state with the existing data
    useState(async () => {
        if(id) {
            const response = await Axios.get(`/campgrounds/${id}`)
            
            setTitle(response.data.title)
            setLocation(response.data.location)
            setPrice(response.data.price)
        }
    }, [])

    //Input events
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    //Form onsubmit event handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        //If there is a id parameter in the url, change from saving to updating a campground

        if(!id) {
            const response = await Axios.post('/campgrounds', { title, location, price })
            if(response) {
                history.push('/campgrounds')
            }
        } else {
            const response = await Axios.put(`/campgrounds/${id}`, { title, location, price })
            if(response) {
                history.push(`/campgrounds/${id}`)
            }
        }
    }

    return  {
                handleChangeTitle, handleChangeLocation, handleChangePrice, handleSubmit,
                title, location, price
            }
}

export default NewCampgroundFormLogic