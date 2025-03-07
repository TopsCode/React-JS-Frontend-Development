import React, { Component } from 'react'

export default class CHILDClass_Example1 extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                            this.props.products.map((e,i)=>(
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
