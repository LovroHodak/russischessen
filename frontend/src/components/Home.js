import React from 'react'

export default function Home({ foods }) {
    return (
        <div>
            <h2>Home</h2>
            <div>
                {
                    foods.map((food, i) => {
                        return (<div key={i} style={{border: '1px solid black'}}>
                            <p><b>Name:</b> {food.name}</p>
                            <p><b>Description:</b> {food.description}</p>
                            <p><b>Price:</b> {food.price} €</p>
                            <img src={food.imageUrl} alt={food.name} style={{width:'200px'}} />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
