import React from 'react'
import { Card, Title } from '../../components/common'
import { Button, CardBody, ThemeButton } from '../../components/common/Components'
import highDemandProject from "../../assets/Home/highDemandProject.jpg"
import highDemandProjectBg from "../../assets/Home/highDemandProjectBg.jpg"
import HighDemandProjectImage from "../../assets/Home/HighDemandProjectImage.jpg"
import illustration from "../../assets/Home/Illustration.png"
import propertyIcon from "../../assets/Home/propertyIcon.png"
import insurance from "../../assets/Home/insurance.png"
import dollar from "../../assets/Home/dollar.png"
import modulor from "../../assets/Home/modulor.png"
import dollar1 from "../../assets/Home/dollar1.png"
import modulor1 from "../../assets/Home/modulor1.png"
import home1 from "../../assets/Home/home1.png"
import location1 from "../../assets/Home/location1.png"
const HighDemandProject = () => {
    return (
        <>
            <div className='py-20 flex flex-col gap-y-12.5 px-[135px] bg-linear-to-t from-[#FFEEE0] to-[#FFFFFF]'
            // style={{ background: `url(${highDemandProjectBg})` }}
            >
                <Title
                    title="High-demand"
                    highlightTitle="Project"
                    description="Leading project  in high demand" />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        [1, 2, 3, 4, 5, 6]?.map((item) => (
                            <Card cardClassName="w-full border border-[#D9D9D9] rounded-lg overflow-clip" >
                                <CardBody>
                                    <div className='flex'>
                                        <img src={highDemandProject} className='w-[150px] h-[150px]' />
                                        <div className='text-muted flex flex-col justify-center gap-y-2.5 p-2'>
                                            <div>
                                                <p className='font-semibold text-base'>Raghuvir Sheron</p>
                                                <p className='font-light text-[11px] text-muted-transparent'>by Raghuvir Developers </p>
                                            </div>
                                            <div>
                                                <p className='font-normal text-[13px]'>2, 3, 4 BHK Apartments</p>
                                                <p className='font-light text-[11px] text-muted-transparent'>Vesu, Surat</p>
                                            </div>
                                            <p className='font-medium text-base'>Price on Request</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    }
                </div>
            </div>
            <div className="relative px-[135px] py-15 w-full h-[620px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-[0.15]"
                    style={{ backgroundImage: `url(${HighDemandProjectImage})` }}
                ></div>

                <div className="relative z-10 grid grid-cols-3 2xl:gap-18 gap-16">
                    <div className='flex flex-col border border-orange rounded-lg p-5'>
                        <div className='pr-5 flex flex-col justify-start gap-4'>
                            <p className="text-orange font-semibold text-3xl">
                                The new way to find your new home
                            </p>
                            <p className='text-[#757F95] font-normal text-sm opacity-70'>Find your dream place to live in with more than 10k+ properties listed.</p>
                            <ThemeButton className="!max-w-[200px] !justify-center gap-2 !mx-0" title="Discover More " />
                        </div>
                        <img src={illustration} alt="illustration" className='max-w-[324px] w-full' />
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-6'>
                            <div className='border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative'>
                                <img src={propertyIcon} className='absolute rounded-full border-4 border-white p-3 bg-[#E56C061A]' />
                                <img src={insurance} className='absolute -right-[5px] -bottom-[1px]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-orange font-semibold text-2xl'>Property Insurance</p>
                                <p className='text-gray-600 text-base font-normal opacity-70 pr-5'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative'>
                                <img src={modulor} className='absolute rounded-full border-4 border-white p-3 bg-[#E56C061A]' />
                                <img src={dollar} className='absolute -right-[5px] -bottom-[1px]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-orange font-semibold text-2xl'>Lowest Commission</p>
                                <p className='text-gray-600 text-base font-normal opacity-70  pr-5'>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-6'>
                            <div className='border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative'>
                                <img src={dollar1} className='absolute rounded-full border-4 border-white p-3 bg-[#E56C061A]' />
                                <img src={modulor1} className='absolute -right-[5px] -bottom-[1px]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-orange font-semibold text-2xl'>Best Price</p>
                                <p className='text-gray-600 text-base font-normal opacity-70  pr-5'>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='border-2 border-orange rounded-50 w-16 h-16 flex justify-center items-center relative'>
                                <img src={location1} className='absolute rounded-full border-4 border-white p-3 bg-[#E56C061A]' />
                                <img src={home1} className='absolute -right-[5px] -bottom-[1px]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-orange font-semibold text-2xl'>Overall Control</p>
                                <p className='text-gray-600 text-base font-normal opacity-70  pr-5'>Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HighDemandProject
