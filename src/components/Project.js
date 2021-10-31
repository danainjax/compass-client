const Project = () => {
  fetch('http://localhost:3000/projects')
    .then((response) => response.json())
    .then((projects) => console.log(projects))

  return (
    <>
      <h1>Projects</h1>
      <ul>{/* <li>{project.title}</li> */}</ul>
    </>
  )
}

export default Project
