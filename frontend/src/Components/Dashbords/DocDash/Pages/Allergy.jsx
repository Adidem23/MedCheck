import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input , Chip} from "@nextui-org/react"
import DashLogo from '../DashLogo'
import { useState } from "react"
import axios from 'axios';


const Allergy = () => {

    const [InputDrug, setInputDrug] = useState("");
    const [Content, setContent] = useState("");
    const [ReponseofModel, setResponseofModel] = useState("");

    const getDrugResponse = async () => {

        await axios.post("http://localhost:9000/allergy",{Drug:InputDrug,Content:Content},{withCredentials:true}).then((res) => {
            setResponseofModel(res.data);
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
                        <p>ENter Drug Name and Allegic Contents</p>
                        <br />
                        <Input
                            isClearable
                            type="text"
                            label="Enter Drug Name"
                            variant="bordered"
                            className="max-w-xs"
                            onChange={(e) => { setInputDrug(e.target.value) }}
                        />
                        <br />
                         <Input
                            isClearable
                            type="text"
                            label="Enter Allergic content"
                            variant="bordered"
                            className="max-w-xs"
                            onChange={(e) => { setContent(e.target.value) }}
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button onClick={getDrugResponse}>
                            Check
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <br />
            <h2 style={{display:'block',width:'fit-content',margin:'auto'}}>Output</h2>
            <br />

            {ReponseofModel && <p  style={{display:'block',width:'fit-content',margin:'auto'}}>{ReponseofModel}</p>}

        </>
    )
}

export default Allergy