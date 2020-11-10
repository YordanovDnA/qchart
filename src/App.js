import logo from './logo.svg';
import './App.css';
import Chart from './chart';
import QChart from './quickChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <QChart title="New chart"  type="line" labels={["Mon", "Thu", "Wed", "Thur", "Fri", "Sat", "Sun"]} data={[5,2,3,4,5,10,1]} animation="zoomIn"  />
        <Chart />
        <Chart type="line" title="2020 - COVID-19 cases" data={[
          12,11,10,9,8,7,6,5,4,3,2,1
        ]} />
        <Chart type="pie" title="Home expenses" data={[
          2000, 5000, 1000, 2000, 4000, 2000, 10000, 13000, 4000, 1000, 3000, 2000
        ]}  />
      </header>
    </div>
  );
}

export default App;
