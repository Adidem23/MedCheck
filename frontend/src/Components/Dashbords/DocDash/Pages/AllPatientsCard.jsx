import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Input, Button, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { IconPlus } from '@tabler/icons-react';


const AllPatientsCard = () => {

    const [AllPatients, setAllPatients] = useState([]);
    const [ClickedIndex, setClickedIndex] = useState(-1);
    const [PresCInput, setPresCInput] = useState("");
    const [AllMedicines, setAllMedicines] = useState([]);
    const [Precautions, setPrecautions] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [compatibleText, setcompatibleText] = useState("");
    const [CompatiblePairs, setCompatiblePairs] = useState();


    const handlePlusButtonClick = (index) => {
        setClickedIndex(index);
    }

    const FetchAllPatients = async () => {
        await axios.get("http://localhost:9000/getAllPatients").then((res) => {
            console.log(res.data);
            setAllPatients(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured!!`);
        })
    }

    const AddPrescribedList = () => {
        const listPrec = document.querySelector("#listPrec");
        const Lichild = document.createElement('li');
        AllMedicines.push(`${PresCInput}`);
        Lichild.innerHTML = `<div>${PresCInput}</div>`;
        listPrec.appendChild(Lichild);
    }

    const MakeRequesttoModel = async () => {
        await axios.post("http://localhost:9000/GivePres", { AllMedicines: AllMedicines }, { withCredentials: true }).then((res) => {
            setcompatibleText(res.data.text);
            setCompatiblePairs(res.data.Data);
            console.log(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })
    }

    const PrecautionsRequest = async () => {
        await axios.post("http://localhost:9000/givePrecautions", { AllMedicines: AllMedicines }, { withCredentials: true }).then((res) => {
            setPrecautions(res.data)
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })
    }

    useEffect(() => {
        FetchAllPatients();
    }, []);


    return (
        <>
            {AllPatients && AllPatients.map((val, index) => {
                return (<>
                    <Card className="bg-black text-white" style={{ border: '3px solid grey', marginLeft: '20px', width: '460px' }}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={140}
                                src={val.ImageURL}
                                width={100}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{val.Name}</p>
                                <p className="text-small text-default-500">{val.Email}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <div className='flex flex-row'>
                            <CardBody>
                                <p>BloodGroup &nbsp; {val.BloodGroup} </p>
                                <p>Age  &nbsp;  {val.Age} Years</p>
                                <p>Weight  &nbsp;  {val.Weight} KG</p>
                            </CardBody>
                            <CardBody>
                                <p><ul>Medical History <li style={{ listStyle: 'initial' }}>{val.MedicalHistory.map((item) => { return (<>&nbsp; {item}</>) })}</li></ul></p>
                            </CardBody>
                        </div>
                        <Divider />
                        <CardFooter className='flex flex-column'>
                            {ClickedIndex !== index && <>
                                <div className='flex flex-row' id='MedicinesDiv'>
                                    <IconPlus stroke={0.9} onClick={() => { handlePlusButtonClick(index) }} />
                                    &nbsp;
                                    <p>Give Prescription</p>
                                </div>
                            </>}

                        </CardFooter>

                        {ClickedIndex === index ? <>
                            <div>
                                <div className='flex flex-row' style={{ marginLeft: '20px' }}>
                                    <Input
                                        isClearable
                                        type="text"
                                        label="Enter Medicines"
                                        className="max-w-xs bg-black text-black"
                                        onChange={(e) => { setPresCInput(e.target.value) }}
                                    />
                                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '20px', marginTop: '10px' }} onClick={AddPrescribedList}>
                                        Add
                                    </Button>
                                </div>

                                <br />

                                <div style={{ display: 'block', margin: 'auto', marginLeft: '20px' }} >
                                    <p> Drugs : </p>
                                    <ul id='listPrec'>

                                    </ul>
                                    {CompatiblePairs && <div>
                                        <h3>Non Compatible Pairs : </h3>
                                        <p>{CompatiblePairs && CompatiblePairs.map((val) => {
                                            return (<>{val} <br /></>)
                                        })}</p>

                                        <br />
                                        <Popover placement="right">
                                            <PopoverTrigger>
                                                <Button>Check Reaso</Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="px-1 py-2">
                                                    <div className="text-medium">{compatibleText}</div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>


                                    </div>}
                                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Precautions</ModalHeader>
                                                    <ModalBody>
                                                        <p>
                                                            {Precautions}
                                                        </p>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                            Close
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>

                                </div>

                                <br />


                                <div className='flex flex-row' style={{ marginBottom: '20px' }}>
                                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '20px' }}>
                                        Prescribe
                                    </Button>
                                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '20px' }} onClick={MakeRequesttoModel}>
                                        Check
                                    </Button>
                                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '20px' }} onClick={(e) => { e.preventDefault(); PrecautionsRequest(); onOpen() }}>
                                        Precautions
                                    </Button>
                                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" style={{ marginLeft: '20px' }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div></> : <></>}
                    </Card>
                </>)
            })}
        </>
    )
}

export default AllPatientsCard