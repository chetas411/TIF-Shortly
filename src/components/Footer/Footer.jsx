import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo - light.svg';
import FacebookIcon from '../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import PinterestIcon from '../../assets/images/icon-pinterest.svg';
import InstagramIcon from '../../assets/images/icon-instagram.svg';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.5rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.veryDarkViolet};
    color: ${props => props.theme.colors.white};
    & .footer-cols {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.75rem;
        & h3 {
            margin-bottom: 1rem;
        }
        & ul {
            text-align: center;
            color: 	${props => props.theme.colors.darkgray};
            & li {
                display: block;
                margin-bottom: 0.75rem;
                font-size: 0.85rem;
                list-style: none;
            }
        }
    }

    & #social-handles {
        display: flex;
        width: 75%;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
    }
`;

const Footer = () => {
    return (
        <Container>
            <img src={Logo} alt="Shortly" />
            <div className="footer-cols">
                <h3>Features</h3>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="footer-cols">
                <h3>Resources</h3>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="footer-cols">
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Carrers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div id="social-handles">
                <a href="#"><img src={FacebookIcon} alt="facebook" /></a>
                <a href="#"><img src={TwitterIcon} alt="twitter" /></a>
                <a href="#"><img src={PinterestIcon} alt="pinterest" /></a>
                <a href="#"><img src={InstagramIcon} alt="instagram" /></a>
            </div>

        </Container>
    )
}

export default Footer;
