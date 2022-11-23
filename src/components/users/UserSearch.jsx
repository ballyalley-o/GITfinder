import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
    const [ text, setText ] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleSearch = (e) => setText(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text === '') {
            setAlert('Nothing to search', 'error')
        } else {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="content-center">
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search ya fella Gitters"
                value={text}
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Launch
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );

}

export default UserSearch