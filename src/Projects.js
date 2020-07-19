import React from 'react';
import ReactDOM from 'react-dom';
import './Project.css';

const Projects = () => {
    const projectImage1 = 'https://bit.ly/3eJFvBU';
    const projectImage2 = 'https://doggo.ninja/p5OrIe.png';
    const projectImage3 = 'https://doggo.ninja/n3Sw87.png';
    const sample_image = 'https://bit.ly/2ZLR3Rf';
    return(
        <>
            <div id='project' className='project-container'>
                <h1 className='projects-title'>My Projects</h1>
            </div>

            <div className='project-cards'>
                <div className='cards card-1'>
                    <img className='prj-img-1' src={projectImage1} alt='Mahatma Gandhi'></img>
                    <h1 className='card1-title'>Mahatma Gandhi Tribute Page</h1>
                    <h1 className='card1-desc'>This was my first ever website which I made with HTML and CSS.</h1>
                    <h1 className='proj-links'>Link: </h1>
                </div>
                <div className='cards card-2'>
                    <img className='prj-img-2' src={projectImage2}></img>
                    <h1 className='card2-title'>Rius</h1>
                    <h1 className='card2-desc'>This is my first ever built indie game for Android.
                     This is a platformer game which revolves around the journey of Rius.</h1>
                    <h1 className='proj-links'>Link: </h1>
                </div>
                <div className='cards card-3'>
                    <img className='prj-img-3' src={projectImage3}></img>
                    <h1 className='card2-title'>Crassh</h1>
                    <h1 className='card2-desc'>A Website Made With Webflow</h1>
                    <h1 className='proj-links special-link'>Link: </h1>
                </div>
            </div>
        </>
    )
}

export default Projects