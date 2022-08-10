import React, { Component } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBMedia
  } from "mdbreact";
import './styles.css'
export default class Resume extends Component {
render() {
let resumeData = this.props.resumeData;
    return (
        <section id='resume'>
            <div className='row education'>
                <div className='three columns header-col'>
                    <h1><span>Education</span></h1>
                </div>
                <div className='nine columns main-col'>
                    {
                    resumeData.education && resumeData.education.map((item)=>{
                    return(
                    <div className='row item'>
                        <div className='twelve columns'>
                            <h3>{item.UniversityName}</h3>
                            <p className='info'>
                                {item.specialization}
                                <span>&bull;</span> <em className='date'>{item.year}</em>
                            </p>
                        </div>
                    </div>
                )
            })
        }
                </div>
            </div>
            <div className='row work'>
                <div className='three columns header-col'>
                    <h1><span>Work</span></h1>
                </div>
                <div className='nine columns main-col'>
                    {
                    resumeData.experience && resumeData.experience.map((item) => {
                    return(
                    <div className='row item'>
                        <div className='twelve columns'>
                            <h3>{item.EventName}</h3>
                            <p className='info'>
                                {item.Role}
                                <span>&bull;</span> <em className='date'>{item.Start} - {item.End}</em>
                            </p>
                            <p>
                                {item.Achievements}
                            </p>
                        </div>
                    </div>
                )
            })
        }
                </div>
            </div>

            <div className='row skill'>
                <div className='three columns header-col'>
                    <h1><span>Skills</span></h1>
                </div>
            </div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="4" md="6" className="mb-3 flex">
                            <img src = 'images/python.png' className="img-fluid z-depth-1 photo" alt="" />
                            <img src = 'images/django.png'className="img-fluid z-depth-1 photo" alt="" />
                            <img src = 'images/react.png'className="img-fluid z-depth-1 photo" alt="" />
                            
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="6" className="mb-3 flex">
                            <img src = 'images/htmlcssjs.png'className="img-fluid z-depth-1 photo" alt="" />
                            <img src = 'images/angular.png'className="img-fluid z-depth-1 photo" alt="" />
                            <img src = 'images/docker.png'className="img-fluid z-depth-1 photo" alt="" />
                            
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </section>
        );
    }
}