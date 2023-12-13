// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, changeIdFunction, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const onClickThumbnail = () => {
    changeIdFunction(id)
  }
  const opacityClassName = isActive ? 'hidden-content' : ''

  return (
    <li>
      <button onClick={onClickThumbnail} type="button">
        <img
          src={thumbnailUrl}
          className={`thumbnail-image ${opacityClassName}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
