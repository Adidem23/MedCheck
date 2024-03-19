import '../../CSS/Navbar.css';
import { Button } from "@nextui-org/react";
import windImage from '../../assets/Wind_hashira.jpg';
import { HeartIcon } from '../Icons/HeartIcon';
import { CameraIcon } from '../Icons/CameraIcon';
import { useUser } from '@clerk/clerk-react';
import { Avatar } from "@nextui-org/react";
import { useClerk } from '@clerk/clerk-react';
import Role from './Role';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Newnav = () => {

    const [FilledProfile, setFilledProfile] = useState(true);
    const [RoleOfUser, setRoleOfUser] = useState("");

    const user = useUser();

    const { signOut } = useClerk();

    const SignOutUser = () => {
        signOut();
    }

    useEffect(() => {
        checkRoleUser();
    })

    const checkRoleUser = async () => {
        const sentAddress = user.user.primaryEmailAddress.emailAddress;
        await axios.post("http://localhost:9000/CheckRole", { Email: sentAddress }, { withCredentials: true }).then((res) => {
            const StringRes = res.data.toString();
            if (StringRes === "") {
                setFilledProfile(false);
            } else {
                setRoleOfUser(res.data);
                console.log(`Nav User Has Role of : ${res.data}`);
            }
        }).catch((err) => {
            console.log(`Error is Occured : ${err}`);
        })

    }


    return (

        <nav className="navbar">
            <div className="logo">
                <img src={windImage} alt="Logo" />
            </div>

            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><Role /></li>
                {RoleOfUser==="Doctor"?<><li className='text-white'><a className='px-2 text-black dark:text-white hover:underline my-2' href={"/"}>DocDash</a></li></>:RoleOfUser==="Patient"?<><li><a className='px-2 text-black dark:text-white hover:underline my-2' href={"http://localhost:3000"}>PatiDash</a></li></>:<></>}
            </ul>

            <ul className="icon-links">
                <li><a>
                    <Button isIconOnly color="danger" aria-label="Like">
                        <HeartIcon />
                    </Button>
                </a></li>

                <li><a href="#"><Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
                    <CameraIcon />
                </Button></a></li>

                <li><a>
                    <Button isIconOnly color="danger" aria-label="Like">
                        <HeartIcon />
                    </Button>
                </a></li>

                <li><a href="#"><Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
                    <CameraIcon />
                </Button></a></li>

            </ul>

            <Avatar src={user.user.imageUrl} size="md" />
            <a className="text-white" href="http://localhost:5173/profile">{user.user.fullName} &nbsp;({RoleOfUser})</a>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={SignOutUser}>
                Sign out
            </Button>

        </nav>
    );

};

export default Newnav;