import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions';
import UserRow from './UserRow';
import '../styles/usertable.css';

class _UsersTable extends React.Component {
  state = {
    selectedUsers: 0,
    selectedAll: false
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.init(nextProps)
    }
  }

  init = (props) => {
    const { users } = props
    let selectedUsers = 0

    users.forEach((user) => {
      if (user.selected === true) {
        selectedUsers ++
      }
    })

    this.setState({
      selectedUsers,
      selectedAll: selectedUsers === users.length
    })
  }

  toggleSelectAll = (event) => {
    const { selectedAll } = this.state

    if (selectedAll) {
      this.props.deselectAllUsers()
    } else {
      this.props.selectAllUsers()
    }
  }

  render() {
    const { users } = this.props
    const { selectedUsers, selectedAll } = this.state

    return (
      <div>
        <div className="d-flex align-items-center mb-3">
          <i className="table-logo-icon fa fa-user-circle-o mr-3"></i>
          <span className="table-logo-title mr-auto">Users</span>
          <span className="table-about-text text-muted">{selectedUsers} selected</span>
          <i className="table-about-icon text-muted fa fa-question-circle-o ml-4"></i>
        </div>

        <table className="usertable table table-hover">
          <thead>
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-0"
                    className="custom-control-input"
                    checked={selectedAll}
                    onChange={this.toggleSelectAll}
                  />
                  <label className="custom-control-label" htmlFor="checkbox-0" onClick={(event) => {event.stopPropagation()}}/>
                </div>
              </th>
              <th>TYPE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>TELEPHONE</th>
              <th className="text-right">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {users.map( (user, index) => (
              <UserRow key={index} user={user}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users
  }
}

const UsersTable = connect(mapStateToProps, actions)(_UsersTable)

export default UsersTable
