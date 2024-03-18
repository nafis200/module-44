import Singleprice from "./Singleprice";


const Price = () => {
  
    const priceOptions = [
        {
          "id": 1,
          "name": "Bronze Membership",
          "price": 29.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": 49.99,
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Sauna and steam room access"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": 69.99,
          "features": [
            "Access to all gym facilities including swimming pool",
            "Personalized workout plans",
            "Complimentary towel service",
            "Discounts on additional services"
          ]
        },
        {
          "id": 4,
          "name": "Platinum Membership",
          "price": 99.99,
          "features": [
            "Priority access to all gym facilities",
            "Dedicated personal trainer",
            "Luxury locker room with amenities",
            "Exclusive member events"
          ]
        }
      ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in town</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                
            {
                priceOptions.map(option => <Singleprice key={option.id} option={option}></Singleprice> )
            }

            </div>
        </div>
    );
};

export default Price;