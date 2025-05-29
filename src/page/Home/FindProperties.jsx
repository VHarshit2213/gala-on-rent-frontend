import React from 'react'
import { Button, Title } from '../../components/common'
import miami from "./../../assets/Home/miami.jpg"
import losAngeles from "./../../assets/Home/losAngeles.jpg"
import newYork from "./../../assets/Home/newYork.jpg"
import florida from "./../../assets/Home/florida.jpg"
import sellKey from "./../../assets/Home/sellKey.png"
import sellPropertyKey from "./../../assets/Home/sellPropertyKey.png"
import sellProperty from "./../../assets/Home/sellProperty.png"

const Image = ({ src, title, properties, imageClass }) => {
    return (
        <div className="relative overflow-clip rounded-xl">
            <img src={src} alt={src} className={`${imageClass} w-full h-full object-cover transition-transform duration-500 ease-in-out hover:[transform:rotate(-3deg)_scale(1.1)]`} />
            <div className="absolute h-1/2 top-1/2 inset-0 bg-gradient-to-t from-[#FFEEE0]/50 to-transparent"></div>
            <div className='absolute bottom-10 left-1/3 text-center'>
                <h4 className='text-white font-semibold text-xl'>{title}</h4>
                <p className='text-white font-normal'>{properties} Properties</p>
            </div>
        </div>
    )
}
const FindProperties = () => {
    return (
        <>
            <div className='my-15 flex flex-col gap-7.5 mx-[10px]'>
                <Title
                    title="Find Properties in"
                    highlightTitle="These Cities"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <div className='flex flex-wrap justify-center gap-7.5 w-full'>
                    <Image src={miami} title={"Miami"} properties={"24"} imageClass="xl:w-[600px] lg:w-[350px] md:w-[300px]" />
                    <Image src={losAngeles} title={"Los Angeles"} properties={"18"} imageClass="xl:w-[1000px] lg:w-[600px] md:w-[500px]" />
                    <Image src={newYork} title={"New York"} properties={"89"} imageClass="xl:w-[1000px] lg:w-[600px] md:w-[400px]" />
                    <Image src={florida} title={"Florida"} properties={"47"} imageClass="xl:w-[600px] lg:w-[350px] md:w-[300px]" />
                </div>
            </div>
            <div className='p-10 flex flex-col gap-7.5 w-full 2px-[200px] px-[135px]'>
                <Title
                    title="Have a property"
                    highlightTitle="to sell?" />
                <div className='flex justify-between border border-[#D9D9D9] rounded-[30px] h-fit'>
                    <div className='relative h-50'>
                        <img src={sellKey} className='relative z-50' />
                        <img src={sellPropertyKey} className='relative z-10 bottom-32.5 left-5' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center text-center items-center'>
                        <p className='text-2xl'>List your property & connect with clients faster!</p>
                        <Button className="text-orange border border-orange font-semibold p-2 py-2.5 max-w-[300px] w-full rounded-lg text-base">
                            Sell your property
                        </Button>
                    </div>
                    <div>
                        <img src={sellProperty} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindProperties
