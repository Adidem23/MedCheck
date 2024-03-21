import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import classes from '../PatientDash/UserButton.module.css';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function UserButton() {

  const [UserImage, setUserImage] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const Navigator = useNavigate();

  const { loaded, session, signOut } = useClerk();

  const SignoutUser = () => {
    signOut(() => { Navigator("/") });
  }

  const CheckClerkLoad = () => {
    if (loaded) {
      console.log("Clerk is Loaded");
      setUserImage(session.user.imageUrl);
      setUserName(session.user.fullName);
      const EmailAddres = session.user.primaryEmailAddress.emailAddress;
      setUserEmail(EmailAddres);

    } else {
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

        <IconLogout style={{ width: rem(14), height: rem(14) }} stroke={1.5} onClick={SignoutUser} />
      </Group>
    </UnstyledButton>
  );
}