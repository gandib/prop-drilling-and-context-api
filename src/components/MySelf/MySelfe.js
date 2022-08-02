import React from 'react';
import Special from '../Special/Special';

const MySelfe = ({ house }) => {
    return (
        <div>
            <h2>Me</h2>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelfe;