import React from 'react';
import Brother from '../Brother/Brother';
import MySelfe from '../MySelf/MySelfe';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House: {house}</p>
            <div style={{ display: 'flex' }}>
                <MySelfe house={house}></MySelfe>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;