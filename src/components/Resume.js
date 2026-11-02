import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./styles.css";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.year}</em>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.experience &&
              resumeData.experience.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.EventName}</h3>
                      <p className="info">
                        {item.Role}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.Start} - {item.End}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <MDBContainer className="nine columns">
            <MDBRow className="padding-phone">
              <MDBCol className="add-bottom flex between">
                <img
                  src="images/react.png"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/nextjs.png"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/node.svg"
                  className="photo"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="padding-phone">
              <MDBCol className="add-bottom flex between">
                <img
                  src="images/express.png"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/tailwind.png"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/htmlcssjs.png"
                  className="photo"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="padding-phone">
              <MDBCol className="flex between">
                <img
                  src="images/vercel.webp"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/sql.png"
                  className="photo"
                  alt=""
                />
                <img
                  src="images/docker.png"
                  className="photo"
                  alt=""
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
    );
  }
}
