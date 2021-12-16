import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/images/medium/medium.png",
      title: "ngDoCheck vs ngOnChanges",
      desc: "Before we dive into ngDoCheck, let’s first understand how the angular change detection algorithm works ?",
      img: "/assets/images/medium/1.png",
      link: "https://mabdullahse.medium.com/why-ngdocheck-vs-ngonchanges-3e2f11d6b3f5",
    },
    {
      id: "2",
      icon: "./assets/images/medium/medium.png",
      title: "WYSIWYG HTML Editor | Froala Upload Multiple....",
      desc: "WYSIWYG HTML Editor is really amazing and cool. Really easy to integrate with existing code with little effort.",
      img: "/assets/images/medium/2.png",
      link: "https://mabdullahse.medium.com/wysiwyg-html-editor-froala-upload-multiple-images-using-angular-8be80dc4b046",
    },
    {
      id: "3",
      icon: "./assets/images/medium/medium.png",
      title: "Upload File to Amazon S3 Bucket...",
      desc: "Amazon Simple Storage Service (Amazon S3) is most commonly used that every developer must know about it. Without wasting, we are going to…",
      img: "/assets/images/medium/3.png",
      link: "https://mabdullahse.medium.com/upload-file-to-amazon-s3-bucket-using-aws-sdk-angular-nodejs-91f89722652a",
    },
    {
      id: "4",
      icon: "./assets/images/medium/medium.png",
      title: "Upload File to Amazon S3 Bucket...",
      desc: "Presigned URL allows a file to be upload to S3 bucket by using presigned URL depending upon permisson. We are going to use NodeJS for…",
      img: "/assets/images/medium/4.png",
      link: "https://mabdullahse.medium.com/upload-file-to-amazon-s3-bucket-using-presigned-url-5affc0beebdc",
    },
    {
      id: "5",
      icon: "./assets/images/medium/medium.png",
      title: "Angular 12 Multiple Image Upload...",
      desc: "We are going to use Angular 12 with cool packages like dropzone and aws-sdk for uploading images with preview to AWS S3 bucket 🚀…",
      img: "/assets/images/medium/5.png",
      link: "https://mabdullahse.medium.com/angular-12-multiple-image-upload-to-s3-using-dropzone-aws-sdk-190ebe22729f",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Medium logo" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a target="_blank" href={d.link} rel="noreferrer">
                      Read More...
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />

                <img
                  style={{ maxWidth: "216px" }}
                  src="./assets/images/medium/medium-logo.png"
                  alt="Medium logo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
