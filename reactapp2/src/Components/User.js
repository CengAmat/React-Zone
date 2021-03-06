import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    state = {
        isVisible: false
    }

    static  defaultProps = {
        name: "No Info",
        department: "No Info",
        salary: "No Info"
    }

    onClickEvent = (e) => {
        this.setState({ 
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (e) => {
        const { id, deleteUser } = this.props;

        deleteUser(id);
    }

    render() {
        // Destructuring
        const { name, department, salary } = this.props;
        const { isVisible} = this.state;

        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick = {this.onClickEvent} >{name}</h4>
                        <i onClick = {this.onDeleteUser} className = "fas fa-chess-knight" style = {{ cursor: "pointer"}}></i>
                    </div>
                    {
                        isVisible ? 
                        <div className="card-body">
                            <p className="card-text">Department : {department}</p>
                            <p className="card-text">Salary : {salary}</p>
                        </div> : null
                    }
                </div>    
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}

// User.defaultProps = {
//     name: "No Info",
//     department: "No Info",
//     salary: "No Info"
// }

export default User;