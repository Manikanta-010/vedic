import React from 'react'
import '../css/projects.css'


export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="project-headone">
          <div className="project-firststep">
            <caption>PROJECTS</caption>
            <h1 className="project-collection">A Collection Of Recently Completed Projects</h1>
            <div className="project-btn">
              <h6>Discover the project blend of innovation and elegance</h6>
              <button className="view">View All <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

        
          <div className="project-headtwo">
            <div className="headfour-img01">
              <img className="image01" src="./images/pro_img01.jpg" alt="#" />
              <div className="img01-insidebox">
                <h2 className="luxury">CONTEMPORARY LUXURY VILLA</h2>
                <p className="discover">Discover the perfect blend of innovation and
                  elegance.
                </p>
              </div>
            </div>

            <div className="headfour-img02">
              <img className="image02" src="./images/pro_img02.jpg" alt="#" />
              <div className="img01-insidebox">
                <h2 className="luxury">CONTEMPORARY LUXURY VILLA</h2>
                <p className="discover">Discover the perfect blend of innovation and
                  elegance.
                </p>
              </div>
            </div>
            
            <div className="headfour-img03">
              <img className="image03" src="./images/pro_img03.jpg" alt="#" />
              <div className="img01-insidebox">
                <h2 className="luxury">CONTEMPORARY LUXURY VILLA</h2>
                <p className="discover">Discover the perfect blend of innovation and
                  elegance.
                </p>
              </div>
            </div>
          </div>

          <div className="project-headpart-third">
            <div className="in-third">
              <h1 className="in-third-one">A Collection Of Recently Completed Projects</h1>
              <div className="in-third-items">
                <div className="third-itemone">
                  <h2 className="third-itemone-one">299</h2>
                  <p className="third-itemone-two">Projects Finished</p>
                </div>
                <div className="third-itemone">
                  <h2 className="third-itemone-one">180+</h2>
                  <p className="third-itemone-two">Happy Clients</p>
                </div>
                <div className="third-itemone">
                  <h2 className="third-itemone-one">10</h2>
                  <p className="third-itemone-two">Projects In Progress</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}
