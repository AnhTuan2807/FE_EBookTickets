import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Rating({value, text, color}) {
return (
    <div className="rating">
        <span>
            <div className="star">
                {
                    [...Array(5)].map((item,index) => {
                        if (index <= (value -1))
                            return <FontAwesomeIcon icon={faStar} style={{color: "yellow"}} key={index}/>
                        else
                            return <FontAwesomeIcon icon={faStar} key={index}/>
                    })
                }
                </div>
        </span>
        {/* <span> 
            <i style={{color}} className={  [...Array(5)].map((item,index) => {
                                    if (index <= (7.-1))
                                        return <FontAwesomeIcon icon={faStar} style={{color: "yellow"}} key={index}/>
                                    else
                                        return <FontAwesomeIcon icon={faStar} key={index}/>
                                })
                value >= 1
                    ? 'fas fa-star'
                    : value >= 0.5
                        ? 'fas da-star-half-alt'
                        :'fas fa-star'
            }>

            </i>
            
        </span>
        <span>
            <i style={{color}} className={ 
                value >= 2
                    ? 'fas fa-star'
                    : value >= 3.5
                        ? 'fas da-star-half-alt'
                        :'fas fa-star'
            }>
                
            </i>
        </span>
        <span>
            <i style={{color}} className={
                value >= 3
                    ? 'fas fa-star'
                    : value >= 4.5
                        ? 'fas da-star-half-alt'
                        :'fas fa-star'
            }>
                
            </i>
        </span> */}

        <span>{text&&text}</span>
    </div>
)
}

export default Rating