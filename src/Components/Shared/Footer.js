import React from 'react';
import footer from '../../Images/Footer-Background-Image.png';
import google from '../../Images/social/google.png';
import facebook from '../../Images/social/facebook.png';
import github from '../../Images/social/github.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer text-white'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <img className='mb-2' style={{ width: '30px' }} src={google} alt="" />
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <img className='mt-2 bg-white' style={{ width: '30px' }} src={github} alt="" />
                </div>
            </div>
            <div className='text-center my-10 text-white'>
                <p>Copyright © {year} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;