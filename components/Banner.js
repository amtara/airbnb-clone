import React from 'react'
import Image from 'next/image'
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] md:h-[800px] xl ">
            <Image src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
            
            />
               <div className="absolute top-1/2 w-full text-center" >

                <p className="font-extrabold text-4xl text-black hover:scale-90 transform transition duration-200 ">Not sure where you go</p>
               <button className="text-purple-500 bg-white py-4 px-10 shadow-md rounded-full mt-10 hover:shadow-xl hover:bg-purple-300 hover:text-white"> im button</button>
               </div>
        </div>
    )
}

export default Banner
