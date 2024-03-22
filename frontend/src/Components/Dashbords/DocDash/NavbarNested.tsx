import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../DocDash/UserButton';
import { LinksGroup } from '../DocDash/NavbarLinksGroup';
import DashLogo from '../DocDash/DashLogo'
import { IconPill } from '@tabler/icons-react';
import classes from '../DocDash/NavbarNested.module.css';

const mockdata = [
  { label: 'Patients', icon: IconGauge,links:[{ label: 'AllPatients',link:''}]},
  {
    label: 'Prescriptions',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'AllPrescriptions',link:''},
    ],
  },
  { label: 'SubstituteDrug', icon: IconPill ,links:[{label:'SuggestDrug',link:''}]},
  { label: 'Profile', icon: IconAdjustments,links:[{ label: 'PersonalProfile',link:'/profile'}]},
];

export function NavbarNested() {
  const links = mockdata.map((item) => {return(<><LinksGroup {...item} key={item.label} /></>)});

  return (
    <>
    <div style={{display:'flex',flexDirection:'row',height:'fit-content'}}>
    <nav className={classes.navbarMain} >
      <div className={classes.header}>
        <Group justify="space-between">
          <DashLogo />
          <Code fw={700}>DoctorDashboard</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
    <div className='text-white' id="ManupulateDiv" style={{width:'80%',height:'100vh'}}>
    MaxVerstappen
    </div>
    </div>
    </>
  );
}