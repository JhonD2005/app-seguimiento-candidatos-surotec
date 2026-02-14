import Login from '../pages/layouts/Login'
import Offers from '../pages/layouts/Offers'
import Candidates from '../pages/layouts/Candidates'
export let router = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/offers",
        element: <Offers />
    },
    {
        path: "/candidates",
        element: <Candidates />
    }
]