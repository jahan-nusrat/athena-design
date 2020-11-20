import React from 'react'
import AchieveProp from './InterfacesAchieve'

interface Props{
    achievements: AchieveProp[]
}

const Achievements:React.FC<Props> = ({achievements}:Props)=>  {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h3>Our Achievements</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        {
                            achievements.map((achievement)=>{
                                return(
                                    <div className="col-lg-6">
                                        <div className="achieve-box d-flex align-items-center">
                                            <img src={achievement.icon} alt={achievement.info}/>
                                            <div className="achieve-description">
                                                <h2>{achievement.count}</h2>
                                                <p>{achievement.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
