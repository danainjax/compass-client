import React, { useState, useEffect } from 'react'

const Project = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((response) => response.json())
      .then(setProjects)
  }, [])
  console.log(projects)

  return (
    <>
      <h1>Projects</h1>
      <ul>
        <li>
          <p>Project title:{projects[0].title}</p>
          <p> Project id:{projects[0].id}</p>
        </li>
      </ul>
    </>
  )
}

export default Project
