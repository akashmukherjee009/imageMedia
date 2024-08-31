import React from 'react'
import PriceCard from '../components/PriceCard';

function Pricing() {
  const pricingPlans = [
    {
      name: "Monthly Plan",
      description: "Ideal for users who need flexibility and want to pay month-to-month.",
      price: "$29.99"
    },
    {
      name: "Quarterly Plan",
      description: "Best value for users willing to commit for three months, with savings over the monthly plan.",
      price: "$79.99"
    },
    {
      name: "Yearly Plan",
      description: "Maximize your savings with our annual plan, including additional perks and discounts.",
      price: "$299.99"
    }
  ];
  return (

          <div className="max-w-md mx-auto bg-card shadow-lg rounded-lg overflow-hidden">
              {pricingPlans.map(data=>(
                <PriceCard key={data.name} name={data.name} description={data.description} price={data.price} />
              ))}
          </div>

  )
}

export default Pricing