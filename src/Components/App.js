import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';
import  Content from './Content';
import { muscles, exercises } from '../store';

class App extends React.Component {
    state = {
        exercises
    }

    getExercisesByMuscles() {
        // look up reduce
        // look up Objet.entries
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
            const { muscles } = exercise

            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

            return exercises
        }, {}));
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Content exercises={ this.getExercisesByMuscles() } />
                <Footer muscles={muscles} />
            </Fragment>
        )
    }
}

export default App;