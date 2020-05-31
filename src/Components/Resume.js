import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.degree}>
            <h3>{education.degree}</h3>
            <p className="info">
              {education.school} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.title}>
            <h3>{work.title}</h3>
            <p className="info">
              {work.company}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
            <p>{work.descriptionExt}</p>
          </div>
        );
      });
      var skillsSoft = this.props.data.skillsSoft;
      var skillsTech = this.props.data.skillsTech;
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Top skills</span>
            </h1>
          </div>

          <div className="twelve columns main-col">
            <MDBContainer>
              <MDBRow center>
                <MDBCol>
                  <MDBRow center></MDBRow>
                </MDBCol>
                <MDBCol size="sm">
                  <PieChart
                    data={skillsTech}
                    lineWidth={25}
                    paddingAngle={2}
                    rounded
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                      fill: skillsTech[index].color,
                      fontSize: "4px",
                      fontFamily: "opensans-bold",
                    })}
                    radius={42}
                    labelPosition={112}
                    style={{
                      height: "300px",
                    }}
                    animate
                  />
                </MDBCol>
                <MDBCol size="sm">
                  <PieChart
                    data={skillsSoft}
                    lineWidth={25}
                    paddingAngle={2}
                    rounded
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                      fill: skillsSoft[index].color,
                      fontSize: "4px",
                      fontFamily: "opensans-bold",
                    })}
                    radius={42}
                    labelPosition={112}
                    style={{
                      height: "300px",
                    }}
                    animate
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
