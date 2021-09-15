import "../style/navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <a href="/"><img
          className="profile-picture"
          src="https://pbs.twimg.com/profile_images/1331805142593589249/S00bozLg.jpg"
          alt="Zainal Abidin"
        /></a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/awards">Awards</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/interest">Interest</a>
          </li>
        </ul>
      </div>
    </>
  );
};
