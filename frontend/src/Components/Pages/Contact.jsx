import { Input, Textarea, Button } from "@nextui-org/react";



const Contact = () => {
    return (
        <>
            <div className="flex flex-col" style={{ height: 'fit-content', marginTop: '20%', marginLeft: '10%' ,width:'400px' }}>
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    description="We'll never share your email with anyone else."
                    className="max-w-xs"
                />

                <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                />

                <br />

                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Connect 
                </Button>

            </div>
        </>
    )
}

export default Contact