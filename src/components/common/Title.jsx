import React from 'react'

const Title = ({title,highlightTitle, description}) => {
    return (
        <div className='flex flex-col gap-y-2 justify-center items-center'>
            <h1 className='text-4xl capitalize font-semibold'>{title} <span className='text-orange'>{highlightTitle}</span></h1>
            <p className='text-gray-400 font-normal text-base'>{description}</p>
        </div>
    )
}

export default Title
