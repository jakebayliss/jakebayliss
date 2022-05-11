import React from 'react';

import { Accordion } from 'react-bootstrap';

import '../../styles/serious.css';

const Exp = ({secondaryColour}) => {
    return <div className="container" style={{marginTop: '60px'}}>
        <div className="container-sm">
            <div className='content-section-title-container'>
                <h3 className='content-section-title'>Experience</h3>
            </div>
            <Accordion flush alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header style={{backgroundColor: secondaryColour}}>
                        <div style={{display: 'block'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h5>Software Developer</h5>
                                <h5>SSW</h5>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{color: 'lightslategray'}}>September 2021 - Present</p>
                                <p style={{color: 'lightslategray'}}>Sydney, Australia</p>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Full stack development using Azure as the cloud service. 
                        I am currently a scrum master for a team re-developing an extremely old (VB) Insurance platform using Dynamics + a .NET 5 WebAPI. 
                        My role has predominantly been the .NET WebAPI and CI/CD side while helping out where I can on the Dynamics side.
                        <br /><br />
                        <p>🦾 <b>Backend</b> - Worked with core Microsoft back-end technologies including .NET Core, .NET 5 + 6 including WebAPI and Azure Functions, SQL.</p>
                        <p>🌟 <b>Frontend</b> - Worked with front-end web technologies/frameworks, primarily React + Typescript + Webpack, also including the standard HTML, CSS, Javascript.</p>
                        <p>☁️ <b>Cloud</b> + Cloud Services - Development with Azure resources such as Function and Logic apps, Azure storage options (SQL, Blob) and other Azure services, including Application Insights.</p>
                        <p>🚀 <b>DevOps</b> - Automated CI/CD using DevOps Pipelines and GitHub Actions with bicep.</p>
                        <p>⚙️ <b>Power Platform</b> - Creating and maintaining Model-Driven App solutions, Canvas Apps and Flows.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                    <div style={{display: 'block'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5>Analyst Developer</h5>
                            <h5>Enlighten Designs</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <p style={{color: 'lightslategray'}}>January 2018 - September 2021</p>
                            <p style={{color: 'lightslategray'}}>Hamilton, New Zealand</p>
                        </div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        At Enlighten I was part of the Data and AI team so worked mostly with Power BI and extending the limits of it, which was creating fun custom visuals (using D3 and React + Javascript). The other side was designing and creating reports to tell stories using data for the data journalism team at Microsoft as well as high-level KPI reports and dashboards for business leaders to inspire decision making. I also maintained our internal data warehouse using SSIS/SSAS + SQL on the side. In between Power BI projects I worked on custom web projects using React and .NET.
                        <br /><br />
                        <p>🦾 <b>Backend</b> - Worked with core Microsoft back-end technologies including .NET Core, .NET MVC.</p>
                        <p>🌟 <b>Frontend</b> - Worked with front-end web technologies/frameworks, primarily React + Webpack, also including the standard HTML, CSS, Javascript.</p>
                        <p>☁️ <b>Cloud + Cloud Services</b> - Development with Azure resources such as Function and Logic apps, Azure storage options (SQL, Blob) and other Azure services, including Application Insights, Cognitive Services, Speech, LUIS, SignalR.</p>
                        <p>🚀 <b>Power BI</b> - Robust data modelling using Power Query, reporting designing and building. Custom visual development using Javascript/React/d3.</p>
                        <p>⚙️ <b>Data warehousing</b> - SQL, SSIS, SSAS, using data design concepts to optimise the data warehouse process.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        <div className="container-sm">
            <div className='content-section-title-container'>
                <h3 className='content-section-title'>Education</h3>
            </div>
            <Accordion flush alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header style={{backgroundColor: secondaryColour}}>
                        <div style={{display: 'block'}}>
                            <h5>Bachelor of Science (BSc)   |   University of Waikato</h5>
                            <p style={{color: 'lightslategray'}}>January 2014 - November 2017</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Majoring in Computer Science
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
}

export default Exp;