import cityGuide from './images/city-guide-app.png'
import portfolio from './images/portfolio.png'
import taskManager from './images/task-manager.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: cityGuide,
    title: 'City Guide App Project',
    description:
      'This is a project of City Guide App. In this project shown how to create simple app with React and Bootstrap',
    github: 'https://github.com/8020Coding/city-guide-app',
    demo: 'https://city-guide-app-project.herokuapp.com/',
  },
  {
    id: 2,
    img: portfolio,
    title: 'Portfolio Project',
    description:
      'Simple application where shown how to implement React and Material-UI to build simple portfolio project',
    github: 'https://github.com/8020Coding/portfilio',
    demo: 'https://portfolio-rea-and-material-ui.herokuapp.com/',
  },
  {
    id: 3,
    img: taskManager,
    title: 'Task Manager App Project',
    description:
      'In this project I show how to create simple Task Manager using React and Redux to manage the state. Here is shown how to create, update and delete tasks.',
    github: 'https://github.com/8020Coding/task-manager',
    demo: 'https://react-redux-task-manager.herokuapp.com/',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}
