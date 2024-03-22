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
import Allpatients from './Pages/Allpatients';

const mockdata = [
  {label:'Patients', icon:IconCalendarStats,links:[{label:'AllPatients',link:''}]},
  { label: 'SubstituteDrug', icon: IconPill ,links:[{label:'SuggestDrug',link:''}]},
  { label: 'SceduleMeet', icon: IconPill ,links:[{label:'ScduleMeet',link:'https://refmemeet.vercel.app/'}]},
  {label:'Allergy', icon:IconCalendarStats,links:[{label:'Allergy',link:''}]},
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
    <Allpatients />
    </div>
    </div>
    </>
  );
}