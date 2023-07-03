// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appId, appName, imageUrl, category} = eachAppItem

  return (
    <li className="each-app-container">
      <img className="app-icon" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
