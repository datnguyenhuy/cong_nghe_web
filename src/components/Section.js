import React , {Component} from 'react'
import './css/Section.css'
import {Route} from 'react-router-dom'
import Product from './section/Product'
import Detail from './section/Detail'

class Section extends Component{
    render(){
        return(
            <section>
                <Route path="/" component={Product} exact></Route>
                <Route path="/productmanage" component={Product} exact></Route>
                <Route path="/productmanage/:id" component={Detail}></Route>
            </section>
        );
    }
}
export default Section;