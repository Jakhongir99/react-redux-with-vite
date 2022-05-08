import logo from './logo.svg'
import './App.css'
import {useDispatch,useSelector} from "react-redux";
import actions from "./redux/actions/actions";
import {get} from"lodash";
function App() {
   const count = useSelector(state => get(state,"counter.value"));
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: actions.INCREMENT.REQUEST})
  }
  const incrementByNumber = (value) => {
    dispatch({type: actions.INCREMENT_BY_NUMBER.REQUEST,payload:{value}})
  }
  const decrement = () => {
    dispatch({type: actions.DECREMENT.REQUEST})
  }
  const decrementByNumber = (value) => {
    dispatch({type: actions.DECREMENT_BY_NUMBER.REQUEST,payload:{value}})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>count is: {count}</h1>
        <p>
          <button style={{marginRight:"5px"}} type="button" onClick={increment}>
           INCREMENT
          </button>
          <button type="button" onClick={decrement}>
            DECREMENT
          </button>
        </p>
        <p>
          <button style={{marginRight:"5px"}} type="button" onClick={() => incrementByNumber(2)}>
            INCREMENT BY NUMBER - 2
          </button>
          <button type="button" onClick={() => decrementByNumber(2)}>
            DECREMENT BY NUMBER - 2
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
