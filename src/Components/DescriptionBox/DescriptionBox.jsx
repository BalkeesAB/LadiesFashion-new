import React from 'react'
import './DescriptionBox.scss'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ladies' fashion e-commerce has revolutionized the way women shop for clothing,
                accessories, and beauty products. With the rise of online platforms, shoppers
                can now explore a vast range of styles from the comfort of their homes.
                E-commerce fashion brands offer everything from casual wear to high-end couture,
                catering to diverse tastes, sizes, and budgets.</p>
                <p> Personalized recommendations, virtual try-ons, and AI-driven styling 
                services enhance the shopping experience, making it easier for customers to find
                outfits that suit their preferences. Additionally, social media influencers and 
                fashion bloggers play a crucial role in shaping trends, driving traffic to e-commerce
                sites through collaborations and digital marketing strategies.</p>
        </div>
    </div>
  )
}

export default DescriptionBox