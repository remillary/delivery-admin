import React, { Fragment } from 'react'
import LoginPage from '../LoginPage'
import AdminPanel from '../AdminPanel'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/login-actions'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.props.checkAuth()
    }

    render() {

        return (
            <BrowserRouter>
                <Fragment>
                    { this.props.isLoggedIn ? <AdminPanel/> : <LoginPage/> }
                </Fragment>
            </BrowserRouter>
        )
    }

}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)