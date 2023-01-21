const myface =
  "https://raw.githubusercontent.com/MSalim16/MSPortfolio-React/main/src/images/MSALIMPICTURE%20WORK.jpeg";

function HomePage() {
  return (
    <div className="Home-Page">
      <div class="landingcoloumn">
        <h1 class="fullstack">
          Full Stack <br></br>Developer<span class="fullstop">.</span>
        </h1>
        <h2 class="subheading">
          I like to craft solid and scalable full stack products with great
          <br></br> user experiences.
        </h2>
      </div>
      <img class="landingpfp" src={myface}></img>
    </div>
  );
}

export default HomePage;
