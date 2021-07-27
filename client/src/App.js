import index from './Pages/index'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  const { Home, Campgrounds, Show, NewCampground, EditCampground } = index;

  return (
    <div className="App">
      <Header />
      <Switch>
        
        <Route exact path='/' component={Home} />

        <Route exact path='/campgrounds' component={Campgrounds} />
        
        <Route exact path='/campgrounds/new' component={NewCampground} />

        <Route exact path='/campgrounds/:id' component={Show} />
        
        <Route exact path='/campgrounds/:id/edit' component={EditCampground} />

      </Switch>
    </div>
  )
}

export default App;
