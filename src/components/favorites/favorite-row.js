import React from 'react'
import PropTypes from 'prop-types'

const IMG_WIDTH = 40
const FavoriteRow = ({ user }) => {
    const {
        avatar,
        name,
        surname
    } = user

    return (
        <div>
            <img src={avatar} width={IMG_WIDTH}/>
            <span>{`${name} ${surname}`}</span>
        </div>
    )
}

FavoriteRow.propTypes = {
    user: PropTypes.object,
}

export default FavoriteRow
