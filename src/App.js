import './App.css';
import QChart from './quickChart';
import CustomChartJs from './CustomChartJs';

function App() {
  return (
    <div className="App">
        <h1>
          Default quick chart component
        </h1>
        <QChart />
        <h1>
          Quich chart component with specific
        </h1>
        <QChart 
        type="bar" 
        title="Hours sleep" 
        labels={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]} 
        data={[8, 7.6, 8, 6, 6, 5, 9, 10]} 
        animation="zoomIn" 
        animationDuration="1.4s" />
        <CustomChartJs />
    </div>
  );
}

export default App;
