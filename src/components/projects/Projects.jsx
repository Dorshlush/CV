import React from 'react'
import './projects.css'
import IMG1 from '../../assets/barberapp.jpg'
import IMG2 from '../../assets/textGenerator.jpg'
import IMG3 from '../../assets/taxCalc.jpg'
import IMG4 from "../../assets/IMG4.jpg"



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BarberShop',
    desc: <p>'This is my final project of the course I did as part of a group. This is a user and manager platform for a barbershop, you can see more on the
    <a href="https://www.youtube.com/watch?v=vEOh92-NoaI" target="_blank" rel="noopener noreferrer">
      <strong>  Video</strong>
    </a></p>,
    github: "https://github.com/Dorshlush/final_proj",
    demo: "https://cozy-crumble-26254b.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Text summarizer',
    desc: 'Text summarize and generator app, using t-5 model and gpt-3, deploying the app the AWS services, using Docker and AWS-SAM, *The first launch can take a few minutes because the app is not being used often*',
    github: "",
    demo: "https://main.d2808wgwkx2aii.amplifyapp.com"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tax and credit points calculator',
    desc: 'This is a tax calculator app, with registartion system that can calculate your tax credit points',
    github: "https://github.com/Dorshlush/TaxCalc",
    demo: "https://main.d1nated7mvx2mc.amplifyapp.com"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Simple Weather app',
    desc: "Basic weather app utilizing an external API, designed with pure vanilla CSS for a fully responsive experience.",
    github: "https://github.com/Dorshlush/weatherApp",
    demo: "https://main.d10vajciimkfsc.amplifyapp.com"
  },


]
const Projects = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  // const transition = {duration: 2 , type: 'spring'}
  return (
    <section id="projects">
      <section className="reveal">
        <h2 style={{ color: '#fff' }}> My Projects </h2>
      </section>
      <div className="container projects__container reveal">
        {
          data.map(({ id, image, title, github, demo, desc }) => {
            return (
              <article key={id} className="projects__item reveal">
                <div className="projects__item-image">
                  <img
                    // initial={{left: '-36%'}}
                    // whileInView={{left: '-24%'}}
                    // transition={transition}
                    src={image} alt={title} />
                </div>
                <div className='card-body'>
                  <h3>{title}</h3>
                  <p>{desc}</p>

                </div>
                <div className="projects__item-cta">
                  <a href={github} className='btn btn-primary' target="_blank" rel="noreferrer">Source code</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Projects