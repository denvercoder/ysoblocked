import { Route, Switch } from 'react-router-dom'
import React from 'react'

import PopUpPage from './popup-page'
import OptionsPage from './options-page'
import '../tailwind.output.css'

const App = () => {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={PopUpPage} />
          <Route exact path="/options" component={OptionsPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
