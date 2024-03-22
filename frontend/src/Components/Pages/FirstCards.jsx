import Cards from './Cards'
import anime from 'animejs'

const FirstCards = () => {

    // const animate=()=>{
    //     anime({
    //         targets: '#smallcardDiv',
    //         scale: [
    //           {value: 0.5, easing: 'easeOutExpo', duration: 500},
    //           {value: 1, easing: 'easeOutExpo', duration: 1200},
    //         ],
    //         delay: anime.stagger(200, {grid: [1, 3], from: 'center'}),
    //       });
    // }


    return (
        <>

            <div className="flex flex-row" id='smallcardDiv' data-aos="fade-up" data-aos-duration="3000">

                <Cards Name={"Drug-Drug Interaction Checker"} Description={" Discover potential risks in your medication regimen with our Drug-Drug Interaction Checker. Input your prescribed medications to quickly identify any harmful interactions, ensuring safer treatment management for you and your patients."}/>

                <Cards Name={"Food-Drug Interaction Checker"} Description={" Ensure safe medication use with our Food-Drug Interaction Checker.Easily identify potential interactions between your prescribed medications and foods, empowering you to make informed choices for better health outcomes"} />

                <Cards Name={"Substitute Drug Finder"} Description={"Easily discover alternative medications for your needs. Input your current prescription, and find suitable substitutes to discuss with your healthcare provider, ensuring seamless and optimal treatment plans"} />

            </div>

        </>
    )
}

export default FirstCards