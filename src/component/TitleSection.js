import React from 'react'

export default function TitleSection({title,subtitle,description}) {
    return (
        <div>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{description}</p>
        </div>
    );
}
