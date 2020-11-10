import React, { useEffect, useState } from 'react';
import axios  from 'axios'
import { PropTypes } from 'prop-types';

const Chart = ({type, title, labels, data }) => {
    
    //The base url we're using for GET request
    const baseURL = "https://quickchart.io/chart";

    //State hook to store the IMG URL after HTTP request
    const [chartImgURL, setChartImgURL] = useState();

    //State hook to store the params which will be render to out HTTP request
    const [c,setC] = useState({
        //The default parameters if nothing is passed via props
        type : type ? type : "bar",
        data:{
            labels: labels ? labels : ["Jan","Feb","Mar","Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets:[
                {
                    label: title ? title : "Account: 93007",
                    data: data ? data : [1,2,3,4,5,6,7,8,9,10,11,12]
                }
            ]
        }})
        
        
    useEffect(()=>{

        //Set the state "chartImgURL" if is not. Used when the page load for the first time.
        if(!chartImgURL){
            axios.get(baseURL, {params: {
                c,
                }, responseType: 'arraybuffer' })
        .then(response => {
            let blob = new Blob(
                [response.data], 
                { type: response.headers['content-type'] }
            )
            let image = URL.createObjectURL(blob)
            setChartImgURL(image)
            })
        }

    })
    
    //The axios request when user changes the graph params
    const request = async() =>{
            axios.get(baseURL, {params: {
            c,
            }, responseType: 'arraybuffer' })
    .then(response => {
        let blob = new Blob(
            [response.data], 
            { type: response.headers['content-type'] }
        )
        let image = URL.createObjectURL(blob)
        setChartImgURL(image)
        })
        }
    
    return ( 
    //The chart component UI 
    <div>
        {/* The chart image */}
        <img alt={c.data.datasets[0].label} src={chartImgURL}></img>

        {/* The options to change the chart vision */}
        <select onChange={(event)=>setC({...c, type: event.currentTarget.value})}>
            <option  value="bar">bar</option>
            <option  value="line">line</option>
        </select>

        {/* The button to proceed the request */}
        <button onClick={()=>request()}>Click</button>
    </div> );
}

Chart.propTypes={
    type: PropTypes.string,
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.number)
}
 
export default Chart;