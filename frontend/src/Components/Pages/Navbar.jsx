import '../../CSS/Navbar.css';
import { Button } from "@nextui-org/react";
import Navlogo from './Navlogo';
import {Link} from 'react-router-dom';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandDiscord } from '@tabler/icons-react';

const Navbar = () => {

    return (

        <nav className="navbar">
            <div className="logo">
                <Navlogo />
            </div>

            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>

            <ul className="icon-links">

                <li><a href="#"><Button isIconOnly color="primary" variant="shadow" aria-label="Take a photo" >
                    <IconBrandX />
                </Button></a></li>

                <li><a>
                    <Button isIconOnly color="danger" aria-label="Like" variant='shadow'>
                       <IconBrandInstagram />
                    </Button>
                </a></li>

                <li><a href="#"><Button isIconOnly color="secondary" variant="shadow" aria-label="Take a photo">
                    <IconBrandDiscord />
                </Button></a></li>

            </ul>

           <Link to={"/signup"}><Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" variant='shadow'>
                SignUp
            </Button></Link> 

        </nav>
    );

};

export default Navbar;