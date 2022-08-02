import React from 'react';
import { useParams } from 'react-router-dom';

const Uncle = ({ house }) => {
    const { detail } = useParams();
    return (
        <div>
            <h2>Uncle</h2>
            <p>House: {house}</p>
            <p>post {detail}</p>

        </div>
    );
};

export default Uncle;