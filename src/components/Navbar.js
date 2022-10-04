import React from 'react'

const Navbar = () => {
 return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsMonkey</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a> </li>
                            <li className="nav-item"><a className="nav-link" href="/about">business</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">general</a></li>
                          <li className="nav-item"><a className="nav-link" href="/about">health</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">science</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">sports</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">technology</a></li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar



