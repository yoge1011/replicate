import React from 'react'
import './user.style.scss'
import UserCard from '../../components/user/user-card/user-card.component'
import UserTab from '../../components/user/user-tab/user-tab.component'
import ProfileComponent from '../../components/user/profile/profile.component'
import { Route, withRouter } from 'react-router-dom'
import UserHightlight from '../../components/user/user-hightlight/user-hightlight.component'
import ClapsComponent from '../../components/user/claps/claps.component'
import { usersData } from '../../data/user.data'
import UserHeader from '../../components/user/header/user-header.component'

const User = ( { match } ) => {
    const user = usersData.filter(user => user.id == match.params.id)[0];
    return (
        <div className='user-page'>
            <UserHeader />
            <UserCard user={user} />
            <UserTab user={user} match={match} />
            <Route exact path="/user/:id" component={ ProfileComponent } />
            <Route path="/user/:id/claps" component={ ClapsComponent } />
            <Route path="/user/:id/highlights" component={ UserHightlight } />
        </div>
    )
}

export default withRouter(User);