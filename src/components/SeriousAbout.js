import React from 'react';

import '../styles/serious.css';

const SeriousAbout = () => {
    return <div className="serious-container">
        <div className="content-container">
            <div className="left pane">
                <div className="content-section">
                    <h2>Experience</h2>
                    <h4>Enlighten Designs</h4>
                    <div className="job-titles">
                        <p>Analyst Developer</p>
                        <p>Feb 2021 - Sept 2021</p>
                    </div>
                    <div className="job-titles">
                        <p>Developer</p>
                        <p>Jan 2018 - Feb 2021</p>
                    </div>
                </div>
                <div className="content-section">
                    <h4>Web & API Development</h4>
                    <ul>
                        <li>Development with core Microsoft back-end technologies including .NET Core, C#, WebAPI and SQL Server</li>
                        <li>Development with front-end web technologies, including HTML, CSS, Javascript and other Javascript frameworks/libraries (React, Typescript)</li>
                        <li>Development with Azure resources such as Function and Logic apps, Azure storage options (SQL, Blob) and other Azure services, including Cognitive Services, Speech, LUIS</li>
                        <li>CI/CD using DevOps</li>
                        <li>Test-driven development with MSTest and Jest</li>
                        <li>Agile team environment</li>
                    </ul>
                </div>
                <div className="content-section">
                    <h4>Power BI Development</h4>
                    <ul>
                        <li>Robust data modelling using Power Query</li>
                        <li>Creating reports to tell stories using data for the data journalism team at Microsoft</li>
                        <li>Produce high-level KPI reports and dashboards for business leaders to inspire decision making</li>
                        <li>Teaching reporters and business leaders how to use Power BI effectively</li>
                        <li>Custom Power BI Embedded solutions which implement row-level security</li>
                        <li>Custom visual development using Javascript/React/d3</li>
                        <li>Created a full end-to-end Power BI Training course hosted by Microsoft (12 ~30 min modules)</li>
                    </ul>
                </div>
                <div className="content-section">
                    <h4>Data Warehouse Maintenance</h4>
                    <ul>
                        <li>SQL, SSIS, SSAS</li>
                        <li>Using data design concepts to optimise the data warehouse process</li>
                    </ul>
                </div>
                <div className="content-section">
                    <h4>Other</h4>
                    <ul>
                        <li>Host the Analytics in a Day Azure Immersion Workshop (Azure Synapse)</li>
                    </ul>
                </div>
            </div>
            <div className="right pane">
                <div className="content-section">
                    <h2>Education</h2>
                    <p>Waikato University   Jan 2014- Nov 2017</p>
                    <p>Bachelor of Science, Major: Computer Science</p>
                </div>
                <div className="content-section">
                    <h2>Technical Skills/Tooling</h2>
                    <p><span>Languages/Frameworks:</span> C3, .NET, Javascript/Typescript, React, D3, SQL, Power Query (M), DAX</p>
                    <p><span>Tools:</span> GIT, NPM, SSIS, SSAS, Power BI, Azure DevOps</p>
                    <p><span>Cloud Platforms:</span> Azure</p>
                </div>
            </div>
        </div>
    </div>
}

export default SeriousAbout;