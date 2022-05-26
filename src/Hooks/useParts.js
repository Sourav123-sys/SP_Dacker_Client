import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {

        const url = `https://salty-reef-27679.herokuapp.com/parts`
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts, setParts]
};

export default useParts;