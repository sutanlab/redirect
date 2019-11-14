import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import links from './links.json'

const Redirect = ({ match: { params } }) => {
    const link = links.find(link => link.id === params.id)
    
    if (link) {
        document.title = 'Redirecting...'

        setTimeout(() => {
            window.location.href = link.url
        }, 1500)

        return (
            <>
                <h4>Going to {link.name}</h4>
                <h3>Please wait...</h3>
            </>
        )
    }
    
    return (
        <>
            <h4>Oops, redirect parameter <em>{params.id}</em> is not found.</h4>
        </>
    )
}

const Index = () => (
    <>
        <div style={{ display: 'none' }}>
            {links.map(link => <Link to={`/${link.id}`}>{link.name}</Link>)}
        </div>
        <h4>Redirect will work after url has id paramater. Example: /:id</h4>
    </>
)

export default () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Index} />
        <Route path="/:id" component={Redirect} />
    </BrowserRouter>
)
