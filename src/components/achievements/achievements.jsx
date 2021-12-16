import "./achievements.scss";

export default function Achievements() {
  // const data = [
  //   {
  //     id: 2,
  //     img: "/assets/images/achievements/gold-medal.svg",
  //     icon: "assets/linkedin.png",
  //     link: "#",
  //     desc: "Gold Medalist in BS Software Engineering.",
  //   },
  //   {
  //     id: 1,

  //     img: "/assets/images/achievements/aws.svg",
  //     icon: "assets/linkedin.png",
  //     link: "https://www.credly.com/badges/1c82f4d7-9f72-4eea-b2d0-b63515aa41c6",
  //     desc: "85% marks achieved in AWS Certified Cloud Practitioner.",
  //   },

  //   {
  //     id: 3,
  //     img: "/assets/images/achievements/stackoverflow.svg",
  //     icon: "assets/linkedin.png",
  //     link: "https://stackoverflow.com/users/9572033/mabdullahse",
  //     desc: " Scored with 1.9K+ points on Stack overflow.",
  //   },
  //   {
  //     id: 4,
  //     img: "/assets/images/achievements/medium.svg",
  //     icon: "assets/linkedin.png",
  //     link: "https://mabdullahse.medium.com/",
  //     desc: "Medium Blogs exceeds 3K+ reads.",
  //   },

  //   {
  //     id: 5,
  //     img: "/assets/images/achievements/angular.svg",
  //     icon: "assets/linkedin.png",
  //     link: "https://www.npmjs.com/package/angular-file-validator",
  //     desc: "Author of Angular package which cross 3k+ downloads.",
  //   },
  // ];
  return (
    <div className="achievements" id="achievements">
      <h1>Achievements</h1>
      <div className="container">
        <img
          className="user"
          src="/assets/images/achievements/achievements.svg"
          alt="achievements"
        />
        {/* {data.map((d) => (
          <a className="card" target="_blank" href={d.link} rel="noreferrer">
            <div className="left">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="right">
              <p>{d.desc}</p>
            </div>
          </a>
        ))} */}
      </div>
    </div>
  );
}
