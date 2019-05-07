const procuraGithub = async (username) => {
  const ghUrl = `https://api.github.com/users/${username}`;
  const response = await fetch(ghUrl)
  const user = await response.json()

  return user;
}

export {
  procuraGithub
}
