import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GIT_URL
const GITTOKEN = process.env.REACT_APP_GITTOKEN


const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITTOKEN}` },
});

//SEARCH USERS FUNCTIONS
  export const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items
    // setTimeout(() => {

    // }, 2000)
  }


  //SEARCH SINGLE USER FUNCTIONS
  export const getUserAndRepos = async(login) => {

    const [ user, repos ] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data }
  }