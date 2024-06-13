import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{props.heading}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">{props.about}</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>{props.btntext}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
