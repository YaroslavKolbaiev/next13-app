import React from "react";
import Image from "next/image";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-body has-text-centered">
        <Image
          className={classes.avatar}
          src="/images/avatar.jpg"
          alt="An image showing person"
          width={200}
          height={200}
        />
        <p className="title has-text-grey-light">Hi, I&apos;m iRick</p>
        <p className="subtitle has-text-grey-light">
          This is a test fullstack blog app about adventures
        </p>
      </div>
    </section>
  );
}
