import React, { Component } from 'react';

import { routerReducer } from "react-router-redux";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Pager} from 'react-bootstrap';
import {allPages} from '../actions';

class HomeContainer extends Component {
    componentWillMount() {
        this.props.allPages();
    }
// noinspection JSAnnotator
    arrayPages=(PL)=>{
        let arrayPages=[];
        for(let i=1;i<=PL;i++){
            arrayPages.push(i);
        }
        return arrayPages;
    }
    render(){
        const pagesLength=this.props.pages? this.props.pages.length/5 : null;
        const pagesArray=this.arrayPages(pagesLength);
        return (
                <div>
                    {pagesArray && pagesArray.length > 0 ?
                        pagesArray.map( i => (
                            <Link to={`/artist/${i}`} key={i} className="artist_item" >

                                <div>
                                    {i}
                                </div>

                            </Link>
                        )) : null
                    }
                </div>
        )
    }

}

function mapStateToProps(state){
    return{
        pages:state.pages.pagesList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({allPages},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)