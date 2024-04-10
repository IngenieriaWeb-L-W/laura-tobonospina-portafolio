import React from 'react';

export function Button() {
  return (
    <a href="https://www.instagram.com/moradabiker" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-violet-900 text-white font-bold py-2 px-4 rounded shadow-lg">
  CONTRÁTAME {'->'}
</a>

  );
}


export function Icon({icon}:{icon:string}) {
    return (
        <button className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 22 22">
	            <path fill="#ffb400"  fill-rule="evenodd" d={icon} clip-rule="evenodd"/>
            </svg>
        </button>
    );    
}



