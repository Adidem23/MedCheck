import { SparklesCore } from "../ui/sparkles";
import { Spotlight } from "../ui/Spotlight";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export function SparklesPreview() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])


    return (
        <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden " data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="300" >

            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20" >
                MedCheck
            </h1>
            <br />
            <h4 className="md:text-2.5xl text-1xl lg:text-5xl  text-center text-white relative z-20" >
                Where HealthCare Meets Convenience
            </h4>

            <Spotlight />

            <br />

            <div className="w-[35rem] h-35 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1}
                    particleDensity={3000}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>

        </div>
    );
}
