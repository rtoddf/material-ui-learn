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
        return this.state.exercises.reduce((exercises, exercise) => {
            const { muscles } = exercise

            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercises] : [exercise]

            return exercises
        }, {});
    }

    render(){
        console.log(this.getExercisesByMuscles())
        return (
            <Fragment>
                <Header />
                <Content exercises={ exercises } />
                <Footer muscles={muscles} />
            </Fragment>
        )
    }
}

export default App;