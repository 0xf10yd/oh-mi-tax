import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={12} className="footer-text">
                        Made with
                        <FontAwesomeIcon
                            className="icon-heart"
                            icon={faHeart}
                        />
                        by {" "}
                        <a className="footer-name" href="https://www.linkedin.com/in/mariam-fawzi-1581251b3">
                            Mariam
                        </a> and {" "}
                        <a className="footer-name" href="https://www.linkedin.com/in/0xf10yd">
                            Muhammad
                        </a>
                    </Col>
                    <Col className="footer-text-copyright">
                        Copyright © 2021, TriChain
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
