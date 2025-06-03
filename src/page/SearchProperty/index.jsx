import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Select, ThemeButton } from '../../components/common'
import { IoIosInformationCircle } from "react-icons/io";
import expertProfill from "../../assets/Property/expertProfill.svg"
import container from "../../assets/Property/Container.png"
import maskGroup from "../../assets/Home/maskGroup.png"
import ad_banner from "../../assets/Property/ad_banner.png"
import ad_Group from "../../assets/Property/ad_Group_.png"
import SimilarPropertiesShowroom from '../../components/SimilarPropertiesShowroom';

const options = [
    { id: 'Surat', value: 'Surat' },
    { id: 'Ahmedabad', value: 'Ahmedabad' },
    { id: 'Delhi', value: 'Delhi' },
    { id: 'Mumbai', value: 'Mumbai' },
];

const SearchProperty = () => {
    const [select, setSelected] = useState(null)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40); // Adjust 40 as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className='my-40'>
                <div className={`bg-white shadow-[0px_1px_8px_0px_#0000001A] w-full fixed flex flex-wrap whitespace-nowrap gap-2 ${isSticky ? "top-0" : "top-20 mt-6 "} py-3 px-10 z-30`}>
                    <Select
                        onChange={(val) => setSelected(val)}
                        value={select}
                        defaultText="Property Type"
                        options={options}
                        textClass="!text-sm !font-medium !text-[#000000]"
                        className="max-w-fit border border-[#CCCCCC] rounded-3xl"
                        listBoxClass="!bg-transparent"
                        listButtonClass="!bg-transparent"
                    />
                    <Select
                        onChange={(val) => setSelected(val)}
                        value={select}
                        defaultText="Construction Status"
                        options={options}
                        textClass="!text-sm !font-medium !text-[#000000] w-full truncate"
                        className="max-w-[168px] border border-[#CCCCCC] rounded-3xl"
                        listBoxClass="!bg-transparent"
                        listButtonClass="!bg-transparent"
                    />
                    <div className='text-sm font-medium text-[#000000] max-w-fit px-4 w-full flex gap-1 justify-center items-center border border-[#CCCCCC] rounded-3xl'>Verified <IoIosInformationCircle className="text-[#999999]" size={18} /></div>
                    <div className='text-sm font-medium text-[#000000] max-w-fit px-4 w-full flex gap-1 items-center justify-center border border-[#CCCCCC] rounded-3xl'>
                        Expert Pro Agents
                        <img src={expertProfill} alt="expertProfill" />
                    </div>

                    <Select
                        onChange={(val) => setSelected(val)}
                        value={select}
                        defaultText="More Filters"
                        options={options}
                        textClass="!text-sm !font-medium !text-[#000000]"
                        className="max-w-fit border border-[#CCCCCC] rounded-3xl"
                        listBoxClass="!bg-transparent"
                        listButtonClass="!bg-transparent"
                    />
                </div>
            </div>
            <div className='w-full flex gap-5 px-20'>
                <div className='md:w-[60%] w-full flex-1'>
                    <div className='flex flex-col gap-8 mb-6'>
                        <div className='flex justify-between text-[#747474] font-normal text-sm'>
                            <p>Home <span className='text-[#000000]'>/</span> Surat <span className='text-[#000000]'>/</span> Flats for Sale in Vesu</p>
                            <p>Last Updated: Mar 5, 2025</p>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-normal text-[#747474]'>Showing 1 - 30 of 427</p>
                                <p className='text-lg font-medium text-[#222222]'>Flats for Sale in Vesu, Surat</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='text-sm font-medium'>Sort by:</span>
                                <Select
                                    onChange={(val) => setSelected(val)}
                                    value={select}
                                    defaultText="Relevance"
                                    options={options}
                                    textClass="!text-sm !font-medium !text-[#000000]"
                                    className="max-w-fit border border-[#CCCCCC] rounded-3xl"
                                    listBoxClass="!bg-transparent"
                                    listButtonClass="!bg-transparent"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            {
                                [1, 2, 3, 4, 5]?.map((item, index) => (
                                    <Card cardClassName={"bg-white border-2 border-orange shadow-[0px_0px_20px_0px_#0000000f] rounded-2xl p-4"}>
                                        <div className='flex gap-4'>
                                            <img src={container} alt="container" className='w-[200px] h-[150px] rounded-lg object-cover' />
                                            <div className='flex flex-col gap-2 w-full h-auto'>
                                                <div className='flex justify-between items-center'>
                                                    <h3 className='text-lg font-bold text-muted'>Palm Harbor</h3>
                                                    <p><span className='text-orange font-extrabold text-xl'>$2,095</span> <span className='text-muted font-medium text-base opacity-50'>/month</span></p>
                                                </div>
                                                <p className='text-base font-medium text-muted opacity-50'>2699 Green Valley, Highland Lake, FL</p>
                                                <ul className='flex flex-wrap text-muted opacity-50 text-base font-medium gap-x-7 ml-5'>
                                                    <li className='list-disc'>Avg. Price: $11.5 K/sq.ft</li>
                                                    <li className='list-disc'>Sizes: 1718 - 3520 sq.ft.</li>
                                                    <li className='list-disc'>Under Construction</li>
                                                    <li className='list-disc'>Possession: Mar, 2026</li>
                                                </ul>
                                                <span className="border-b-2 border-gray py-1" />
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div className='w-12 h-12 rounded-lg bg-[#1DD38F] text-white flex justify-center items-center'>Sh</div>
                                                        <p className='flex flex-col gap-1'><span className='text-[#222222] font-normal text-sm'>Shreem Hari Infra Llp</span><span className='text-muted-transparent text-xs font-normal'>Owner</span></p>
                                                    </div>
                                                    <ThemeButton title="Rent Now" className="!ml-auto !mr-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            }

                        </div>
                        <SimilarPropertiesShowroom data={[1, 2, 3, 4, 5, 6, 7, 8]} slidesToShow={4} />
                    </div>
                </div>
                <div className='lg:w-[40%] w-0'>
                    <div className='bg-orange-transparent lg:flex hidden flex-col gap-y-6 rounded-2xl pt-2 sticky top-5 right-0 z-50'>
                        <Card cardClassName={'bg-white w-full flex flex-col gap-y-7 rounded-2xl p-4 shadow-[0px_1px_2px_0px_#0000001A]'}>
                            <CardBody bodyClassName={"flex xl:flex-nowrap flex-wrap justify-between gap-2"}>
                                <Card cardClassName={'border border-orange rounded-xl bg-white max-w-[200px] w-full'}>
                                    <CardBody>
                                        <div className='flex gap-2'>
                                            <div className='relative'>
                                                <img src={maskGroup} alt="maskGroup" className='w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover' />
                                                <div className='text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1'>Ad</div>
                                            </div>
                                            <div className='text-xs font-light flex flex-col justify-center'>
                                                <p>Price on Request</p>
                                                <p>Raghuvir Spalex</p>
                                                <p className='truncate text-[#9F9F9F] w-25'>by Raghuvir Devel defhy</p>
                                                <p className='truncate text-[#9F9F9F]'>Vesu, Surat</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card cardClassName={'border border-orange rounded-xl bg-white max-w-[200px] w-full'}>
                                    <CardBody>
                                        <div className='flex gap-2'>
                                            <div className='relative'>
                                                <img src={maskGroup} alt="maskGroup" className='w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover' />
                                                <div className='text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1'>Ad</div>
                                            </div>
                                            <div className='text-xs font-light flex flex-col justify-center'>
                                                <p>Price on Request</p>
                                                <p>Raghuvir Spalex</p>
                                                <p className='truncate text-[#9F9F9F]  w-25'>by Raghuvir Devel defhy</p>
                                                <p className='truncate text-[#9F9F9F]'>Vesu, Surat</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card cardClassName={'border border-orange rounded-xl bg-white max-w-[200px] w-full'}>
                                    <CardBody>
                                        <div className='flex gap-2'>
                                            <div className='relative'>
                                                <img src={maskGroup} alt="maskGroup" className='w-18 h-22 rounded-tl-xl rounded-bl-xl object-cover' />
                                                <div className='text-white text-[10px] font-normal bg-[#0000007A] rounded-50 w-6 h-4 flex justify-center items-center absolute top-2 right-1'>Ad</div>
                                            </div>
                                            <div className='text-xs font-light flex flex-col justify-center'>
                                                <p>Price on Request</p>
                                                <p>Raghuvir Spalex</p>
                                                <p className='truncate text-[#9F9F9F]  w-25'>by Raghuvir Devel defhy</p>
                                                <p className='truncate text-[#9F9F9F]'>Vesu, Surat</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardBody>
                            <CardFooter>
                                <img src={ad_banner} alt="ad_banner" className='w-full object-cover' />
                            </CardFooter>
                        </Card>
                        <Card cardClassName={"bg-white w-full p-3 pb-0 rounded-xl shadow-[0px_1px_2px_0px_#0000001A]"}>
                            <CardBody bodyClassName={'flex justify-between items-center gap-4'}>
                                <div className='flex flex-col gap-1'>
                                <p className='text-[13px] font-light'>Are you a commercials space owner looking to rent/sell?</p>
                                <a href='#' className='text-[12px] font-light text-[#5E23DC] underline underline-offset-1'>Post your property for FREE</a>
                                </div>
                                <img src={ad_Group} alt="ad_Group" />
                            </CardBody>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchProperty
