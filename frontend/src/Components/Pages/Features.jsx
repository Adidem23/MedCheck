import '../../CSS/Features.css';
import { FeatureGrid } from './FeatureGrid';
import { TabsDemo } from './TabsDemo';


const Features = () => {
    return (
        <>
            <h4 className="heading-style-h1">What We Provide</h4>
            <br />
            <br />
            <FeatureGrid />
            <TabsDemo />

        </>

    )
}

export default Features