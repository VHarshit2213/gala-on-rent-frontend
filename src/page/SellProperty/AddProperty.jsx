import React from 'react'

const AddProperty = () => {
  const productDetails = [
    {
    title:"Basic Details"
    }
  ]
  return (
    <div className='pt-15'>
      <div className='flex justify-center border border-gray rounded-lg max-w-250 w-full'>
          <div className='bg-orange-transparent p-3 px-4 flex justify-around w-full '>
              {
                ["Basic Details", "Property Details", "Price Details", "Amenities"]?.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 cursor-pointer transition-colors rounded-lg'>
                    <span className='text-base'>{item}</span>
                  </div>
                ))
              }
          </div>
      </div>
    </div>
  )
}

export default AddProperty;