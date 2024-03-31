export function Button(){
    return <button
    className='base-color w-[154px] h-[51px] rounded-lg text-black font-medium shadow-lg'> HIRE ME {'->'} </button>;
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



