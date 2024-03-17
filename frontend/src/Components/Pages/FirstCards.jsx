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
                
                <Cards Name={"Lamborghini"} Description={"The cat jumped swiftly over the fence, chasing shadows in the moonlight. "}/>
                
                <Cards Name={"BMW"} Description={" Suddenly, a mysterious figure emerged from the bushes, startling both cat and shadow alike"} />

                <Cards Name={"Mercedez"} Description={"Suddenly, a mysterious figure emerged from the bushes, startling both cat and shadow alike"} />
           
     
            </div>

        </>
    )
}

export default FirstCards