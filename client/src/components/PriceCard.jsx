import React from 'react'

const PriceCard = (props) => {
  return (
    <div className="bg-primary text-primary-foreground p-4">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p className="text-sm">{props.description}</p>
        <p className="text-2xl font-semibold my-4">{props.price}</p>
        <button className="bg-primary-foreground text-primary rounded-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground">Select</button>
    </div>

  )
}

export default PriceCard
