import React from 'react';
import SearchBar from './SearchBar'
import Logo from './Logo'
import NewButton from './NewButton'
import EditForm from './EditForm'
import CamButton from './CamButton'

function Header(props) {
    return (
        <div>
            <h1>Local Tag</h1>
            <SearchBar />
            <Logo />
            <NewButton />
            <EditForm />
            <CamButton />
        </div>
    );
}

export default Header;