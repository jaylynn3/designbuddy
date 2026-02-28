import './App.css';
import './index.css';
import Card from './Card';

const App = () => {

  return (


    <>
    <div className="headerimg">
    <img src="https://i.pinimg.com/736x/d9/ab/30/d9ab30a2a9928930d9d016fa14dd5c8f.jpg" alt="header image" />
    </div>
    
    <div className="App">
      <h1>Resources for Rising Product Designers</h1>
      <h3>Are you interested in learning more about product design? Please look at these free respurces that will help you figure out where to start, helpful skills to develop for work, and how to create a hire worthy portfolio!</h3>

    </div>


    <div className="cards">
  <Card 
    title="What is Product Design?"
    image="https://miro.medium.com/1*N0R6Z46zjnJ41VoYynmXjw.jpeg"
  />

  <Card 
    title="Designing with Figma"
    image="https://images.icon-icons.com/2699/PNG/512/figma_logo_icon_171159.png"
  />

  <Card 
    title="Principle's of UX Design"
    image="https://miro.medium.com/v2/resize:fit:1400/1*NqRJpS6XN-DIlOjUlfM-WQ.jpeg"
  />

  <Card 
    title="The Case Study"
    image="https://www.emeraldgrouppublishing.com/sites/default/files/2019-08/person-writing.jpg"
  />

  <Card 
    title="Projects"
    image="https://www.australiancomputertraders.com.au/assets/images/Graphic%20Designer%20(1).jpg"
  />

  <Card 
    title="Fields"
    image="https://netnconnects.com/images/uploads/Abby_Mease_-_Career_Pathway_land_page_below_text.jpg"
  />

  <Card 
    title="Undergraduate Opportunities"
    image="https://t3.ftcdn.net/jpg/05/49/47/66/360_F_549476621_WKrrlOnEbATZUHxcfUuYYF8oaDUFDiwd.jpg"
  />

  <Card 
    title="Pursuing Product Design without a Degree"
    image="https://www.sidehustlenation.com/wp-content/uploads/2023/04/How-to-Start-a-Business-without-a-Degree.jpg"
  />

  <Card 
    title="Portfolios"
    image="https://revolverwarholgallery.com/wp-content/uploads/2019/05/Ads_Complete-Portfolio_stock.jpeg"
  />

  <Card 
    title="Just do it"
    image="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/Nike_1280-20150120104711373.jpg"
  />
</div>

    </>

    
    
  )

  

}

export default App