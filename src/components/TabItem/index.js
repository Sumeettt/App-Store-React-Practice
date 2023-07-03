// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, isActive, onTabChange} = props
  const {tabId, displayText} = eachTab

  const onChangingTab = () => {
    onTabChange(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onChangingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
