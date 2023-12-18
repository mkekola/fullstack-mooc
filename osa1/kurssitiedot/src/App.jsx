const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].part1} {props.parts[0].exercises1}</p>
      <p>{props.parts[1].part2} {props.parts[1].exercises2}</p>
      <p>{props.parts[2].part3} {props.parts[2].exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part1: 'Fundamentals of React', exercises1: 10 },
    { part2: 'Using props to pass data', exercises2: 7 },
    { part3: 'State of a component', exercises3: 14 }
  ]
  const total = parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3

  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}


export default App