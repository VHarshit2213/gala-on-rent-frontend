import React from 'react'
import { Title } from '../../components/common'
import topCities from '../../assets/Home/topCities.png'

const TopCities = () => {
    return (
        <div className='py-8 xsm:py-15 flex flex-col gap-[30px] xsm:gap-12.5 px-4 xsm:px-10 l:px-20 xl:px-32'>
            <Title
                title="Top"
                highlightTitle="Cities"
                description="Explore real estate in popular Indian cities" />
            <div className='grid l:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3.5'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => (
                        <div className='flex gap-4'>
                            <img src={topCities} />
                            <div className='flex flex-col justify-center gap-1.5'>
                                <p className='font-semibold text-base'>Delhi / NCR</p>
                                <p className='text-muted-transparent text-sm'>15,000+ Properties</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TopCities
