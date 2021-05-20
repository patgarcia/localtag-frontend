import React, { useEffect, useState } from 'react';

function Image({match}) {

    console.log(match.params.id)

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/images/${match.params.id}`)
        .then(data => data.json())
        .then(jsonData => setImage(jsonData))
    }, [])

    return (
        image && <div>
            <img alt={image.description} src={image.hq_image_url} />
        </div>
    );
}

export default Image;