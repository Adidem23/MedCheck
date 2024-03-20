import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from '../DocDash/UserButton.module.css';
import { useClerk } from '@clerk/clerk-react'
import { useState, useEffect } from 'react';



export function UserButton() {

  const [UserImage, setUserImage] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");

  const { loaded ,session} = useClerk();

  const CheckClerkLoad = () => {
      if (loaded) {
        console.log("Clerk is Loaded");
        setUserImage(session.user.imageUrl);
        setUserName(session.user.fullName);
        const EmailAddres=session.user.primaryEmailAddress.emailAddress;
        setUserEmail(EmailAddres);

      }else{
        console.log("Clerk is Loading...")
      }
  }

  useEffect(() => {
    CheckClerkLoad();
  }, [loaded])

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={UserImage}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {UserName}
          </Text>
          
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14)}} stroke={1.5}/>
      </Group>
    </UnstyledButton>
  );
}