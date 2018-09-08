import React,{ Component } from 'react';
import axios from 'axios';

import {Link} from "../containers/Home_container";

class Pages extends Component {

    state = {
        users: [],
        loading:false
    }
   componentWillMount(){
       this.setState({
           loading:true
       })
        let i = this.props.match.params.id;
        this.request((i - 1) * 5, (i * 5))
    }
    componentWillUpdate(){
        let i = this.props.match.params.id;
        this.request((i - 1) * 5, (i * 5))

    }
    componentWillUnmount(){
       this.setState({
           users:[],
           loading:false
       })
    }
    request=(start,end)=>{
        axios.get(`http://localhost:3004/users?_start=${start}&_end=${end}`)
            .then(response =>{
                this.setState({
                    users:[...response.data]
                })
            })
    }


    render(){
       console.log(this.props)
        return (
            <div>

                {this.state.users && this.state.users.length > 0 && this.state.loading ?
                    this.state.users.map( (item,i) => (
                            <div key={i}>
                                {item.name}<br/>
                                {item.desc}
                            </div>
                        )) : <div>loading</div>
                }

            </div>
        );
    }
};


export default Pages;
