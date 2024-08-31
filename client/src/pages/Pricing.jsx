import React from "react";
import PriceCard from "../components/PriceCard";

function Pricing() {
  const pricingPlans = [
    {
      name: "Monthly Plan",
      description: "Ideal for users who need flexibility and want to pay month-to-month.",
      price: "$29.99",
      pricingDetails: [
        "10 GB Storage",
        "500 MB Maximum File Size",
        "Standard Support",
        "Up to 5 Users for Sharing",
        "Weekly Backups",
      ],
    },
    {
      name: "Quarterly Plan",
      description: "Best value for users willing to commit for three months, with savings over the monthly plan.",
      price: "$79.99",
      pricingDetails: [
        "50 GB Storage",
        "2 GB Maximum File Size",
        "Priority Support",
        "Up to 15 Users for Sharing",
        "Daily Backups",
        "Access to Premium Features",
        "10% Discount on Storage Upgrades",
      ],
    },
    {
      name: "Yearly Plan",
      description: "Maximize your savings with our annual plan, including additional perks and discounts.",
      price: "$299.99",
      pricingDetails: [
        "200 GB Storage",
        "5 GB Maximum File Size",
        "24/7 Premium Support",
        "Unlimited Users for Sharing",
        "Real-time Backups",
        "Access to All Premium Features",
        "20% Discount on Storage Upgrades",
        "Free Custom Domain Integration",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-start">
      <div className="min-h-screen grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {pricingPlans.map((data) => (
          <PriceCard
            key={data.name}
            name={data.name}
            description={data.description}
            price={data.price}
            pricingDetails={data.pricingDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
