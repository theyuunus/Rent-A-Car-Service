import React from 'react'
import User from '../components/User/User'
import Helmet from '../components/Helmet/Helmet'

export default function user() {
    return (
        <div>
            <Helmet title="User">
                <User />
            </Helmet>
        </div>
    )
}
