import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row,
  Col,
} from "reactstrap";

const FaqSection = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="faq-section">
      <h2>FREQUENTLY ASKED QUESTION (F.A.Q.)</h2>
      <Row>
        <Col lg="8" md="8" sm="12" xs="12">
          <div>
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  Can I play the lottery online?
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis expedita culpa fuga ut quia, labore distinctio
                  laborum, velit, quo perspiciatis quisquam. Non maiores,
                  tempore repudiandae expedita officia alias sequi deleniti
                  amet, unde obcaecati, molestias eius fugit? Eligendi fuga
                  maiores autem doloremque reiciendis quidem? Aliquid provident
                  commodi minima? Reprehenderit, laboriosam neque.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  How will I get my wins?
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis expedita culpa fuga ut quia, labore distinctio
                  laborum, velit, quo perspiciatis quisquam. Non maiores,
                  tempore repudiandae expedita officia alias sequi deleniti
                  amet, unde obcaecati, molestias eius fugit? Eligendi fuga
                  maiores autem doloremque reiciendis quidem? Aliquid provident
                  commodi minima? Reprehenderit, laboriosam neque.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">
                  Is it safe to play lottery online?
                </AccordionHeader>
                  <hr className="m-0" />
                <AccordionBody accordionId="3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis expedita culpa fuga ut quia, labore distinctio
                  laborum, velit, quo perspiciatis quisquam. Non maiores,
                  tempore repudiandae expedita officia alias sequi deleniti
                  amet, unde obcaecati, molestias eius fugit? Eligendi fuga
                  maiores autem doloremque reiciendis quidem? Aliquid provident
                  commodi minima? Reprehenderit, laboriosam neque.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FaqSection;
