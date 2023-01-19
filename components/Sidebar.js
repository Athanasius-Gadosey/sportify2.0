import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, RssIcon, HeartIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
        <div className='space-y-3'>
            <button className='flex items-center space-x-2 hover:text-white'>
                <HomeIcon className='h-5 w-5'/>
                <p>Home</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <MagnifyingGlassIcon className='h-5 w-5'/>
                <p>Search</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <BuildingLibraryIcon className='h-5 w-5'/>
                <p>My Library</p>
            </button>
            <hr className='border-t-[0.2px] border-gray-700'/>

            <button className='flex items-center space-x-2 hover:text-white'>
                <PlusCircleIcon className='h-5 w-5'/>
                <p>Create PlayList</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <HeartIcon className='h-5 w-5'/>
                <p>Like Songs</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <RssIcon className='h-5 w-5'/>
                <p>Your Favorite</p>
            </button>
            <hr className='border-t-[0.2px] border-gray-700'/>

            {/* PlayList Option */}
            <p className='cursor-pointer hover:text-white'>PlayList name ...</p>
        </div>
    </div>
  )
}

export default Sidebar  
