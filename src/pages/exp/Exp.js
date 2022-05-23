import React, { useState } from 'react';

const Exp = ({primaryColour, secondaryColour}) => {
    const [active, setActive] = useState('ssw');

    return <div className='pt-4'>
        <div>
            <h3 className='text-2xl m-2 mb-4'>Experience 📈</h3>
            <div>
                <div className='flex'>
                    <button className={`m-0 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'ssw' ? 'bg-zinc-900' : ''}`}
                        onClick={() => setActive('ssw')}>SSW</button>
                    <button className={`m-0 ml-1 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'enlighten' ? 'bg-zinc-900' : ''}`}
                        onClick={() => setActive('enlighten')}>Enlighten</button>
                </div>
                <div style={{display: active == 'ssw' ? 'block' : 'none'}}>
                    <div className='p-3 sm:px-6 bg-zinc-900 border-b-2 border-lime-500'>
                        <div className='flex justify-between'>
                            <h5>Software Architect</h5>
                        </div>
                        <div className='flex justify-between text-zinc-400 text-sm'>
                            <p>Sept 2021 - Present</p>
                            <p>Sydney, Australia 📍</p>
                        </div>
                    </div>
                    <div className='p-3 sm:p-6 bg-zinc-800 rounded-b-md text-sm'>
                        Full stack development using Azure as the cloud service. 
                        I am currently a scrum master for a team re-developing an extremely old (VB) Insurance platform using Dynamics + a .NET 5 WebAPI. 
                        My role has predominantly been the .NET WebAPI and CI/CD side while helping out where I can on the Dynamics side.
                        <br /><br />
                        <p>🦾 <b>Backend</b> - Worked with core Microsoft back-end technologies including .NET Core, .NET 5 + 6 including WebAPI and Azure Functions, SQL.</p>
                        <p>🌟 <b>Frontend</b> - Worked with front-end web technologies/frameworks, primarily React + Typescript + Webpack, also including the standard HTML, CSS, Javascript.</p>
                        <p>☁️ <b>Cloud + Cloud Services</b> - Development with Azure resources such as Function and Logic apps, Azure storage options (SQL, Blob) and other Azure services, including Application Insights.</p>
                        <p>🚀 <b>DevOps</b> - Automated CI/CD using DevOps Pipelines and GitHub Actions with bicep.</p>
                        <p>⚙️ <b>Power Platform</b> - Creating and maintaining Model-Driven App solutions, Canvas Apps and Flows.</p>
                    </div>
                </div>
                <div style={{display: active == 'enlighten' ? 'block' : 'none'}}>
                    <div className='p-3 sm:px-6 bg-zinc-900 border-b-2 border-lime-500'>
                        <div className='flex justify-between'>
                            <h5>Analyst Developer</h5>
                        </div>
                        <div className='flex justify-between text-zinc-400 text-sm'>
                            <p>Jan 2018 - Sept 2021</p>
                            <p>Hamilton, New Zealand 📍</p>
                        </div>
                    </div>
                    <div className='p-3 sm:p-6 bg-zinc-800 rounded-b-md text-sm'>
                        At Enlighten I was part of the Data and AI team so worked mostly with Power BI and extending the limits of it, which was creating fun custom visuals (using D3 and React + Javascript). The other side was designing and creating reports to tell stories using data for the data journalism team at Microsoft as well as high-level KPI reports and dashboards for business leaders to inspire decision making. I also maintained our internal data warehouse using SSIS/SSAS + SQL on the side. In between Power BI projects I worked on custom web projects using React and .NET.
                        <br /><br />
                        <p>🦾 <b>Backend</b> - Worked with core Microsoft back-end technologies including .NET Core, .NET MVC.</p>
                        <p>🌟 <b>Frontend</b> - Worked with front-end web technologies/frameworks, primarily React + Webpack, also including the standard HTML, CSS, Javascript.</p>
                        <p>☁️ <b>Cloud + Cloud Services</b> - Development with Azure resources such as Function and Logic apps, Azure storage options (SQL, Blob) and other Azure services, including Application Insights, Cognitive Services, Speech, LUIS, SignalR.</p>
                        <p>🚀 <b>Power BI</b> - Robust data modelling using Power Query, reporting designing and building. Custom visual development using Javascript/React/d3.</p>
                        <p>⚙️ <b>Data warehousing</b> - SQL, SSIS, SSAS, using data design concepts to optimise the data warehouse process.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-4'>
            <div className='m-4'>
                <h3 className='text-2xl m-2'>Education 🎓</h3>
            </div>
            <div>
                <div className='p-3 sm:px-6 bg-zinc-800 rounded-md'>
                    <div className='flex justify-between'>
                        <h5>Bachelor of Science (BSc) - Computer Science</h5>
                        <h5>University of Waikato</h5>
                    </div>
                    <p className='flex justify-between text-zinc-400 text-sm'>Jan 2014 - Nov 2017</p>
                </div>
            </div>
        </div>
    </div>
}

export default Exp;