import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import ReactDOM from 'react-dom/client';
import Alldoctors from './Pages/Alldoctors';
import FillProfile from './FillProfile';
import {useClerk} from '@clerk/clerk-react'
import HealthRecordNFT from './Pages/HealthRecordNFT';
import classes from '../../../Components/Dashbords/PatientDash/NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];

}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const {user}=useClerk();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      style={{color:'black'}}
      onClick={(event) => {
        event.preventDefault();
        const Div = document.querySelector("#ManupulateDivNew");
        if (link.label === "AllDoctors") {
          ReactDOM.createRoot(Div).render(<Alldoctors />);
        } else if (link.label === "FillProfile") {
          ReactDOM.createRoot(Div).render(<FillProfile UserEmail={user?.primaryEmailAddress?.emailAddress} />);
        } else if(link.label==="PersonalProfile") {
          window.location.href="http://localhost:5173/profile"
        }
        else if(link.label==="HealthRecord"){
          ReactDOM.createRoot(Div).render(<HealthRecordNFT />);

        }
      }}
    >
      {link.label}
    </Text >
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}