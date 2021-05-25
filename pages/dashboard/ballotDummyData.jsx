export default {
  election: {
    id: '2000',
    name: 'VIP Test Election',
    electionDay: '2021-06-06',
    ocdDivisionId: 'ocd-division/country:us',
  },
  normalizedInput: {
    line1: '715 Blue River Parkway',
    city: 'Silverthorne',
    state: 'CO',
    zip: '',
  },
  contests: [
    {
      type: 'General',
      office: 'US Senate',
      level: [
        'country',
      ],
      roles: [
        'legislatorUpperBody',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Mark Udall',
          party: 'Democratic',
          candidateUrl: 'http://www.markudall.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/udallforcolorado',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/MarkUdall2014',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC_SFwyWOrcCfUoHtRTmWpAw',
            },
          ],
        },
        {
          name: 'Cory Gardner',
          party: 'Republican',
          candidateUrl: 'http://corygardnerforsenate.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/Cory.Gardner.For.Senate',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/CoryGardner',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCaHpoEaT_-5EB0H-TAcWH_w',
            },
          ],
        },
        {
          name: 'Gaylon Kent',
          party: 'Libertarian',
          candidateUrl: 'http://www.thefreedomtrain.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/GaylonForSenate',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/GaylonKent',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCQuPA96c0FQfxDLMNOfoRMg',
            },
          ],
        },
        {
          name: 'Raul Acosta',
          party: 'Unaffiliated',
        },
        {
          name: 'Bill Hammons',
          party: 'Unity Party of Colorado',
          candidateUrl: 'http://www.unityparty.us/hammons-unity-party.htm',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/unitypartybill',
            },
          ],
        },
        {
          name: 'Steve Shogan',
          party: 'Unaffiliated',
          candidateUrl: 'http://shoganforsenate.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/shoganforsenate',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/shoganforsenate',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC4Am8r4McIjuuARTr-oRLYg',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'US House - District 2',
      level: [
        'country',
      ],
      roles: [
        'legislatorLowerBody',
      ],
      district: {
        name: "Colorado's 2nd congressional district",
        scope: 'congressional',
        id: 'ocd-division/country:us/state:co/cd:2',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Jared Polis',
          party: 'Democratic',
          candidateUrl: 'http://www.polisforcongress.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/gojaredgo',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/jaredpolis',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/polisforcongress',
            },
          ],
        },
        {
          name: 'George Leing',
          party: 'Republican',
          candidateUrl: 'http://www.georgeleing.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/georgeleingforcolorado',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/georgeleing',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCNbji6N576Y5BnG8VB-mNaA',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Governor & Lt. Governor',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'headOfGovernment',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Bob Beauprez & Jill Repella',
          party: 'Republican',
          candidateUrl: 'http://www.bobbeauprez.com',
          phone: '303-495-3741',
          email: 'bob@bobbeauprez.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/bobbeauprez',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/bobbeauprez',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/bobbeauprez',
            },
          ],
        },
        {
          name: 'John Hickenlooper & Joe Garcia',
          party: 'Democratic',
          candidateUrl: 'http://www.hickenlooperforcolorado.com',
          phone: '720-508-4204',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/Hick2014',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/Hick2014',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/hickforco',
            },
          ],
        },
        {
          name: 'Harry Hempy & Scott Olson',
          party: 'Green',
          candidateUrl: 'http://hempy4governor.org',
          phone: '303-459-0172',
          email: 'Hempy4Governor@gmail.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/harry.hempy',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/Hempy4Governor',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCcViLVmx2KfEcQBymbg1uyQ',
            },
          ],
        },
        {
          name: 'Matthew Hess & Brandon Young',
          party: 'Libertarian',
          candidateUrl: 'http://www.matthewhess.org',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/MatthewHessLibertarian',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/mxhess',
            },
          ],
        },
        {
          name: 'Mike Dunafon & Robin J. Roberts',
          party: 'Unaffiliated',
          candidateUrl: 'http://dunafonforgovernor.com',
          phone: '(310) 779-6593',
          email: 'pguthrie@dunafonforgovernor.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/MikeDunafon',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/Dunafon4Gov',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCzRO6f5174hMT_Z3nQCpi5g',
            },
          ],
        },
        {
          name: 'Paul Noel Fiorino & Charles George Whitley',
          party: 'Unaffiliated',
          phone: '303-825-7570',
          email: 'fiorinoforcolorado@yahoo.com',
        },
      ],
    },
    {
      type: 'General',
      office: 'Secretary of State',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Amanda Campbell',
          party: 'American Constitution',
          candidateUrl: 'http://www.americanconstitutionparty.com/site_flash/images/CampbellforSOS.pdf',
        },
        {
          name: 'Joe Neguse',
          party: 'Democratic',
          candidateUrl: 'http://www.joeneguseforcolorado.com',
          phone: '(720) 213-8708',
          email: 'info@joeneguseforcolorado.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/180252152142614',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/joeneguse',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCNlrvtDEAutYbddVoDgs6eg',
            },
          ],
        },
        {
          name: 'Wayne W. Williams',
          party: 'Republican',
          candidateUrl: 'http://www.winwithwayne.org',
          phone: '719-271-1228',
          email: 'wayne@winwithwayne.org',
        },
        {
          name: 'Dave Schambach',
          party: 'Libertarian',
          candidateUrl: 'http://www.lp.org/candidates/liberty-candidates-14/david-schambach',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/dschambach',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Attorney General',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Don Quick',
          party: 'Democratic',
          candidateUrl: 'http://www.quickforcolorado.com',
          email: 'info@quickforcolorado.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/140289676146844',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/DQforAG',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC9BkehYRMmh2BcsxbSHaU4A',
            },
          ],
        },
        {
          name: 'Cynthia Coffman',
          party: 'Republican',
          candidateUrl: 'http://www.cynthiacoffmanforag.com',
          phone: '719-422-9424',
          email: 'info@cynthiacoffmanforag.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/cynthiacoffmanforag',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/CynthiaHCoffman',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCvBAry3KQNMH69BwLrvhThQ',
            },
          ],
        },
        {
          name: 'David K. Williams',
          party: 'Libertarian',
          candidateUrl: 'http://williams4co.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/williams4co',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/williams4co',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Treasurer',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Betsy Markey',
          party: 'Democratic',
          candidateUrl: 'http://www.betsymarkey.com',
          phone: '(970) 631-8593',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/BetsyMarkey',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/BetsyMarkey',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/MarkeyForColorado',
            },
          ],
        },
        {
          name: 'Walker Stapleton',
          party: 'Republican',
          candidateUrl: 'http://www.stapletonforcolorado.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/Walker.R.Stapleton',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/walkerstapleton',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/stapletonforcolorado',
            },
          ],
        },
        {
          name: 'David Jurist',
          party: 'Libertarian',
          candidateUrl: 'http://www.lp.org/candidates/liberty-candidates-14/david-jurist',
        },
      ],
    },
    {
      type: 'General',
      office: 'Justice, Colorado Supreme Court',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'highestCourtJudge',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Brian D. Boatright',
          party: 'Nonpartisan',
        },
        {
          name: 'Monica M. Marquez',
          party: 'Nonpartisan',
        },
      ],
    },
    {
      type: 'General',
      office: 'Judge, Court of Appeals',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'judge',
      ],
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Terry Fox',
          party: 'Nonpartisan',
        },
        {
          name: 'Alan M. Loeb',
          party: 'Nonpartisan',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Clerk and Recorder',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Kathleen Neel',
          party: 'Republican',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Surveyor',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Gary Wilkinson',
          party: 'Republican',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Sheriff',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'John G. Minor',
          party: 'Republican',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Treasurer',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Bill Wallace',
          party: 'Democratic',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Coroner',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Regan Wood',
          party: 'Republican',
        },
      ],
    },
    {
      type: 'General',
      office: 'County Assessor',
      level: [
        'administrativeArea2',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'Summit County',
        scope: 'countywide',
        id: 'ocd-division/country:us/state:co/county:summit',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Beverly Breakstone',
          party: 'Democratic',
        },
      ],
    },
    {
      type: 'General',
      office: 'CU Regent - District 2',
      level: [
        'special',
      ],
      roles: [
        'schoolBoard',
      ],
      district: {
        name: "Colorado's 2nd congressional district",
        scope: 'congressional',
        id: 'ocd-division/country:us/state:co/cd:2',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Linda Shoemaker',
          party: 'Democratic',
          candidateUrl: 'http://www.shoemakerforcu.com',
        },
        {
          name: 'Kim McGahey',
          party: 'Republican',
        },
        {
          name: 'Daniel Ong',
          party: 'Libertarian',
          candidateUrl: 'http://www.ongforcuregent.com',
        },
      ],
    },
    {
      type: 'Referendum',
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      referendumTitle: 'Amendment 67',
      referendumUrl: 'http://www.sos.state.co.us/pubs/elections/Initiatives/ballotContactList.html',
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
    },
    {
      type: 'Referendum',
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      referendumTitle: 'Amendment 68',
      referendumUrl: 'http://www.sos.state.co.us/pubs/elections/Initiatives/ballotContactList.html',
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
    },
    {
      type: 'Referendum',
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      referendumTitle: 'Proposition 104',
      referendumUrl: 'http://www.sos.state.co.us/pubs/elections/Initiatives/ballotContactList.html',
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
    },
    {
      type: 'Referendum',
      district: {
        name: 'Colorado',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:co',
      },
      referendumTitle: 'Proposition 105',
      referendumUrl: 'http://www.sos.state.co.us/pubs/elections/Initiatives/ballotContactList.html',
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
    },
  ],
  state: [
    {
      name: 'Colorado',
      electionAdministrationBody: {
        name: 'Secretary of State',
        electionInfoUrl: 'https://www.sos.state.co.us/pubs/elections/',
        electionRegistrationUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml',
        electionRegistrationConfirmationUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
        absenteeVotingInfoUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
        votingLocationFinderUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
        ballotInfoUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
        correspondenceAddress: {
          line1: '1700 Broadway, Suite 200',
          city: 'Denver',
          state: 'Colorado',
          zip: '80290',
        },
      },
      sources: [
        {
          name: '',
          official: false,
        },
      ],
    },
  ],
  kind: 'civicinfo#voterInfoResponse',
};
