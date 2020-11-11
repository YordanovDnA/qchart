# QChart

This is a reusable React component taking which renders a chart based on the data passed via props

## Installation

Clone the repository and run:

```npm
npm install
```

## Usage

```npm
cd qchart
```

```npm
npm start
```

The application will be launched at [http://localhost:3000]("http://localhost:3000")

## Examples

### Default chart:

By default the chart data is:
|name | data | Description
| ------------- |:-------------:| :-------------:|
| type | line | The shape/type of the chart|
| title | last year + customers report | The title of the chart/data |
| labels | "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec" | The data laybles for each column |
| data| 1540, 1820, 2200, 1700, 1880, 1900, 2500, 2705, 2000, 1650, 2560, 2910| The data for each column in the charm|

```javascript
import "./App.css";
import QChart from "./quickChart";

function App() {
  return (
    <div className="App">
      <QChart />
    </div>
  );
}

export default App;
```

![alt text](https://lh4.googleusercontent.com/49JofY-PL_eP72DDNf17QSE_8oaMtPlgslSW0CcNxJYb9mjGX1B-4EZ23LwHbSEmNUmcDDj16TfKzgTH8tNP=w1462-h967-rw "Logo Title Text 1")

### Change the chart info via props:

We can change the title, labels, data and even the animation and animation duration via props.

```javascript
import "./App.css";
import QChart from "./quickChart";

function App() {
  return (
    <div className="App">
      <QChart
        type="bar"
        title="Hours sleep"
        labels={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]}
        data={[8, 7.6, 8, 6, 6, 5, 9, 10]}
        animation="zoomIn"
        animationDuration="1.4s"
      />
    </div>
  );
}

export default App;
```

![alt text](https://lh4.googleusercontent.com/XubDBTqLidFphLExVHja0MNwppBAlAhwI6g5b5sXv75-6viIB246A1ehOlT5XBWW7CKwbU62k9ycA7w2GziY=w1462-h967-rw "Logo Title Text 1")

## Prop types:

| Name              |                        Type                         |            Examples / Options |
| ----------------- | :-------------------------------------------------: | ----------------------------: |
| type              |                   specific string                   |            "line"(By default) |
|                   |                                                     |                         "bar" |
|                   |                                                     |                         "pie" |
|                   |                                                     |                       "radar" |
|                   |                                                     |                    "doughnut" |
| title             |                     any string                      |         "Monthly wages - 2019 |
| labels            |                array of any strings                 | ["Jan", "Feb", . . . , "Dec"] |
| data              |                array of any numbers                 |  [2500, 2350, . . . , "3500"] |
| animation         |                   specific string                   |            "fadeIn" (default) |
|                   |                                                     |                    "fadeInUp" |
|                   |                                                     |                 "fadeInRight" |
|                   |                                                     |                  "fadeInDown" |
|                   |                                                     |                  "fadeInLeft" |
|                   |                                                     |                    "bounceIn" |
|                   |                                                     |                  "bounceInUp" |
|                   |                                                     |               "bounceInRight" |
|                   |                                                     |                "bounceInDown" |
|                   |                                                     |                "bounceInLeft" |
|                   |                                                     |                     "flipInX" |
|                   |                                                     |                     "flipInY" |
|                   |                                                     |                      "zoomIn" |
|                   |                                                     |                      "blurIn" |
|                   |                                                     |                    "blurInUp" |
|                   |                                                     |                 "blurInRight" |
|                   |                                                     |                  "blurInDown" |
|                   |                                                     |                  "blurInLeft" |
|                   |                                                     |                      "fillIn" |
| animationDuration | specific string (any number followed by "s" or "ms" |              "1s" or "1000ms" |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
