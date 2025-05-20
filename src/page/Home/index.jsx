import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Card, Tabs, Tab, Button, Select } from '../../components/common';

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

const Home = () => {
  const [select, setSelected] = useState(options[0])
  return (
    <div className='bg-[url("/assets/home/main-bg.jpg")] bg-cover bg-center h-[550px] w-full relative'>
      <Card cardClassName="bg-white rounded-2xl shadow-[-5px_0px_20px_0px_#00000040] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[93%] md:max-w-[900px] w-full z-40">
        <Tabs defaultActive="Buy"
          tabClassName="flex gap-5 py-[24px] px-[26px] border-b border-[#D9D9D9DD]"
          tabButton="font-normal text-xl text-[#939393] pb-2"
          active="font-semibold !text-[#000000] border-b border-[#E56C06] border-b-3"
          tabContent="px-[20px]"
        >
          <Tab eventKey="Buy" title="Buy">
            <div className='flex items-center justify-center text-[#767676]'>
               <select name="cars" id="cars" className='py-[30px] w-[30%]'>
                <option value="mercedes">Mercedes</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="audi">Audi</option>
              </select>
              <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
              <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                <div className='flex gap-4 items-center text-base w-full'>
                  <IoSearchOutline size={25} />
                  <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-xl focus:outline-0' />
                </div>
                <Button className="text-white bg-[#E56C06] rounded-lg text-lg font-normal p-2  w-[114px]">Search</Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Rent" title="Rent">
            <div className='flex items-center justify-center text-[#767676]'>
               <Select
                onChange={(e) => setSelected(e.target.value)}
                value={select}
                options={options}
              />
              <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
              <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                <div className='flex gap-4 items-center text-base w-full'>
                  <IoSearchOutline size={25} />
                  <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-xl' />
                </div>
                <Button className="text-white bg-[#E56C06] rounded-lg text-lg font-normal p-2  w-[114px]">Search</Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="New Launch" title={<><span>New Launch</span><span className='text-[#E56C06]'>*</span></>}>
            <div className='flex items-center justify-center text-[#767676]'>
              <select name="cars" id="cars" className='py-[30px] w-[30%]'>
                <option value="saab">Saab</option>
                <option value="volvo">Volvo</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div className='border-r border-[#D9D9D9DD] h-20 mx-10'></div>
              <div className='flex gap-4 items-center justify-between py-[30px] w-full'>
                <div className='flex gap-4 items-center text-base w-full'>
                  <IoSearchOutline size={25} />
                  <input type='text' placeholder='Search for locality, landmark, project, or builder' className='max-w-[420px] w-full text-xl' />
                </div>
                <Button className="text-white bg-[#E56C06] rounded-lg text-lg font-normal p-2  w-[114px]">Search</Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  )
}

export default Home
