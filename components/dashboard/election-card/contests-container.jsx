/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GeneralContestCard from './general-contest-card';
import ReferendumContestCard from './referendum-contest-card';
import PollingLocationCard from './polling-location-card';

const ContestsContainer = ({ election, onCardClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {election.contests.find((x) => x.type === 'General') && (
      <Accordion expanded={expanded === 'general'} onChange={handleChange('general')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span>General Elections</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-wrap gap-4">
          {election.contests.map((contest) => contest.type === 'General' && <GeneralContestCard contest={contest} key={contest.office} onClick={() => onCardClick(contest)} />)}
        </AccordionDetails>
      </Accordion>
      )}
      {election.contests.find((x) => x.type === 'Referendum') && (
      <Accordion expanded={expanded === 'referendums'} onChange={handleChange('referendums')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span>Referendums</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-wrap gap-4">
          {election.contests.map((contest) => contest.type === 'Referendum' && <ReferendumContestCard contest={contest} key={contest.referendumTitle} onClick={() => onCardClick(contest)} />)}
        </AccordionDetails>
      </Accordion>
      )}
      {election.pollingLocations && (
      <Accordion expanded={expanded === 'polling-locations'} onChange={handleChange('polling-locations')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="">Polling Locations</div>
        </AccordionSummary>
        <AccordionDetails className="flex flex-wrap gap-4">
          {election.pollingLocations.map((pollingLocation) => (
            <PollingLocationCard
              pollingLocation={pollingLocation}
              key={pollingLocation.address.line1}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      )}
    </div>
  );
};

export default ContestsContainer;
