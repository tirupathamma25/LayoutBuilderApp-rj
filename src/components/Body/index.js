import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="left-navbar">
      <h1 className="body-heading">Left Navbar Menu</h1>
      <ul>
        <p className="body-paragraph">Item 1</p>
        <p className="body-paragraph">Item 2</p>
        <p className="body-paragraph">Item 3</p>
        <p className="body-paragraph">Item 4</p>
      </ul>
    </div>
    <div className="content-card">
      <h1 className="body-heading">Content</h1>
      <p className="body-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidedunt ut labore et dolore magna aligua. Ut enim ad minim
        veniam.
      </p>
    </div>
    <div className="left-navbar">
      <h1 className="body-heading">Right Navbar</h1>
      <button type="button" className="ad-1">
        Ad 1
      </button>
      <button type="button" className="ad-1">
        Ad 2
      </button>
    </div>
  </div>
)

export default Body
