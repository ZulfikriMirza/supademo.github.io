import React from 'react';
// import PropTypes from 'prop-types';
import './demo.css';

// function Demo({ title, imageUrl, buttonText }) {
function Demo() {
    return (
        <section className='demo'>
            <div className='demo__benefit'>
                <ul className='demo__list'>
                    <li className='demo__listing'>Endless screenshare sessions</li>
                    <li className='demo__listing'>Recording demo videos that get no views</li>
                    <li className='demo__listing'>Unengaging text documentation</li>
                </ul>
            </div>
            <div className='demo__content'>
                <h1 className='demo__content-title'>Demo product workflows in seconds</h1>
                <img className='demo__image' />
                <button className='demo__button'>Get Supademo For Free&#8594;</button>
            </div>
        </section>
    );
}

// Demo.propTypes = {
//     title: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     buttonText: PropTypes.string.isRequired,
// };

// Demo.defaultProps = {
//     title: 'Supademo',
//     imageUrl: '',
//     buttonText: 'Get Supademo For Free',
// };

export default Demo;