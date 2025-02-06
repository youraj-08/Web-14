import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Features from './components/home-components/Route-features';
import Highlights from './components/home-components/Route-highlights';
import Testimonials from './components/home-components/Route-testimonials';
import FAQ from './components/home-components/Route-FAQ';
import Pricing from './components/home-components/Route-pricing';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/features',
        element: <Features></Features>
    },
    {
        path: '/highlights',
        element: <Highlights></Highlights>
    },
    {
        path: '/testimonials',
        element: <Testimonials></Testimonials>
    },
    {
        path: '/faq',
        element: <FAQ></FAQ>
    },
    {
        path: '/pricing',
        element: <Pricing></Pricing>
    },
    {
        path: '/home',
        element: <AuthorizeUser><Home /></AuthorizeUser>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/password',
        element: <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: '/profile',
        element: <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])



export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}
