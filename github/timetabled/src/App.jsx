import './App.css';
import './index.css';
import Card from './Card';

const App = () => {

  return (


    <>
    <div className="headerimg">
    <img src="https://i.pinimg.com/1200x/9c/d6/e4/9cd6e47a963c2f72c6928afc497ec85f.jpg" alt="header image" />
    </div>
    
    <div className="App">
      <h1>Resources for Rising Product Designers</h1>
      <h3>Are you interested in learning more about product design? Please look at these free resources that will help you figure out where to start, helpful skills to develop for work, and how to create a hire worthy portfolio!</h3>

    </div>


    <div className="cards">
  <Card 
    title="What is Product Design?"
    image="https://miro.medium.com/1*N0R6Z46zjnJ41VoYynmXjw.jpeg"
    link="https://www.interaction-design.org/literature/topics/product-design?srsltid=AfmBOooXajJdnkCu7Bh51jZ9JVMcJs2fdmpSv-t3rDlRlGHViiQaADXX"

  />

  <Card 
    title="Designing with Figma"
    image="https://images.icon-icons.com/2699/PNG/512/figma_logo_icon_171159.png"
    link="https://www.youtube.com/watch?v=wvFd-z7jSaA"
  />

  <Card 
    title="Principle's of UX Design"
    image="https://miro.medium.com/v2/resize:fit:1400/1*NqRJpS6XN-DIlOjUlfM-WQ.jpeg"
    link="https://improvement.stanford.edu/resources/usability-principles"
  />

  <Card 
    title="The Case Study"
    image="https://www.emeraldgrouppublishing.com/sites/default/files/2019-08/person-writing.jpg"
    link="https://designlab.com/blog/ux-design-portfolio-guide"
 />

  <Card 
    title="Projects"
    image="https://www.australiancomputertraders.com.au/assets/images/Graphic%20Designer%20(1).jpg"
    link="https://ux.stackexchange.com/questions/52755/starting-a-personal-ux-project"
  />

  <Card 
    title="Fields"
    image="https://netnconnects.com/images/uploads/Abby_Mease_-_Career_Pathway_land_page_below_text.jpg"
    link="https://www.wgu.edu/blog/10-careers-in-user-experience-design2408.html"
 />

  <Card 
    title="Undergraduate Opportunities"
    image="https://t3.ftcdn.net/jpg/05/49/47/66/360_F_549476621_WKrrlOnEbATZUHxcfUuYYF8oaDUFDiwd.jpg"
    link="https://www.linkedin.com/jobs/product-design-intern-jobs-new-york/?currentJobId=4361696124"
  />

  <Card 
    title="Pursuing Product Design without a Degree"
    image="https://www.sidehustlenation.com/wp-content/uploads/2023/04/How-to-Start-a-Business-without-a-Degree.jpg"
    link="https://medium.com/@binaniyash1/how-i-become-a-product-designer-with-no-degree-and-experience-no-bs-15d06b1b5516"
  />

  <Card 
    title="Portfolios"
    image="https://revolverwarholgallery.com/wp-content/uploads/2019/05/Ads_Complete-Portfolio_stock.jpeg"
    link=""
  />

  <Card 
    title="Just do it"
    image="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/Nike_1280-20150120104711373.jpg"
    link="https://i.imgflip.com/2/8qhpet.jpg"
 />
</div>

    </>

    
    
  )

  

}

export default App