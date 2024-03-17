import '../../CSS/Navbar.css';
import { Button } from "@nextui-org/react";
import windImage from '../../assets/Wind_hashira.jpg';
import { HeartIcon } from '../Icons/HeartIcon';
import { CameraIcon } from '../Icons/CameraIcon';


const Navbar = () => {

    return (

        <nav className="navbar">
            <div className="logo">
                <img src={windImage} alt="Logo" />
            </div>

            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
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

            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Explore
            </Button>
        </nav>
    );

};

export default Navbar;