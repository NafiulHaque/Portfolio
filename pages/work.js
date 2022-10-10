import React from 'react';
import img1 from '../public/image/I will install and setup wordpress with demo theme 1.jpg';
import img2 from '../public/image/I will install and setup wordpress with demo theme.jpg';
import img3 from '../public/image/I will provide psd or xd to html css bootstrap responsive website.jpg';
import img4 from '../public/image/I will install and setup wordpress with demo theme 1.jpg';
import Image from 'next/image';



const work = () => {
    return (
        <div className='max-h-screen px-10 md:px-20 relative top-[100px] '>
            <h2 className='uppercase text-3xl font-bold text-teal-400 tracking-[14px] text-center mb-10'>Market place</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
                <div className='w-72'>
                    <Image src={img1} />
                </div>
                <div className='w-72'>
                    <Image src={img2} />
                </div>
                <div className='w-72'>
                    <Image src={img3} />
                </div>
                <div className='w-72'>
                    <Image src={img2} />
                </div>



            </div>

        </div>
    )
}

export default work