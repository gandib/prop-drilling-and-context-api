import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>House: {house}</p>
            {/* <p>Gift : {ornament}</p> */}
            {house >= 4 && <button onClick={() => setHouse(house + 1)}>Buy A House</button>}
        </div>
    );
};

export default Special;