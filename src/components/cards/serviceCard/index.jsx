import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ServiceCard({ service }) {
    const { icon, serviceType, serviceDescription, moreDescriptions = [] } = service;
  
    return (
      <div className="serviceCard w-full rounded-2xl shadow-md p-6 md:p-8 bg-[#1A1A1A] text-[#B3B3B2] flex flex-col gap-4 hover:scale-101 transition-transform duration-300 ease-in-out">
        
        <div className="flex items-center gap-4 mb-2 sm:mb-4">
          <FontAwesomeIcon icon={icon} className="text-[#FF6600] text-xl sm:text-2xl md:text-3xl" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{serviceType}</h2>
        </div>
  
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#B3B3B2]">
          {serviceDescription}
        </p>
  
        <ul className="list-none space-y-2">
          {moreDescriptions.map((desc, index) => (
            <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-[#B3B3B2]">
              <i className="fa-solid fa-circle-check text-[#FF6600] mt-1" />
              {desc}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ServiceCard;