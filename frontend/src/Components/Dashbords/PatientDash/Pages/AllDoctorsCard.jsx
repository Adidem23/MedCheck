import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Input, Button, Image } from "@nextui-org/react";
import { IconPlus } from '@tabler/icons-react';


const AllPatientsCard = () => {

    const [AllDoctors, setAllDoctors] = useState([]);
    const [ClickedIndex, setClickedIndex] = useState(-1);
    const [PresCInput, setPresCInput] = useState("");
    const [AllMedicines, setAllMedicines] = useState([]);

    const handlePlusButtonClick = (index) => {
        setClickedIndex(index);
    }

    const FetchAllPatients = async () => {
        await axios.get("http://localhost:9000/getAllDoctors").then((res) => {
            console.log(res.data);
            setAllDoctors(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured!!`);
        })
    }



    useEffect(() => {
        FetchAllPatients();
    }, []);


    return (
        <>
            {AllDoctors && AllDoctors.map((val, index) => {
                return (<>
                    <Card className="bg-black text-white" style={{ border: '3px solid grey', marginLeft: '20px', width: '460px' }}>
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
                        <CardFooter className='flex flex-column'>

                        </CardFooter>
                    </Card>
                </>)
            })}
        </>
    )
}

export default AllPatientsCard