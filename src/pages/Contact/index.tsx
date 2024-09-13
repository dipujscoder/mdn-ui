import React, { useState } from "react";
import Layout from "../../components/Layouts";
import { motion, useScroll, LazyMotion, domAnimation, m } from "framer-motion";

import "./style.css";

type Props = {};

export default function Contact({}: Props) {
  const { scrollYProgress } = useScroll();

  const [open, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 100,

      transition: {
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const _handleClick = () => {
    setOpen(!open);
  };

  // 4. set animation
  const heightAnimation = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
    },
  };

  // const mainAnimation = {
  //   unmount: {
  //     transition: { duration: 0.3, ease: "linear" },
  //   },
  //   mount: {
  //     transition: { duration: 0.3, ease: "linear" },
  //   },
  // };

  console.log("open", open);

  return (
    <Layout>
      <div className="overflow-hidden" style={{ minHeight: "3000px" }}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        {/* <motion.div
          // whileHover={{ scale: 1.5 }}
          drag="x"
          className="bg-green-500 text-white h-11"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            a, provident magnam est tempora velit laboriosam, repellendus,
            quidem unde similique hic voluptate accusamus quas iure harum
            laborum tempore. Deleniti, culpa?
          </p>
        </motion.div> */}

        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>One</motion.li>
          <motion.li variants={item}>Two</motion.li>
          <motion.li variants={item}>Three</motion.li>
          <motion.li variants={item} />
        </motion.ul>

        <div className="container mx-auto mt-5">
          <button onClick={_handleClick}>OnClick Me</button>
          <LazyMotion features={domAnimation}>
            <m.div
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <m.div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente neque cum accusantium? Debitis fugiat nesciunt eaque,
                  itaque tempore id excepturi labore, esse nulla cumque
                  temporibus! Corrupti ipsum hic nemo laudantium.
                </p>
              </m.div>
            </m.div>
          </LazyMotion>
          <div className="" style={{ height: "500px" }}>
            <motion.div>
              <motion.div
                // variants={mainAnimation}
                initial="unmount"
                exit="unmount"
                animate={open ? "mount" : "unmount"}
                className="accordion-body"

                // transition={{ duration: 0.5, type: "tween" }}
                // initial={{ opacity: 0, y: -30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
              >
                <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
              </motion.div>
            </motion.div>

            <motion.div
              // transition={{ duration: 0.5 }}
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              initial="hidden"
              whileInView="visible"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                tenetur deleniti cumque veritatis facere quae commodi, assumenda
                autem laboriosam repellat nisi. Ullam totam velit earum
                assumenda laborum. Incidunt beatae consequatur culpa, tempore
                distinctio eligendi nulla.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-red-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-blue-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="offscreen"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">ddddddddddddddddddddddddd</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-pink-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-orange-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-green-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet </h1>
              <h2 className="text-6xl">Search dfdf</h2>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>

        <motion.div
          transition={{ duration: 1.5 }}
          // initial={{ opacity: 0, x: -300 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          initial="hidden"
          // whileInView="visible"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            quisquam eveniet modi quo corrupti dolor minus, dicta voluptate unde
            sed deserunt illum deleniti reprehenderit, culpa temporibus. Quod,
            mollitia consectetur.
          </p>
        </motion.div>

        <div className="container mx-auto">
          <div className="bg-lime-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-green-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-cyan-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-indigo-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-violet-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-purple-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div
            className="bg-fuchsia-500 text-white"
            style={{ height: "500px" }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-rose-500 text-white" style={{ height: "500px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-5xl ">Lorem ipsum dolor sit amet</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              tenetur deleniti cumque veritatis facere quae commodi, assumenda
              autem laboriosam repellat nisi. Ullam totam velit earum assumenda
              laborum. Incidunt beatae consequatur culpa, tempore distinctio
              eligendi nulla.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
