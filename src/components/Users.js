import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUser = searchParams.get('filter') === 'active';
  return (
    <div>
        <h1 onClick={() => navigate('1')}>User 1</h1>
        <h1 onClick={() => navigate('2')}>User 2</h1>
        <h1 onClick={() => navigate('3')}>User 3</h1>
        <Outlet />
        <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active User</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUser ? <h1>Showing active user</h1> : <h1>Showing all users</h1>
        }
    </div>
  )
}
