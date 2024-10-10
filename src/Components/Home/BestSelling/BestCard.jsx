import React from 'react'
import starSvg from '../../../assets/star.svg'

const BestCard = (props) => {
  return (
    <div>
        {/*Product Cover*/}
        <div>
            <img source={props.imgSource}/>
        </div>
        {/* Product Description */}
        <div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <div>{props.price} |</div>
                <div>
                    <p>{props.ratings}</p>
                    <img source={starSvg}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestCard