import React from 'react';
import Header from './components/Header'
import Info from './components/Info'

class App extends React.Component {
  state = {
    username: ""
  }

  procuraGithub = async () => {
    const { username } = this.state
    const ghUrl = `https://api.github.com/users/${username}`;
    const response = await fetch(ghUrl)
    const {login, html_url, name, public_repos} = await response.json()

    this.setState({ login, html_url, name, public_repos })
  }

  onChange = (evento) => {
    this.setState({ username: evento.target.value })
  }

  render() {
    const { username, login, html_url, name, public_repos } = this.state
    const subtitle = "Encontre repositórios, seguidores e mais apenas pelo nome de usuário"

    return (
      <div className="container">
        <Header title="Github Fetch" subtitle={subtitle} />
        <input onChange={this.onChange} value={username} className="search-bar" type="text"/>
        <button onClick={this.procuraGithub}>Procurar</button>
        {
          login && (
            <Info
              login={login}
              html_url={html_url}
              name={name}
              public_repos={public_repos}
            />
          )
        }
      </div>
    );
  }
}

export default App;
