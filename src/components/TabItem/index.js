import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTab(tabId)
  }

  const tabButtonClass = isActive ? 'active' : 'in-active'

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={tabButtonClass}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
