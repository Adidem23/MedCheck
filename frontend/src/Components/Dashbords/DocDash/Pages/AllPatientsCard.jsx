import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


const AllPatientsCard = () => {

    const [AllPatients, setAllPatients] = useState([]);

    const FetchAllPatients = async () => {
        await axios.get("http://localhost:9000/getAllPatients").then((res) => {
            console.log(res.data);
            setAllPatients(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured!!`);
        })
    }

    useEffect(() => {
        FetchAllPatients();
    }, []);


    return (
        <>
            {AllPatients && AllPatients.map((val) => {
                return (<>
                    <Card className="bg-black text-white" style={{ border: '3px solid grey', marginLeft: '20px' ,width:'420px'}}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{val.Name}</p>
                                <p className="text-small text-default-500">{val.Email}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/nextui-org/nextui"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                </>)
            })}
        </>
    )
}

export default AllPatientsCard