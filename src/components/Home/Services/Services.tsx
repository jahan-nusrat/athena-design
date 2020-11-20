import React from 'react'
import ServiceProp from './Interfaces'

interface Props{
    services: ServiceProp[]
}

const Services:React.FC<Props> = ({services}:Props) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <h3>What we do</h3>
                    <p>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                </div>
            </div>
            <div className="row">
                {
                    services.map(service =>{
                        return (
                            <div className="col-lg-3 text-center" key={service.id}>
                                <img src={service.icon} alt={service.title}/>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
