import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Button from '@material-ui/core/Button';

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

const App = () => (
    <div>
        <NavigationBar></NavigationBar>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    </div>
)

export default App
