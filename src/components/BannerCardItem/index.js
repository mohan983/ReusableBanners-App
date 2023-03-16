import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, className, description} = bannerCardsList

  return (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
