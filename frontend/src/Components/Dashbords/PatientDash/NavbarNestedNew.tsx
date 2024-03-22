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
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import DashLogo from '../PatientDash/DashLogo';
import Alldoctors from './Pages/Alldoctors';
import classes from '../../../Components/Dashbords/PatientDash/NavbarNested.module.css';

const mockdata = [
  { label: 'Doctors', icon: IconGauge, links: [{ label: 'AllDoctors', link: '' }] },
  {
    label: 'Medical Profile',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'FillProfile', link: '' },
    ],
  },
  { label: 'Profile', icon: IconAdjustments, links: [{ label: 'PersonalProfile', link: '/profile' }] },
];

export function NavbarNestedNew() {
  const links = mockdata.map((item) => { return (<><LinksGroup {...item} key={item.label} /></>) });

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', height: 'fit-content' ,color:'#3b3b3b' }}>
        <nav className={classes.navbarMain} style={{background:'#3b3b3b',color:'white'}} >
          <div className={classes.header}>
            <Group justify="space-between">
              <DashLogo />
              <Code fw={700}>PatientDashBoard</Code>
            </Group>
          </div>

          <ScrollArea className={classes.links} style={{color:'white'}}>
            <div className={classes.linksInner} style={{color:'grey'}}>{links}</div>
          </ScrollArea>

          <div className={classes.footer}>
            <UserButton />
          </div>
        </nav>
        <div className='text-white' id="ManupulateDivNew" style={{ width: '80%', height: '100vh' }}>
          <Alldoctors />
        </div>
      </div>
    </>
  );
}