import './index.css'

const ImageItem = props => {
  const {imageDetails, checkMatch} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickMatch = () => {
    checkMatch(id)
  }

  return (
    <li className="image-item-container">
      <button className="image-button" type="button" onClick={onClickMatch}>
        <img className="image-item-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
