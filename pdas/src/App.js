import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                img={AlexaImg}
                description="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-3">
              {" "}
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                img={CortanaImg}
                description="Cortana was created by Microsoft.Who knows what it does?"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@Siri"
                img={SiriImg}
                description="Siri was created by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
