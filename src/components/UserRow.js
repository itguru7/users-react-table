import React from 'react';
import { connect } from 'react-redux'
import Switch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';

import * as actions from '../actions';

class _UserRow extends React.Component {
  state = {
    selected: false
  }

  onToggleUserStatus = () => {
    const { user } = this.props

    this.props.toggleUserStatus(user)
  }

  onToggleUserSelect = (event) => {
    const { user } = this.props

    this.props.toggleUserSelect(user.id)
  }

  renderUserType = () => {
    const { user } = this.props
    const type_code = user.type.slice(0, 2).toLowerCase();
    return <span className={`usertype usertype-${type_code}`}>{type_code}</span>
  }

  render() {
    const { user } = this.props

    return (
      <tr
        onClick={this.onToggleUserSelect}
      >
        <td>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id={`checkbox-${user.id}`}
              className="custom-control-input"
              checked={user.selected}
              onChange={this.onToggleUserSelect}
              onClick={(event) => {event.stopPropagation()}}
            />
            <label className="custom-control-label" htmlFor={`checkbox-${user.id}`}/>
          </div>
        </td>
        <td>{this.renderUserType()}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td className="text-right">
          <Switch
            onClick={this.onToggleUserStatus}
            on={user.active}
          />
        </td>
      </tr>
    )
  }
}

const UserRow = connect(null, actions)(_UserRow)

export default UserRow
