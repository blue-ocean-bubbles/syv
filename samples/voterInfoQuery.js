export default {
  election: {
    id: '2000',
    name: 'VIP Test Election',
    electionDay: '2021-06-06',
    ocdDivisionId: 'ocd-division/country:us',
  },
  normalizedInput: {
    line1: '7700 Juan Way',
    city: 'Fair Oaks',
    state: 'CA',
    zip: '95628',
  },
  pollingLocations: [
    {
      address: {
        line1: '7777 Sunset Ave ',
        city: 'Fair Oaks',
        state: 'CA',
        zip: '95628',
      },
      notes: '',
      pollingHours: '',
      sources: [
        {
          name: 'Voting Information Project',
          official: true,
        },
      ],
    },
  ],
  contests: [
    {
      type: 'General',
      office: 'US House - District 7',
      level: [
        'country',
      ],
      roles: [
        'legislatorLowerBody',
      ],
      district: {
        name: "California's 7th congressional district",
        scope: 'congressional',
        id: 'ocd-division/country:us/state:ca/cd:7',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Ami Bera',
          party: 'Democratic',
          candidateUrl: 'http://www.beraforcongress.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/BeraForCongress',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/beraforcongress',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCQ8OY8ok21csr_BOIC-e-Lw',
            },
          ],
        },
        {
          name: 'Doug Ose',
          party: 'Republican',
          candidateUrl: 'http://www.dougose.com/home',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/dougose2014',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/DougOse',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCblwhrzxYvqY1GdHvb54Cpw',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Governor',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'headOfGovernment',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Edmund G. "Jerry" Brown',
          party: 'Democratic',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/jerrybrown',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/JerryBrownGov',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/JerryBrown2010',
            },
          ],
        },
        {
          name: 'Neel Kashkari',
          party: 'Republican',
          candidateUrl: 'http://www.neelkashkari.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/neelkashkari',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/neelkashkari',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCGhIiUj05N8mlUNeiKbYfsA',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Lieutenant Governor',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'deputyHeadOfGovernment',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Ron Nehring',
          party: 'Republican',
          candidateUrl: 'http://www.ronnehring.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/RonNehringCA',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/RonNehring',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCFGwCF7iZWLP-j0dFWORvGQ',
            },
          ],
        },
        {
          name: 'Gavin Newsom',
          party: 'Democratic',
          candidateUrl: 'http://www.gavinnewsom.com/',
          phone: '(415) 963-9240',
          email: 'gavin@gavinnewsom.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/GavinNewsom',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/GavinNewsom',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/NewsomforCalifornia',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'John Chiang',
          party: 'Democratic',
          candidateUrl: 'http://www.electjohnchiang.com/',
          email: 'ElectJohnChiang@gmail.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/22930503694',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/johnchiang4ca',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/JohnChiang4CA',
            },
          ],
        },
        {
          name: 'Greg Conlon',
          party: 'Republican',
          candidateUrl: 'http://www.gregconlon.com/',
          phone: '916-850-2782',
          email: 'gregconlonforstatetreasurer@yahoo.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/gregconlonforstatetreasurer',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/GregConlon',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UClllihMKVeAvNVsdYmo-frg',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Ronald Gold',
          party: 'Republican',
          candidateUrl: 'http://www.rongold.org/',
          channels: [
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC1Od8iX56vySEzXQJ3O8SMw',
            },
          ],
        },
        {
          name: 'Kamala D. Harris',
          party: 'Democratic',
          candidateUrl: 'http://kamalaharris.org/',
          phone: '(415) 364-8784',
          email: 'info@kamalaharris.org',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/KamalaHarris',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/KamalaHarris',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/kamalaharrisdotorg',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Superintendent of Public Instruction',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Tom Torlakson',
          party: 'Nonpartisan',
          candidateUrl: 'http://www.tomtorlakson.com/',
          phone: '925-386-6774',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/torlakson',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/TomTorlakson',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/tomtorlakson',
            },
          ],
        },
        {
          name: 'Marshall Tuck',
          party: 'Nonpartisan',
          candidateUrl: 'http://www.marshalltuck.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/TuckforCalifornia',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/MarshallTuck',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UCAd4z6Ea8kBxxI-O0f1SbiA',
            },
          ],
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Alex Padilla',
          party: 'Democratic',
          candidateUrl: 'http://www.padilla4sofs.com/',
          phone: '818-253-9140',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/senator.padilla',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/SenAlexPadilla',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC8iDXwFo62EvFaNIrQln0vA',
            },
          ],
        },
        {
          name: 'Pete Peterson',
          party: 'Republican',
          candidateUrl: 'http://www.petesos.com/',
          phone: '323-450-7536',
          email: 'campaign@petesos.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/PeteSOS',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/Pete4SOS',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Controller',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Ashley Swearengin',
          party: 'Republican',
          candidateUrl: 'http://www.ashleyforca.com/',
          phone: '(559) 565-5066',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/ashleyswearengin',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/Ashley4CA',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/channel/UC9Tc_GLpw5X7t_gg-Q51eKw',
            },
          ],
        },
        {
          name: 'Betty T. Yee',
          party: 'Democratic',
          candidateUrl: 'http://bettyyee.com/',
          phone: '(415) 692-3556',
          email: 'info@bettyyee.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/BettyYee2014',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/bettyyee2014',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Insurance Commissioner',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'governmentOfficer',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Ted Gaines',
          party: 'Republican',
          candidateUrl: 'http://www.tedgaines.com/',
          phone: '916-221-5770',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/ted.gaines',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/TedGaines',
            },
            {
              type: 'YouTube',
              id: 'https://www.youtube.com/user/GainesForIC2014',
            },
          ],
        },
        {
          name: 'Dave Jones',
          party: 'Democratic',
          candidateUrl: 'http://www.davejones2014.com/',
          phone: '(916) 349-4236',
          email: 'TeamDaveJones@gmail.com',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/239029093423',
            },
          ],
        },
      ],
    },
    {
      type: 'General',
      office: 'Supreme Court Associate Justice (Retention)',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'highestCourtJudge',
      ],
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Goodwin Liu',
          party: 'Nonpartisan',
        },
        {
          name: 'Kathryn Mickle Werdegar',
          party: 'Nonpartisan',
        },
        {
          name: 'Mariano-Florentino Cuellar',
          party: 'Nonpartisan',
        },
      ],
    },
    {
      type: 'General',
      office: 'State Assembly -  District 6',
      level: [
        'administrativeArea1',
      ],
      roles: [
        'legislatorLowerBody',
      ],
      district: {
        name: 'California Assembly district 6',
        scope: 'stateLower',
        id: 'ocd-division/country:us/state:ca/sldl:6',
      },
      sources: [
        {
          name: 'Ballot Information Project',
          official: false,
        },
      ],
      candidates: [
        {
          name: 'Brian Caples',
          party: 'Democratic',
          candidateUrl: 'http://www.briancaplesassembly.com/',
        },
        {
          name: 'Beth B. Gaines',
          party: 'Republican',
          candidateUrl: 'http://www.bethgaines.com/',
          channels: [
            {
              type: 'Facebook',
              id: 'https://www.facebook.com/gaines.beth',
            },
            {
              type: 'Twitter',
              id: 'https://twitter.com/bethgaines_',
            },
          ],
        },
      ],
    },
    {
      type: 'Referendum',
      district: {
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 1',
      referendumSubtitle: 'Water Bond. Funding for Water Quality, Supply, Treatment, and Storage Projects.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-1-title-summary-analysis-v2.pdf',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 2',
      referendumSubtitle: 'State Budget. Budget Stabilization Account. Legislative Constitutional Amendment.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-2-title-summary-analysis.pdf',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 45',
      referendumSubtitle: 'Healthcare Insurance. Rate Changes. Initiative Statute.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-45-title-summary-analysis.pdf',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 46',
      referendumSubtitle: 'Drug and Alcohol Testing of Doctors. Medical Negligence Lawsuits. Initiative Statute.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-46-title-summary-analysis.pdf',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 47',
      referendumSubtitle: 'Criminal Sentences. Misdemeanor Penalties. Initiative Statute.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-47-title-summary-analysis.pdf',
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
        name: 'California',
        scope: 'statewide',
        id: 'ocd-division/country:us/state:ca',
      },
      referendumTitle: 'Proposition 48',
      referendumSubtitle: 'Indian Gaming Compacts. Referendum.',
      referendumUrl: 'http://vig.cdn.sos.ca.gov/2014/general/en/pdf/proposition-48-title-summary-analysis.pdf',
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
      name: 'California',
      electionAdministrationBody: {
        name: 'Secretary of State',
        electionInfoUrl: 'http://www.sos.ca.gov/elections/',
        electionRegistrationUrl: 'https://registertovote.ca.gov/?t=s',
        electionRegistrationConfirmationUrl: 'https://voterstatus.sos.ca.gov',
        absenteeVotingInfoUrl: 'https://elections.cdn.sos.ca.gov/vote-by-mail/pdf/vote-by-mail-application.pdf',
        votingLocationFinderUrl: 'https://voterstatus.sos.ca.gov',
        ballotInfoUrl: 'https://www.sos.ca.gov/elections/ballot-status/wheres-my-ballot/',
        correspondenceAddress: {
          line1: '1500 11th Street, 5th Floor',
          city: 'Sacramento',
          state: 'California',
          zip: '95814',
        },
      },
      local_jurisdiction: {
        name: 'Sacramento County',
        electionAdministrationBody: {
          electionInfoUrl: 'http://www.elections.saccounty.net/pages/default.aspx',
          physicalAddress: {
            line1: '7000 65TH ST STE A',
            city: 'SACRAMENTO',
            state: 'CA',
            zip: '95823',
          },
          electionOfficials: [
            {
              officePhoneNumber: '(916) 875-6451',
              emailAddress: 'voterinfo@saccounty.net',
            },
          ],
        },
        sources: [
          {
            name: 'DemocracyWorks',
            official: false,
          },
        ],
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
