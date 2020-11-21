import React from 'react'
import PriceProp from './InterfacesPrice'

interface Props{
    pricing: PriceProp[];
}

const Pricing:React.FC<Props> = ({pricing}:Props) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <h3>Choose Your Dedicated Team</h3>
                </div>
            </div>
            <div className="row">
                {
                    pricing.map(price=>{
                        return(
                            <div className="col-lg-4">
                                <h1>{price.price}</h1>
                                <h4>{price.type}</h4>
                                <div className="perks">
                                    <ul>
                                        {
                                            price.perks.map(perk=>{
                                                return(
                                                    <li>{perk}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {
                                    price.type==='For Preferred' && (
                                        <button className="btn">Order Now</button>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pricing
