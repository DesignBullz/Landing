// import React from "react";

// const Logo = () => {
//   return (
//     <div className="font-bold flex text-2xl">
//       {/* <p>Psycho</p>
//       <p className='text-[#B75CFF]'>Art</p>
//        */}
//       <img
//         src="https://www.csdgaadi.com//alldata/CreateWebsite/Images/images243738704.png"
//         alt="logo"
//         className="w-20 h-20"
//       />
//     </div>
//   );
// };

// export default Logo;

import React from "react";
import Image from "next/image"; // Import Image from Next.js
import L from "../public/icons/L.jpeg";

const Logo = () => {
  return (
    <div className="font-bold flex text-2xl">
      <Image
        src={L}
        alt="logo"
        width={140} // Set width for the image
        height={80} // Set height for the image
        className="w-20 h-20" // Optional, can still apply custom classes
      />
    </div>
  );
};

export default Logo;
