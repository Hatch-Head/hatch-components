import React from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";

/**
 HeroHeader.propTypes = {
  heading: PropTypes.any,
  subheading: PropTypes.string,
  background: PropTypes.oneOf(["bg-light", "bg-dark", "bg-primary"]),
}

HeroHeader.defaultProps = {
  background: "none",
}
 */

export interface HeroHeaderProps {
  heading: string;
  subheading: string;

  video?: string;
  image?: JSX.Element;
  showLearnMore: boolean;
  isLarge?: boolean;
  background?: "bg-light" | "bg-dark" | "bg-primary";
}

const HeroHeader = ({
  heading,
  subheading,
  image,
  background = "bg-dark",
  video,
  showLearnMore,
  isLarge = false,
}: HeroHeaderProps) => {
  const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

  // const Shape = () => background !== 'none' ?
  //   <div className="position-relative">
  //   <div className="shape shape-fluid-x shape-bottom text-light pb-15 pb-md-4">
  //     <div className="shape-img pb-9 pb-md-15">
  //       <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v25H75L25 50H0z" fill="currentColor"></path></svg>
  //     </div>
  //   </div>
  // </div>
  // : null

  return (
    <>
      <section
        className={"pb-8 pb-md-9 align-items-center " + background}
        style={{ position: "relative", overflow: "hidden", paddingTop: 80 }}
      >
        {video ? (
          <>
            <video
              src={video}
              width="100"
              height="100"
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "auto",
                minHeight: "100%",
                top: 0,
                right: 0,
                objectFit: "cover",
                zIndex: 0,
              }}
            />
            <div
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)",
              }}
            />
          </>
        ) : null}

        <Container fluid="lg">
          <Row
            className={"align-items-center"}
            style={{ minHeight: isLarge ? 700 : 400 }}
          >
            {image && !video ? (
              <Col
                md={{ span: 4, offset: 0, order: "last" }}
                className={"justify-content-center"}
              >
                {image}
              </Col>
            ) : null}

            <Col md={{ span: 8, order: 0 }}>
              <h1 className="display-3 mb-6 text-white">{heading}</h1>
              <p className="fs-lg text-white">{subheading}</p>
              <Link className="btn btn-primary-dark lift" to="/contact-us/">
                Get in touch
              </Link>
              {showLearnMore ? (
                <Link className="btn btn-white lift ml-3" to="/services/">
                  Learn More
                </Link>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroHeader;
