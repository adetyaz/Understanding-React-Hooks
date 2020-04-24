import React, { Component } from 'react';

class RenderData extends Component {

    state = {
        data: []
        }

    componentDidMount(){
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(data => this.setState(() => {
            return { data };
          })
        );
    }
    render() {
        const {data} = this.state
        console.log(data);
        return (
            <div>
              {
                data.map(datum =>(<h1 key={datum.id}>{datum.name}</h1>))
            } 
            </div>
        );
    }
}

export default RenderData;