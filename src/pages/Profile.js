import React from 'react';
import { procuraGithub } from '../services/github'

class Profile extends React.Component{
  state = {}

  async componentDidMount() {
    const {username} = this.props.match.params
    const user = await procuraGithub(username)

    this.setState({ ...user })
  }

  render() {
    const user = this.state

    console.log(user)
    return (
      <div>
        <img src={user.avatar_url} width={200} height={200} />
        <div>Username</div>
      </div>

    )
  }
}

export default Profile;
