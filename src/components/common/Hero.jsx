import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='w-full h-[40vh] flex flex-col items-center justify-center gap-6 text-center px-4'>
        <div className='text-4xl font-medium'>The Most Realistis voice AI Platform</div>
       <div className=''>
         <p>Ai voice model and products powering millions of developers, creators and enterprises. From</p>
        <p>low-latenct converrsational agents to the leeading AI voice generators for voiceovers and audiobooks</p>
       </div>
        <div className='flex items-center gap-4'>
            <Button className={cn('rounded-2xl font-bold cursor-pointer')}>SIGN UP</Button>
            <Button variant={'outline'} className={cn('rounded-2xl font-bold cursor-pointer')}>CONTACT SALES</Button>
        </div>
    </div>
  )
}

export default Hero