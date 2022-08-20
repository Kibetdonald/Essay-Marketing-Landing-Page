import React from "react";
import "./style.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BsFillChatLeftDotsFill,
  BsFillChatRightDotsFill,
  BsCartCheckFill
} from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Fade from "react-reveal/Fade";

export default function Work() {
  return (
    <div id="Works" className="WorkSection">
      <Fade top>
        <div className="container1">
          <h2 class="h2 section-title">How our paper writing service works</h2>

          <p class="section-text">
            We have the seemless process from the point of placing an order to the point
            of recieving a final paper.
          </p>
        </div>
      </Fade>
      <br />
      <VerticalTimeline lineColor="#005987">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0, 89, 135)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BsFillChatLeftDotsFill />}
        >
          <h5 className="timelineTitle">Contact Us</h5>

          <p className="extraInfo">
            You may get out to us by filling out the contact form, sending us an
            email, or messaging us on Whatsapp.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0, 89, 135)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BsFillChatRightDotsFill />}
        >
          <h5 className="timelineTitle">We reach back</h5>

          <p className="extraInfo">
            We will contact you as soon as possible after receiving your
            information.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0, 89, 135)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BsCartCheckFill />}
        >
          <h5 className="timelineTitle">Place Order</h5>

          <p className="extraInfo">
            Then you send us information regarding you assignment, and any other
            additional relevant information{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#000",
            border: "2px solid  rgb(0, 89, 135)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoCloudDownloadOutline />}
       
        >
          <h5 className="timelineTitle">Get Paper</h5>

          <p className="extraInfo">
            Within the agreed time frame, we will deliver you a complete,
            high-quality paper.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
