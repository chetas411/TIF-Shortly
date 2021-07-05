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
    & a {
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }

    & a:hover {
        color: ${props => props.theme.colors.cyan};
    }
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

    @media (min-width: 1024px) {
        padding: 2.5rem 4.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        & #f-logo{
            min-width: 25rem;
            text-align: center;
        }
        & .footer-cols {
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0;
            margin: 0 2.5rem;
            & ul {
                text-align: left;
            }
        }
        & #social-handles {
            max-width: 10rem;
        }

    }
`;

const Footer = () => {
    return (
        <Container>
            <div id="f-logo">
                <img src={Logo} alt="Shortly" />
            </div>
            <div className="footer-cols">
                <h3>Features</h3>
                <ul>
                    <a href="#"><li>Link Shortening</li></a>
                    <a href="#"><li>Branded Links</li></a>
                    <a href="#"><li>Analytics</li></a>
                </ul>
            </div>
            <div className="footer-cols">
                <h3>Resources</h3>
                <ul>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Developers</li></a>
                    <a href="#"><li>Support</li></a>
                </ul>
            </div>
            <div className="footer-cols">
                <h3>Company</h3>
                <ul>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Our Team</li></a>
                    <a href="#"><li>Carrers</li></a>
                    <a href="#"><li>Contact</li></a>
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
