import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Button,Avatar} from "@nextui-org/react";
import {useState} from 'react';
import Use from '../../Components/Images/Use.png';

export default function NextUICard() {
    return (
        <Card className="max-w-[500px] bg-black" style={{ border: '3px solid grey' }}>
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={60}
                />
                <div className="flex flex-col">
                    <p className="text-md text-white">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className=" text-white">Make beautiful websites regardless of your design experience.dsmvydsvuvsufviuldsbkjaddvkjbdkjbvdfkjbvkjdfmv hjvdfhbv</p>
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
    );
}


export function NextUICardTwo() {
    return (
        <Card className="py-4 bg-black" style={{ border: '3px solid grey'}}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white">Many Features</p>
                <small className="text-default-500 text-white">5 services</small>
                <h4 className="font-bold text-large text-white">Making Medical Tasks Simplified</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={Use}
                    width={270}
                />
            </CardBody>
        </Card>
    );
}

export function ThirdNextCard() {

    const [isFollowed, setIsFollowed] = useState(false);

    return (<>
        <Card className="max-w-[450px] bg-black text-white" style={{border:'3px solid grey'}}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    </>)
}