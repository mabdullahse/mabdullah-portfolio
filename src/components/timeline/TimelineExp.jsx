import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  createTheme,
  YouTubeEvent,
  themes,
} from "@merc/react-timeline";

import "./timeline.scss";

const theme = createTheme(themes.default, {
  // timeline: {
  //   backgroundColor: "#070D24",
  // },
  timelineTrack: {
    background: `linear-gradient(
      to bottom, #5ec0a7 0%,#070d24 100%
    )`,
    width: "2px",
  },
  date: {
    backgroundColor: "#3DA588",
    color: "#fff",
  },
  marker: {
    borderRadius: "4px",
    borderColor: "#fff",
    borderWidth: "3px",
    transform: "rotate(45deg)",
    backgroundColor: "#BF2D51",
  },
  button: {
    backgroundColor: "#000958",
  },
});

function TimelineExp() {
  return (
    <div id="timeline">
      <Timeline className="secondaryColor" theme={theme}>
        <Events>
          <ImageEvent
            date="Dec 2018 - Dec 2019"
            text="**MERN Stack Developer** at *KeyDevs*"
            src="/assets/images/timeline/keydevs.jpg"
            alt="Keydevs Logo"
            credit="Having amazing experience of Desktop and Web application development from scratch. Mainly webjell.com, khaali.pk, youpoll and eHospital."
          >
            <div>
              <UrlButton href="https://keydevs.net/">Visit Keydevs</UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent
            date="Dec 2019 - Sep 2020"
            text="**Javascript Developer** at *TheHelpDesk*"
            src="/assets/images/timeline/thehelpdesk.jpg"
            alt="thehelpdesk Logo"
            credit="Worked on amazing software ITBoost is IT documentation software, which was acquired by connect wise. I was assigned with important module of configuration."
          ></ImageEvent>
          <ImageEvent
            date="Sep 2020 - Sep 2021"
            text="**Lead Software Engineer** at *Pale Blue Software*"
            src="/assets/images/timeline/pbs.png"
            alt="PBS Logo"
            credit="Worked on two project:
          👉 Romeo Bravo project Logical: Logical is Resort Hotels management System and Point of sale.
          👉 TransAct: Banking application."
          >
            <div>
              <UrlButton href="https://palebluesoftware.com/home/">
                Visit Palebluesoftware
              </UrlButton>
            </div>
          </ImageEvent>
          <ImageEvent
            date="Sep 2021 - Continue"
            text="**Senior Software Engineer** at *VentureDive*"
            src="/assets/images/timeline/venture.png"
            alt="ventureDive Logo"
            credit="Working with KeepTruckin Project that is fleet management company based in San Francisco, California, USA."
          >
            <div>
              <UrlButton href="https://www.venturedive.com/">
                Visit VentureDive
              </UrlButton>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}

export default TimelineExp;
