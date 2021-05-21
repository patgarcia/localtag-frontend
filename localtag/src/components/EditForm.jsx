import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import UserNavigation from './UserNavigation'

function EditForm(props) {

    const apiURL = process.env.REACT_APP_API_URL;

    const [postURL, setPostURL] = useState(null)

    const location = useLocation();
    useEffect(() => {
        setPostURL('/'+location.pathname.slice(1).split('/').shift());
    }, [location])


    function handlePost(ev) {
        ev.preventDefault();
        const data = new FormData(ev.target);
        const formData = Object.fromEntries(data.entries());
        console.log(JSON.stringify(formData));
        fetch(`${apiURL}${postURL}`, {
          method: "post",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.status)
          .then((status) => {
              console.log(status);
              return status
            })
      }

    return (
        <div>
            <UserNavigation />

            <p>{ postURL ? postURL : 'no url' }</p>
            <button>Outside of form</button>
            <form onSubmit={handlePost}>
                <input type='text'></input>
                <button>Edit</button>
            </form>
        </div>
    );
}

export default EditForm;
