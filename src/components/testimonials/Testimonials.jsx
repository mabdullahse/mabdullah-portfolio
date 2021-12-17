import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Husnain Akbar",
      title: "Senior Software Engineer at Tkxel",
      img: "/assets/images/profile/husnain.jpg",
      icon: "assets/linkedin.png",
      link: "https://www.linkedin.com/in/husnain-akbar-751792131/",
      desc: "I worked with Abdullah as a team on different project. He is exceptionally technical and skilled. One of the most hardworking people I know in my circle. Always in hunt to learn and grow.",
    },
    {
      id: 2,
      name: "Gulzeb Zahid",
      title: "Project Manager at PolkaLokr",
      img: "/assets/images/profile/gulzaib.jpg",
      icon: "assets/linkedin.png",
      link: "https://www.linkedin.com/in/gul-zaib-zahid/",
      desc: "Abdullah is Highly Skilled, Talented, Sincere , Dedicated and most importantly Trusted Person who require minimum supervision to perform the tasks assigned. Team player to enhance the capabilities for other team members and happy to see other grow :)",
      featured: true,
    },

    {
      id: 3,
      name: "Pushpanathan K",
      title: "Development Manager at Pale Blue Software",
      img: "/assets/images/profile/push.jpg",
      icon: "assets/linkedin.png",
      link: "https://www.linkedin.com/in/pushpanathank/",
      desc: "There is no better colleague than Muhammad Abdullah. He is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. His expertise as a developer is considerable. I highly recommend Muhammad Abdullah and would love to work with his again.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <a target="_blank" href={d.link} rel="noreferrer">
                <h4>{d.title}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
