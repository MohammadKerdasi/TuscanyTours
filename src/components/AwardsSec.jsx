import { faAward, faDollarSign, faMap, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const AwardsSec = () => {

    const theData = [
        {
            icon : faMap,
            desc : 'Complete Packages For All Your Wishes',
        },
        {
            icon : faAward,
            desc : 'Over 30 Years Of Experience',
        },
        {
            icon : faUserTie,
            desc : 'Expert Guides For You',
        },
        {
            icon : faDollarSign,
            desc : 'Guaranteed fun at the best price!',
        },
    ]

  return (
    <>
    <div className='w-full bg-multibackground bg-cover py-15'>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[80px] mx-auto lg:w-[72.03%] w-[90%] py-[80px] ]'>
            {theData.map((item,index) => (
                <div className='rounded-[24px] gap-4 flex  items-center flex-col p-[30px] backdrop-blur-sm bg-white/20 ' key={index}>
                    <FontAwesomeIcon size="3x" className='text-orangeText' icon={item.icon} />
                    <p className='text-[20px] text-center font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default AwardsSec