import { Outlet, useNavigate } from 'react-router-dom'

export const Users = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1 onClick={() => navigate('1')}>User 1</h1>
        <h1 onClick={() => navigate('2')}>User 2</h1>
        <h1 onClick={() => navigate('3')}>User 3</h1>
        <Outlet />
    </div>
  )
}
