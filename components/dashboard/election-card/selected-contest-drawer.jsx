/* eslint-disable react/prop-types */
import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const socialMediaButton = ({ type, id }) => {
  const handleClick = () => window.open(id, '_blank', 'noopener,noreferrer');

  if (type === 'Facebook') {
    return (
      <IconButton onClick={handleClick}><FacebookIcon className="text-blue-700" /></IconButton>
    );
  } if (type === 'Twitter') {
    return (
      <IconButton onClick={handleClick}><TwitterIcon className="text-blue-400" /></IconButton>
    );
  } if (type === 'YouTube') {
    return (
      <IconButton onClick={handleClick}><YouTubeIcon className="text-red-500" /></IconButton>
    );
  }
  return null;
};

export default function SelectedContestDrawer({ contest }) {
  const handleClick = (url, action = false) => window.open(url, !action ? '_blank' : undefined, 'noopener,noreferrer');

  return (
    <div className="min-w-1/3 h-full">
      <div className="py-4 bg-gradient-to-r from-gray-100 to-gray-200 shadow-md w-full flex flex-col items-center">
        <span className="text-2xl font-bold">{contest.office}</span>
        <span className="text-lg capitalize italic">{contest.district.name}</span>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
        {contest.candidates.map((candidate) => (
          <div className="w-8/12 flex flex-wrap justify-between items-center" key={candidate.name}>
            <div>
              <span className="text-lg font-bold">{candidate.name}</span>
              <span>, </span>
              <span className="text-lg italic">{candidate.party}</span>
            </div>
            <div className="flex">
              {candidate.candidateUrl && (
                <IconButton onClick={() => handleClick(candidate.candidateUrl)}>
                  <LanguageIcon />
                </IconButton>
              )}
              {candidate.phone && (
                <IconButton onClick={() => handleClick(`tel:${candidate.phone.replace(/\D/g, '')}`, true)}>
                  <PhoneIcon />
                </IconButton>
              )}
              {candidate.email && (
                <IconButton onClick={() => handleClick(`mailto:${candidate.email}`, true)}>
                  <EmailIcon />
                </IconButton>
              )}
              {candidate.channels?.map((channel) => (
                <React.Fragment key={channel.id}>{socialMediaButton(channel)}</React.Fragment>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
