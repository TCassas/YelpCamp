import CampgroundFormLogic from "./CampgroundFormLogic"

const CampgroundForm = () => {
    const { 
            handleChangeTitle, handleChangeLocation, handleChangePrice, handleSubmit, 
            title, location, price
        } = CampgroundFormLogic()

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input 
                    type='text'
                    name='title'
                    onChange={handleChangeTitle}
                    value={title}
                />
            </div>
            <div>
                <label>Location</label>
                <input 
                    type='text'
                    name='location'
                    onChange={handleChangeLocation}
                    value={location}
                />
            </div>
            <div>
                <label>Price</label>
                <input 
                    type='number'
                    name='price'
                    onChange={handleChangePrice}
                    value={price}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CampgroundForm