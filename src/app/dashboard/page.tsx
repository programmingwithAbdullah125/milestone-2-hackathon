import React from "react"
import Image from "next/image"
import rating from "@/app/public/images/rating.png"
 export default function Dashboard(){
    return(
        <>
        <div className="flex pl-2"> {/* Main container: Flex layout for TYPE, CATEGORY, and Image */}

{/* First Section: TYPE and CATEGORY */}
<div className="pl-2 border-2 border-white shadow-md p-4 w-72"> {/* Left section with border and padding */}
  <h1 className="space-x-5 text-sm text-gray-600">TYPE</h1>

  {/* Options for TYPE */}
  {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type, idx) => (
    <div key={idx} className="flex mt-3 pl-2">
      <label className="flex">
        <input type="checkbox" />
        <p className="pl-1">{type}</p>
      </label>
      <p className="text-gray-500 text-sm pl-1">({idx * 2 + 10})</p>
</div>
  ))}

  {/* CATEGORY Section */}
  <h1 className="space-x-5 text-sm text-gray-600 mt-5">CATEGORY</h1>

  {/* Options for CATEGORY */}
  {['2 Person', '4 Person', '6 Person', '8 or More'].map((category, idx) => (
    <div key={idx} className="flex mt-3 pl-2">
      <label className="flex">
        <input type="checkbox" />
        <p className="pl-1">{category}</p>
      </label>
      <p className="text-gray-500 text-sm pl-1">({idx * 2 + 10})</p>
    </div>
  ))}

  {/* PRICE Range */}
  <div className="mt-5">
    <h1 className="space-x-5 text-sm text-gray-600 mt-5">PRICE</h1>
    <Image src="/priceRanger.png" alt="price ranger" width={180} height={20} className="mt-5 pl-1" />
    <p className="text-gray-500 font-semibold mt-1">Max. $100.00</p>
  </div>
</div>
{/* Second Section: Images */}
<div className="pl-10">
       {/* Main car image */}
     
  <div className="flex flex-col">
    <div>
    <div className="relative rounded-[5%] w-[300px] ">
      <Image src="/View.png" alt="view car" width={350} height={300} className="mt-5" />
    </div>

    {/* Smaller car images */}
    <div className="flex space-x-4 mt-2">
      {['car.png', 'carSeat.png', 'underCar.png'].map((img, idx) => (
        <div key={idx} className="rounded-[5%] w-[90px]">
          <Image src={`/${img}`} alt="small car image" width={100} height={100} />
        </div> ))}
        </div>

    {/* Rating Section */}  
 </div>
  </div>
{/* review page */}
{/* User Reviews Section - Directly Below 2nd and 3rd images */}
<div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 space-y-8">
  <h1 className="text-xl font-semibold text-gray-800">User Reviews</h1>
  {/* Review 1 */}
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-gray-300 rounded-full">
      <Image src="/reviewer1.png" alt="Reviewer" width={48} height={48} className="rounded-full" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <h3 className="font-medium text-gray-900">John Doe</h3>
        <div className="text-yellow-500">★★★★☆</div>
      </div>
      <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna at magna varius, et fermentum elit congue.</p>
    </div>
  </div>

  {/* Review 2 */}
  <div className=" flex items-start space-x-4">
    <div className="w-12 h-12 bg-gray-300 rounded-full">
      <Image src="/reviewer2.png" alt="reviewer2" width={48} height={48} className="rounded-full" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <h3 className="font-medium text-gray-900">Jane Smith</h3>
        <div className="text-yellow-500">★★★☆☆</div>
      </div>
      <p className="text-gray-600 text-sm">Excellent product! The features were just as described, and I was able to set it up easily. Highly recommend it for anyone looking for quality.</p>
    </div>
  {/* review closed*/}
  </div>
</div>
</div>
</div>  {/* main-div*/}
        </>
          )
          }
