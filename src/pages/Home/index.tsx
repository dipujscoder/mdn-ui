import React, { useState } from "react";
import Layout from "../../components/Layouts";
import Container from "../../components/Container";
import Button from "../../components/Buttons";
import { Accordion, AccordionItem } from "../../components/Accordions";
import AccordionHeader from "../../components/Accordions/AccordionHeader";
import AccordionBody from "../../components/Accordions/AccordionBody";
import Alert from "../../components/Alert";

type Props = {};

export default function Home({}: Props) {
  const [open, setOpen] = useState<any>(0);

  const _handleClick = (value: any) => {
    setOpen(value);
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

          <h1 className="text-5xl">Alert</h1>
          <Alert color="pink" close className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
              height="1rem"
              width="1rem"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            A simple primary alert—check it out!
          </Alert>
          <Alert color="red" close className="mb-2">
            A simple primary alert—check it out!
          </Alert>
          <Alert color="purple" close className="mb-2">
            A simple primary alert—check it out!
          </Alert>
          <Alert color="pink" close className="mb-2">
            A simple primary alert—check it out!
          </Alert>
        </Container>
      </section>
    </Layout>
  );
}
