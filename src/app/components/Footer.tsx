// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default function Footer() {
//   return (
//     <div className="w-full relative h-auto lg:bg-white flex flex-col items-center pt-10 sm:px-4">
//       {/* Top Section */}
//       <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:items-start space-y-10 sm:space-y-0 sm:space-x-6">
//         {/* Vision Section */}
//         <div className="flex flex-col items-center sm:items-start sm:flex-[1] lg:mt-[80px] lg:ml-[60px] ">
//           <h1
//             className={`${poppins.className}   text-[32px] font-semibold text-logo`}
//           >
//             MORENT
//           </h1>
//           <p className="w-[292px] h-[108px]   mt-2 text-gray-600 text-sm max-w-[280px] sm:max-w-full text-center sm:text-left">
//             Our vision is to provide convenience and help increase your sales
//             business.
//           </p>
//         </div>

//         {/* Links Section */}
//         <div className="w-full flex flex-wrap justify-evenly sm:justify-between sm:flex-[2] gap-y-10 px-4">
//           {/* About */}
//           <div className="text-center lg:space-x-[400px]  sm:text-left lg:mt-[80px] lg:ml-[60px] ">
//             <h1 className={`${poppins.className} lg:ml-[400px]   text-lg font-semibold mb-3`}>
//               About
//             </h1>
//             <ul className="text-gray-600 space-y-2 text-sm">
//               <li>How it works</li>
//               <li>Featured</li>
//               <li>Partnership</li>
//               <li>Business Relation</li>
//             </ul>
//           </div>
//           {/* Community */}
//           <div className="text-center sm:text-left lg:mt-[80px] lg:ml-[60px]">
//             <h1 className={`${poppins.className} text-lg font-semibold mb-3`}>
//               Community
//             </h1>
//             <ul className="text-gray-600 space-y-2 text-sm">
//               <li>Events</li>
//               <li>Blog</li>
//               <li>Podcast</li>
//               <li>Invite a friend</li>
//             </ul>
//           </div>
//           {/* Social */}
//           <div className=" text-center sm:text-left lg:mt-[px] lg:ml-[60px]">
//             <h1 className={`${poppins.className} text-lg font-semibold mb-3`}>
//               Social
//             </h1>
//             <ul className="text-gray-600  space-y-2 text-sm">
//               <li>Discord</li>
//               <li>Instagram</li>
//               <li>Twitter</li>
//               <li>Facebook</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-gray-400 mt-10"></div>

//       {/* Bottom Section */}
//       <div className="w-full flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:px-6 lg:px-20 py-4">
//         {/* Copy Right */}
//         <div className="text-gray-600 text-sm text-center sm:text-left">
//           © 2024 MORENT. All rights reserved.
//         </div>
//         {/* Policies */}
//         <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-gray-600 text-sm">
//           <span>Privacy & Policy</span>
//           <span>Terms & Conditions</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Poppins } from "next/font/google";
import FooterCard from "./Card"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
    return (
        <div className="flex justify-center p-6 md:p-12">
            <div className="flex w-[82rem] flex-col gap-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="space-y-6">
                    <h1
            className={`${poppins.className}   text-[32px] font-semibold text-logo`}
          >
            MORENT
          </h1>
                        <div className="max-w-sm">Our vision is to provide convenience and help increase your sales business.</div>
                    </div>
                    <div className="lg:w-1/2 flex gap-20 flex-wrap lg:flex-nowrap lg:justify-between">
                        <FooterCard bold={false} input={false} links={['How it works', 'Featured', 'Partnership', 'Business Relation']} title="About" />
                        <FooterCard bold={false} input={false} links={['Events', 'Blogs', 'Podcast', 'Invite a friend']} title="Community" />
                        <FooterCard bold={false} input={false} links={['Discord', 'Instagram', 'Twitter', 'Facebook']} title="Socials" />
                    </div>
                </div>

                <div className="flex justify-between flex-col-reverse md:flex-row pt-6 md:border-t font-bold gap-10 md:gap-0">
                    <div>©2022 MORENT. All rights reserved</div>
                    <div className="flex gap-6 justify-between">
                        <div>Privacy & Policy</div>
                        <div>Terms & Condition</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer