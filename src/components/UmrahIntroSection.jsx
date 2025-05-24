const UmrahIntroSection = () => (
    <div className="umrah-intro-section">
      <div className="intro-header">
        <h1>Umrah Guide: Step by Step</h1>
        <p>A comprehensive guide to performing Umrah rituals correctly</p>
      </div>
      <div className="what-is-umrah">
        <h2>What is Umrah?</h2>
        <p>
          Umrah is a voluntary pilgrimage to the Holy Kaaba in Makkah that can be performed at any time of the year.
        </p>
      </div>
      <div className="video-guide">
        <h2>Learn Umrah with Video Guide</h2>
        <div className="video-container">
          <iframe 
            width="100%" height="400" 
            src="https://www.youtube.com/embed/qZ9n4V9lZkE" 
            title="Umrah Guide Video"
            frameBorder="0"
            allowFullScreen 
          />
        </div>
      </div>
    </div>
  );
  
  export default UmrahIntroSection;
  