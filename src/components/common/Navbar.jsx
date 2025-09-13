import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-around px-4 py-5'>
        <Image src={'/icon.png'} alt='logo' width={100} height={40} className='cursor-pointer'/>
        <div className='flex items-center gap-4 text-xs'>
            <div className='flex items-end cursor-pointer justify-center'>
                <span className='font-semibold text-sm'>Creative Platform</span>
                <ChevronDown size={15}/>
            </div>
<div className='flex items-end cursor-pointer justify-center'>
                <span className='font-semibold text-sm'>Agents Platform</span>
                <ChevronDown size={15}/>
            </div>
<div className='flex items-end cursor-pointer justify-center'>
                <span className='font-semibold text-sm'>Developers</span>
                <ChevronDown size={15}/>
            </div>
<div className='flex items-end cursor-pointer justify-center'>
                <span className='font-semibold text-sm'>Resources</span>
                <ChevronDown size={15}/>
            </div>
            <div className='font-semibold text-sm'>Enterprise</div>
            <div className='font-semibold text-sm'>Pricing</div>


        </div>
        <div className='flex items-center gap-4'>
            <Button variant={'ghost'} className={'text-sm'}>Login</Button>
            <Button className={cn('border rounded-xl text-xs')}>Sign Up</Button>
        </div>
    </div>
  )
}

export default Navbar