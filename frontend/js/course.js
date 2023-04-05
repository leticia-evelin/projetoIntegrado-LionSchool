'use strict'

import { fetchStudent } from "./api.js";
import { fetchData } from "./api.js";
//import { fetchStatus } from "./api.js";

var id = localStorage.getItem('id_card')
const courseStudents = await fetchStudent(id);

const courseTitle = await fetchData();


const createTitle = (curso) => {
        const courseTitle = document.createElement('h1')
        courseTitle.classList.add('title')
        courseTitle.textContent = curso.sigla
    
        //titleCourse.append(titleCourse)
        return titleCourse
     }
   
const createCardAluno = (aluno, curso) => {

    // const courseTitle = document.createElement('h1')
    // courseTitle.classList.add('title')
    // courseTitle.textContent = curso.sigla

    // criando card alunos
    const card = document.createElement('div')
    if(aluno.status == "Finalizado"){
        card.classList.add('students__finished')
    } else {
        card.classList.add('students__studying')
    }
    const img = document.createElement ( 'img' )
    img.classList.add('students__image')
    img.src = aluno.foto

    const name = document.createElement('h3')
    name.classList.add('students__name')
    name.textContent = aluno.nome.toUpperCase()
    
    card.append(img, name)
    return card
}

const loadStudents =  () => {

    const container = document.getElementById('container-students')
    const alunos = courseStudents.alunos.map(createCardAluno)
    
    container.append(...alunos)  
}

loadStudents()

