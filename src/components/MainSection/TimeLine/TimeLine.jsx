import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import IconBrand from '../../../assets/images/icon-brand-recognition.svg';
import IconDetail from '../../../assets/images/icon-detailed-records.svg';
import IconCustomize from '../../../assets/images/icon-fully-customizable.svg';

const Container = styled.div`
    position: relative;
    width: 100%;
`;
const Line = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 0.5rem;
    height: 100%;
    background-color: ${props => props.theme.colors.cyan};;
    z-index: 0;   
`;

const HeadingBrand = "Brand Recognition";
const HeadingDetail = "Detailed  Records";
const HeadingCustomize = "Fully Cutsomizable";

const SubTextBrand = "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.";
const SubTextDetail = "Got insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
const SubTextCustomize = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.";

const TimeLine = () => {
    return (
        <Container>
            <Line />
            <FeatureCard heading={HeadingBrand} subtext={SubTextBrand} featIcon={IconBrand} />
            <FeatureCard heading={HeadingDetail} subtext={SubTextDetail} featIcon={IconDetail} />
            <FeatureCard heading={HeadingCustomize} subtext={SubTextCustomize} featIcon={IconCustomize} />
        </Container>
    )
}

export default TimeLine;
