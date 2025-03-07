import React, { Component } from 'react'
import CHILDClass_Example1 from './CHILDClass_Example1'

export default class PARENTClass_Example1 extends Component {
    products = [
        { id : 1, name : "TV", price : 45000},
        { id : 2, name : "AC", price : 75000},
        { id : 3, name : "Fridge", price : 105000},   
        { id : 4, name : "Mobile", price : 15000},
    ]

  render() {
    return (
      <div>
            <CHILDClass_Example1 products={this.products} />
      </div>
    )
  }
}
