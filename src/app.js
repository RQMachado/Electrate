import React from 'react';
import Greeting from './components/Greeting';
import Bold from './components/Bold';
import ChangeColor from './components/ChangeColor';

const App = () => { // arrow function

    return (
        <>
            <Greeting name="Robinson" />
            <Greeting name="Queiroz" />
            <Greeting name="Machado" />
            Alguma informação em <Bold>negrito</Bold>
            <ChangeColor />
        </>
    )
}

export default App;
