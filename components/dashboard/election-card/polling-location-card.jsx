/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import cdcl from '../../../utils/conditional-classes';

import { UserContext } from '../../../state/user-context';

const informationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const mapIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
  </svg>
);

export default function PollingLocationCard({ pollingLocation }) {
  const userContext = useContext(UserContext);

  const getDisplayAddress = () => `${pollingLocation.address.line1}, ${pollingLocation.address.city}, ${pollingLocation.address.state}, ${pollingLocation.address.zip}`;

  const handleGetAddress = () => {
    const apiUrl = `https://www.google.com/maps/dir/?api=1&origin=${userContext.address}&destination=${getDisplayAddress()}`;
    window.open(apiUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group flex-shrink-0 self-stretch shadow-md rounded-md pt-4 hover:shadow-lg transition flex flex-col">
      <div className="p-2 flex flex-col">
        <div className="p-2 text-center">
          {getDisplayAddress()}
        </div>
        <button type="button" className="btn btn-blue align-end flex flex-row items-center justify-center gap-4 flex-grow-0" onClick={handleGetAddress}>
          Get Directions
          {mapIcon}
        </button>
      </div>

      <div className="mt-auto px-4 py-2 bg-gray-200 rounded-b-md group-hover:bg-gray-600 group-hover:text-white flex flex-row items-center gap-2 justify-center">
        {informationIcon}
        {`Source: ${pollingLocation.sources[0].name}, ${cdcl(pollingLocation.sources[0].official, 'Official', 'Unofficial')}`}
      </div>
    </div>
  );
}
