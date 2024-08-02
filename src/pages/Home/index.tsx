import React from "react";
import Layout from "../../components/Layouts";
import Container from "../../components/Container";
import Button from "../../components/Buttons";

type Props = {};

export default function Home({}: Props) {
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
