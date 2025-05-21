import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Card, Tabs, Tab, Button, Select } from '../../components/common';
import BasedOnLocation from './Basedonlocation';

const options = [
  { id: 'Surat', value: 'Surat' },
  { id: 'Ahmedabad', value: 'Ahmedabad' },
  { id: 'Delhi', value: 'Delhi' },
  { id: 'Mumbai', value: 'Mumbai' },
];

const Home = () => {
  const [select, setSelected] = useState(null)
  return (
    <>
      <div className='h-[70vh]'>
        <div className='bg-[url("/assets/home/main-bg.jpg")] bg-cover bg-center h-[550px] w-full relative'>
          <Card cardClassName="bg-white rounded-2xl shadow-[-5px_0px_20px_0px_#00000040] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[97%] md:max-w-[900px] w-full z-40">
            <Tabs defaultActive="Buy"
              tabClassName="flex gap-15 py-[24px] px-[26px] border-b border-[#D9D9D9DD]"
              tabButton="font-normal text-xl text-[#939393] pb-2"
              active="font-semibold !text-[#000000] border-b border-orange border-b-3"
              tabContent="px-[20px]"
            >
              <Tab eventKey="Buy" title="Buy">
                <div className='flex items-center justify-center text-[#767676]'>
                  <div className='w-1/3 pl-4'>
                    <Select
                      onChange={(val) => setSelected(val)}
                      value={select}
                      defaultText="Ahmedabad"
                      options={options}
                      listBoxClass="max-w-fit w-full"
                      listButtonClass="md:!text-xl text-sm"
                    />
                  </div>
                  <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
                  <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                    <div className='flex gap-4 items-center text-base w-full'>
                      <IoSearchOutline size={25} />
                      <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-md focus:outline-0' />
                    </div>
                    <Button className="text-white bg-orange rounded-md text-lg font-normal p-2 px-3 w-full max-w-[114px]">Search</Button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Rent" title="Rent">
                <div className='flex items-center justify-center text-[#767676]'>
                  <div className='w-1/3 pl-4'>
                    <Select
                      onChange={(val) => setSelected(val)}
                      value={select}
                      defaultText="Surat"
                      options={options}
                      listBoxClass="max-w-fit w-full"
                      listButtonClass="md:text-base text-sm"
                    />
                  </div>
                  <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
                  <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                    <div className='flex gap-4 items-center text-base w-full'>
                      <IoSearchOutline size={25} />
                      <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-md' />
                    </div>
                    <Button className="text-white bg-orange rounded-lg text-lg font-normal p-2  w-[114px]">Search</Button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="New Launch" title={<><span>New Launch</span><span className='text-[#E56C06]'>*</span></>}>
                <div className='flex items-center justify-center text-[#767676]'>
                  <div className='w-1/3 pl-4'>
                    <Select
                      onChange={(val) => setSelected(val)}
                      value={select}
                      defaultText="Mumbai"
                      options={options}
                      listBoxClass="max-w-fit w-full"
                      listButtonClass="md:text-base text-sm"
                    />
                  </div>
                  <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
                  <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                    <div className='flex gap-4 items-center text-base w-full'>
                      <IoSearchOutline size={25} />
                      <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-md' />
                    </div>
                    <Button className="text-white bg-orange rounded-lg text-lg font-normal p-2  w-[114px]">Search</Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </div>
      </div>
      <hr className='w-[95%] mx-auto border-b-0 border-[#767676]' />
      <BasedOnLocation />
    </>
  )
}

export default Home
