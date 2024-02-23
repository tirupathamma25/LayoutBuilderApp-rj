import './index.css'

const ConfigurationController = () => (
  <div className="controller-container">
    <h1 className="controller-heading">Layout</h1>
    <input type="checkbox" id="content" />
    <label htmlFor="content" className="label-text">
      Content
    </label>
    <br />
    <input type="checkbox" id="leftNavbar" />
    <label htmlFor="leftNavbar" className="label-text">
      Left Navbar
    </label>
    <br />
    <input type="checkbox" id="rightNavbar" />
    <label htmlFor="rightNavbar" className="label-text">
      Right Navbar
    </label>
  </div>
)

export default ConfigurationController
