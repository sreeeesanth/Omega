import React from 'react';
import Image from 'next/image';

const ProfileCard = ({altText, imgSrc}) => {
  return (
    <div>
        <Image 
            src={imgSrc}
            alt={altText}
            className="object-cover max-w-[200px] h-[200px] rounded-full max-sm:w-[100px] max-sm:h-[100px]"
        />
    </div>
  )
}

export default ProfileCard