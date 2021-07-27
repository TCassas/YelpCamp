import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Campground = (props) => {
    const campground = props.campground

    return (
        <CampgroundContainer>
            <Banner>

            </Banner>
            <Info>
                <strong>
                    <Link to={`/campgrounds/${campground._id}`}>
                        {campground.title}
                    </Link>
                </strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quod!</p>
                <Stats>
                    <div>
                        <p>100%</p>
                    </div>
                    <div>
                        <p>{campground.price}</p>
                    </div>
                </Stats>
            </Info>
        </CampgroundContainer>
    )
}

const CampgroundContainer = styled.article`
    display: grid;
    grid-template-rows: 110px auto;
    padding-bottom: 4px;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const Banner = styled.section`
    background-color: hotpink;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const Info = styled.section`
    display: grid;
    padding: 4px;
`

const Stats = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
`

export default Campground