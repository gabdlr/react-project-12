import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Products}/>
              <Route exact path="/product/new" component={NewProduct}/>
              <Route exact path="/product/edit/:id" component={EditProduct}/>
            </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
