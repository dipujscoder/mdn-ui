import React, { useState } from "react";
import Layout from "../../components/Layouts";
import Container from "../../components/Container";
import Button from "../../components/Buttons";
import { Accordion, AccordionItem } from "../../components/Accordions";
import AccordionHeader from "../../components/Accordions/AccordionHeader";
import AccordionBody from "../../components/Accordions/AccordionBody";
import { AccordionProvider } from "../../components/Accordions/AccordionContex";

type Props = {};

export default function Home({}: Props) {
  const [open, setOpen] = useState<any>(0);

  const _handleClick = (value: any) => {
    setOpen(value);
    console.log("bla bla bla");
  };

  return (
    <Layout>
      <section className="py-10 border">
        <Container center>
          <h1>Buttons</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <Button color="black" onClick={() => console.log("maliha")}>
                Save
              </Button>
              <br />
              {/* <Button color="red">Save</Button> */}
            </div>
            <Accordion>
              <AccordionItem open={open === 1}>
                <AccordionHeader onClick={() => _handleClick(1)}>
                  Accordion One
                </AccordionHeader>
                <AccordionBody>
                  <strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum impedit laudantium odio sequi sunt provident
                      velit, unde minima quo maxime in, accusamus praesentium
                      accusantium aliquam cupiditate facere debitis, temporibus
                      quas.
                    </p>
                  </strong>
                </AccordionBody>
              </AccordionItem>

              {/* <Accordion open={open === 1}></Accordion> */}
              <AccordionItem open={open === 2}>
                <AccordionHeader onClick={() => _handleClick(2)}>
                  Accordion Two
                </AccordionHeader>
                <AccordionBody>
                  <strong>
                    <p>This is another.</p>
                  </strong>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            <div>03</div>
            <div className="bg-red-500">04</div>
            <div className="bg-red-500">01</div>
            <div>02</div>
            <div>03</div>
            <div className="bg-red-500">04</div>
            <div className="bg-red-500">01</div>
            <div>02</div>
            <div>03</div>
            <div className="bg-red-500">04</div>
            <div className="bg-red-500">01</div>
            <div>02</div>
            <div>03</div>
            <div className="bg-red-500">04</div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
