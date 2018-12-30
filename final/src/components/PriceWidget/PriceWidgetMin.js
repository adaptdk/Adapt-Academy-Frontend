import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';








class PriceWidgetMin extends Component {

    state = {
        data: []
     }

     componentDidMount(){
        const cc = require('cryptocompare');
        cc.setApiKey('<aa43a9bda4f440a921423c698736fd07d38ed6a5f43dddd1418926ef18f82a13>');

        cc.histoMinute(
            'BTC',
            'EUR',
            {
                toTs : Date.now(),
                limit : 10,
            })
            .then(result => {
                this.setState({
                    data: result
                })
            // .catch(console.error);
        });

     }

    render() {

        const { data } = this.state;

        const price = data.map((high,index) => {
            
        });

        return (
            <React.Fragment>
            <LineChart
                axes
                margin={ {top: 10, right: 10, bottom: 50, left: 50} }
                axisLabels={ {x: 'My x Axis', y: 'My y Axis'} }
                width={ 750 }
                interpolate={ 'cardinal' }
                height={ 300 }
                data={ [
                [
                    { x: 1, y: 20 },
                    { x: 2, y: 10 },
                    { x: 3, y: 25 }
                ],
                ] }
            />
            <div>{ console.log(data) }</div>
            </React.Fragment>
         );
    }
}

export default PriceWidgetMin;