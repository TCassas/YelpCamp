import CampgroundsLogic from './CampgroundsLogic'
import Campground from '../../Components/Campground/Campground'
import styled from 'styled-components'

const Campgrounds = () => {
    const { campgrounds } = CampgroundsLogic()

    return (
        <section>
            <CampgroundsContainer>
                <CampgroundsFilter>
                    <p>hola</p>
                </CampgroundsFilter>
                <CampgroundCards>
                    {campgrounds.map(campground => 
                        <Campground campground={campground}/>
                    )}
                </CampgroundCards>
            </CampgroundsContainer>
        </section>
    )
}

const CampgroundsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #ebebeb75;
    column-gap: 10px;
`

const CampgroundCards = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    height: 100%;
    overflow: scroll;
    padding: 0 10px 0 10px;
    background-color: white;
`

const CampgroundsFilter = styled.section`
    display: grid;
    background-color: white;
`

export default Campgrounds