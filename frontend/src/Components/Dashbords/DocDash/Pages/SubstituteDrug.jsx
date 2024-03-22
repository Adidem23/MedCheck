import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input , Chip} from "@nextui-org/react"
import DashLogo from '../DashLogo'
import { useState } from "react"
import axios from 'axios';


const SubstituteDrug = () => {

    const [InputDrug, setInputDrug] = useState("");
    const [SubstituteDrugName, setSubstituteDrugName] = useState([]);

    const getSubstituteDrug = async () => {

        await axios.post("http://localhost:9000/giveSuggestiveDrug",{Drug:InputDrug},{withCredentials:true}).then((res) => {
            setSubstituteDrugName(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })

    }


    return (
        <>
            <div style={{ width: 'fit-content', margin: 'auto', display: 'block' }}>
                <Card className="max-w-[500px] text-white bg-black" style={{ border: '3px solid grey', marginTop: '50px' }}>
                    <CardHeader className="flex gap-3">
                        <DashLogo />
                        <div className="flex flex-col">
                            <p className="text-md">MedCheck</p>
                            <p className="text-small text-default-500">@Copyright Medcheck.org</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody >
                        <p>Enter a Drug Name to get Substitute Drug</p>
                        <br />
                        <Input
                            isClearable
                            type="text"
                            label="Enter Drug Name"
                            variant="bordered"
                            className="max-w-xs"
                            onChange={(e) => { setInputDrug(e.target.value) }}
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button onClick={getSubstituteDrug}>
                            Suggest
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <br />
            <h2 style={{display:'block',width:'fit-content',margin:'auto'}}> Substitute Medicines</h2>
            <br />
            {SubstituteDrugName && SubstituteDrugName.map((val) => {
                return (<>
                <div className="flex flex-row" style={{display:'block',width:'fit-content',margin:'auto'}}>
                 &nbsp; <Chip color="secondary">{val} <br /></Chip>
                </div>
                </>)
            })}
        </>
    )
}

export default SubstituteDrug