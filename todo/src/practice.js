import React, { useState, useEffect } from 'react'

//use effect to run something as its loading/updating
function App() {
    //initializing state
    //setcounter will be the function
    const [counter, setCounter] = useState(0)
    const [posts, setPost] = usePost([])

    useEffect(() => {
        //fetch request, get data, display
        fetch('url')
            .then(response => respone.json())
            .then(result => {
                setPosts(results)
            }) 
    },[])
    //stopping the infinite loop because there is no dependency, calling once. 

    const handleIncrementClick = () => {
        setCounter(counter + 1)
    }

    const handleDecrementClick = () => {
        setCounter(counter - 1)
    }

    const postItems = posts.map(post => {
        return (
            <li key={post.id}>{post.title}</li>
        )
    })

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
            <ul>
            {postItems}
            </ul>
        </div>
    )
}

export default App
