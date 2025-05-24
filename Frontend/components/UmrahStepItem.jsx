const UmrahStepItem = ({ data, isFinal }) => {
    const { title, image, imageAlt, instructions, note, dua } = data;
  
    return (
      <div className="step-card">
        <div className="step-heading">
          <span className="step-icon">📍</span>
          <h3>{title}</h3>
        </div>
        <div className="step-details">
          <div className="step-image">
            <img src={image} alt={imageAlt} />
          </div>
          <div className="step-instructions">
            <h4>{instructions.title}</h4>
            <ol>
              {instructions.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            {dua && (
              <>
                <div className="dua-text">{dua.arabic}</div>
                {dua.translation && <div className="dua-translation">{dua.translation}</div>}
              </>
            )}
            {note && (
              <div className="important-note">
                <span className="note-icon">📖</span>
                <p>{note}</p>
              </div>
            )}
            {isFinal && (
              <div className="final-note">
                <h4>Congratulations! Your Umrah is now complete.</h4>
                <p>May Allah accept your Umrah and reward you for your devotion.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default UmrahStepItem;  