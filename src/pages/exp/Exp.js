import React from 'react';

import { Accordion } from 'react-bootstrap';

import '../../styles/exp.css';

const Exp = ({primaryColour, secondaryColour}) => {
    return <div className="container" style={{paddingTop: '60px'}}>
        <div className="container-sm">
            <div className='content-section-title-container'>
                <h3 className='content-section-title'>Experience 📈</h3>
            </div>
            <Accordion flush>
                <Accordion.Item eventKey='0' style={{backgroundColor: 'transparent'}}>
                    <Accordion.Header>
                        <div style={{display: 'block'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', color: secondaryColour}}>
                                <h5>Software Developer</h5>
                                <h5>SSW</h5>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', color: 'darkgrey'}}>
                                <p>September 2021 - Present</p>
                                <p>Sydney, Australia</p>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: secondaryColour, color: '#1f2124'}}>
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
                <Accordion.Item eventKey='1' style={{backgroundColor: 'transparent'}}>
                    <Accordion.Header>
                    <div style={{display: 'block'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', color: secondaryColour}}>
                            <h5>Analyst Developer</h5>
                            <h5>Enlighten Designs</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', color: 'darkgrey'}}>
                            <p>January 2018 - September 2021</p>
                            <p>Hamilton, New Zealand</p>
                        </div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: secondaryColour, color: '#1f2124'}}>
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
        <div className="container-sm" style={{marginTop: '20px'}}>
            <div className='content-section-title-container'>
                <h3 className='content-section-title'>Education 🎓</h3>
            </div>
            <div style={{backgroundColor: '#2f3134', padding: '1rem 1.5rem'}}>
                <div style={{display: 'block'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: secondaryColour}}>
                        <h5>Bachelor of Science (BSc) - Computer Science</h5>
                        <h5>University of Waikato</h5>
                    </div>
                    <p style={{color: 'darkgrey'}}>January 2014 - November 2017</p>
                </div>
            </div>
        </div>
    </div>
}

export default Exp;