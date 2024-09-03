import React, { useState, MouseEvent, useEffect } from "react";
import "./style.css";
import classNames from "classnames";

type Props = {};

export default function Collapse({}: Props) {
  const [open, setOpen] = useState(false);
  const [collasing, setCollasing] = useState(false);

  const _handleClick = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    const { id, hash }: any = e.target;

    // _collapse.classList.remove("collapse");

    setCollasing(true);
    setOpen(false);

    setTimeout(() => {
      setCollasing(false);
      setOpen(!open);
    }, 3000);
  };

  useEffect(() => {
    const _collapse: any = document.querySelector(".collapse");

    console.log("_collapse", _collapse);
  }, [open]);

  return (
    <div>
      <a
        className="btn btn-primary"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={_handleClick}
      >
        Link with href
      </a>

      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={_handleClick}
        id="collapseExample"
      >
        Button with data-bs-target
      </button>

      <div
        className={classNames("collapse", { show: open, collasing: collasing })}
        id="collapseExample"
      >
        <div className="card card-body">
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
          <p>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio
        quisquam quo mollitia iusto necessitatibus sequi enim eum sint,
        laudantium, omnis nemo ratione dolorum impedit consequuntur optio odit,
        nostrum labore?
      </p>
    </div>
  );
}
