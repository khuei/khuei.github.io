import React, { useEffect } from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { animateScroll as scroll } from 'react-scroll';

import './Home.css';
import BlogListing from './BlogListing.js';

function Home({ onChangeTab }) {
    const scrollToBottom = () => {
        scroll.scrollToBottom({
            duration: 500,
            smooth: true,
        });
    };

    useEffect(() => {
        document.title = 'Home — Khue Nguyen';
        document.querySelectorAll('.blog-listing-item').forEach((item, index) => {
            item.style.visibility = 'visible';
            item.style.transitionDelay = `${index * 0.1}s`;
            item.style.opacity = 1;
        });

        const hasRun = sessionStorage.getItem('animationHasRun');
        if (!hasRun) {
            sessionStorage.setItem('animationHasRun', 'true');
            document.getElementById('body').classList.add('animate');
        }

        document.getElementById('profile').style.visibility = 'visible';
    }, []);

    return (
      <div id="body">
        <section id="profile">
          <svg width="15dvw" xmlns="http://www.w3.org/2000/svg" class="profile-icon ionicon" viewBox="0 0 512 512"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
          <span className="profile-name">Khue Nguyen</span>
          <span className="profile-subscript">/ kweh . ŋwiən˦ˀ˥ /</span>
          <ul className="body-link-menu">
              <li>
                  <a href="mailto:hieukhue2276@gmail.com" className="image-anchor">
                      <center><IoMdMail size='4em' /></center>
                      <span className="image-subscript">Email</span>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/khuei" className="image-anchor">
                      <center><FaGithub size='4em' /></center>
                      <span className="image-subscript">Github</span>
                  </a>
              </li>
              <li>
                  <a href="https://instagram.com/its.khue" className="image-anchor">
                      <center><FaInstagram size='4em' /></center>
                      <span className="image-subscript">Instagram</span>
                  </a>
              </li>
              <li>
                  <a href="https://pin.it/2izB2Oq1l" className="image-anchor">
                      <center><FaPinterest size='4em' /></center>
                      <span className="image-subscript">Pinterest</span>
                  </a>
              </li>
          </ul>
          <div id='arrow-to-blog-highlight' onClick={scrollToBottom}>
            <span>Scroll Down</span>
            <MdOutlineKeyboardDoubleArrowDown size='2.5rem' />
          </div>
        </section>
        <section id="blog-highlight" class="blog-highlight">
            <BlogListing onChangeTab={onChangeTab} />
        </section>
      </div>
    );
}

export default Home;
