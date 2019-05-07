import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Info from '../components/Info';
import { procuraGithub } from '../services/github'

class App extends React.Component {
  state = {
    username: ""
  }

  handleGithub = async () => {
    const { username } = this.state
    const { login, html_url, name, public_repos } = await procuraGithub(username)

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
        <button onClick={this.handleGithub}>Procurar</button>
        {
          login && (
            <>
            <Info
              login={login}
              html_url={html_url}
              name={name}
              public_repos={public_repos}
            />
            <Link to={`/profile/${username}`}><button>Ir para o Perfil</button></Link>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
