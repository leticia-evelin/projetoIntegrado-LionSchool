'use strict'

export const fetchData = async () => {
    const url = `http://localhost:8181/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}

export const fetchStudent = async (turma) => {
    const url = `http://localhost:8181/v1/lion-school/${turma}/alunos`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}

