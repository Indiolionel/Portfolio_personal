
import React from "react";
import photoPlantas from '../img/proyectoPlantas.png'
import todoList from '../img/todoList.png'
import trueque from '../img/trueque.png'
import './Projects.css'

// import { projects } from "../data";

export default function Projects() {




  const projects = [
    {
      link: "https://integrador-trueque.vercel.app/",
      gitLink: "https://github.com/Indiolionel/integrador-trueque",
      image: `${trueque}`,
      subtitle: "App hecha con js vanilla",
      title: "App truequeLand",
      description: "Dev Front-End"
    },
    {
      link: "https://to-do-list-five-lime.vercel.app/",
      gitLink: "https://github.com/Indiolionel/ToDoList",
      image: `${todoList}`,
      subtitle: "Conexion a api pokeApi",
      title: "App to-do-list",
      description: "Dev Front-End"
    }
    ,
    {

      link: "https://plantasventas.up.railway.app",
      gitLink: "https://github.com/Indiolionel/React-Nucba",
      image: `${photoPlantas}`,
      subtitle: "App e-commerce de plantas",
      title: "App plantas",
      description: "Dev Full-Stack"
    }
  ]
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Aplicaciones que he creado
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Los proyectos que he realizado se verán reflejados a continuación, siempre orientados a full-stack
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full slider"  >
          {projects.map((project, id) => (

            <>
              <div className="mx-2 border-2 border-gray-800 my-2 bg-black slider-div" style={{ '--i': id }} >
                <div className="lg:hidden mt-4">
                  <h1>{project.title}</h1>
                  <h2> {project.subtitle}</h2>
                </div>
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4 "
                  target="_blank"
                >
                  <div className="flex relative mb-2 w-64 h-64 slider-img" >
                    <img
                      alt="Plantas-img"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-y border-gray-700 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
                <a class="inline-flex items-center justify-center h-10 px-5 py-3 my-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                  href={project.gitLink}
                  target="_blank"
                > Git Hub</a>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}