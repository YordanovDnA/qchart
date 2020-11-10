import React, { useEffect, useState } from 'react'; 
import {PropTypes} from "prop-types";
import QuickChart from "quickchart-js"
import ReactImageAppear  from 'react-image-appear';

const QChart = ({type, title, labels, data, animation, animationDuration}) => {

    //The chart URL that will be used for the HTTP request will be stored here
    const [chartURL, setChartURL] = useState();

    //The base values if nothing or any of the parameters required is not passed via props we're using these:
    const baseType = "line";
    const baseLables = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec" ];
    const baseTitle = `${new Date().getFullYear()-1} customers report`;
    const baseData = [1540, 1820, 2200, 1700, 1880, 1900, 2500, 2705, 2000, 1650, 2560, 2910];

    //Function that returns new chart URL by given parameters
    const createChart = (type, title, labels, data) => {
        const myChart = new QuickChart();
        myChart.setConfig({
            type,
            data: { labels, datasets: [{ label: title, data }] },
        }).setBackgroundColor("transparent");

        return myChart.getUrl()
    }


    useEffect(()=>{
        //Check if the chartURL is not set and calling the createChart to get a URL to set the chart URL
        if(!chartURL){
            setChartURL(createChart(
                type ? type : baseType,
                title ? title : baseTitle,
                labels ? labels : baseLables,
                data ? data : baseData,
            ))
        }
    },[createChart])

    return ( 
        <React.Fragment>
            {chartURL ? <ReactImageAppear placeholderStyle={{background: "transparent"}} animation={animation && animation} animationDuration={animationDuration && animationDuration} src={chartURL} alt={title ? title : baseTitle} /> :"Loading..." }
        </React.Fragment>
        
     );
}

QChart.propTypes={
    // Type of the chart: "line"(By default), "bar", "pie", "radar", "doughnut" 
    type: PropTypes.string,
    // Title is the lable/name of the chart/data
    title: PropTypes.string,
    //Lables are the names underneath
    labels: PropTypes.arrayOf(PropTypes.string),
    //Data is an array of numbers represents each month(by default) or label of lables if provided. 
    data: PropTypes.arrayOf(PropTypes.number),
    /*Animation: "fadeIn" (default), "fadeInUp", "fadeInRight", "fadeInDown", "fadeInLeft", "bounceIn", "bounceInUp",
    "bounceInRight", "bounceInDown", "bounceInLeft", "flipInX", "flipInY", "zoomIn", "blurIn", "blurInUp", "blurInRight", "blurInDown","blurInLeft", "fillIn" */
    animation: PropTypes.string,
    //Adnumation duration: "1s" (default), string "1s"/ "1000ms"
    animationDuration: PropTypes.string
}
 
export default QChart;