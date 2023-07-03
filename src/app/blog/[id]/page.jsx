import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import { notFound } from 'next/navigation'
async function getData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, { cache: 'no-store' })

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat, vero tenetur eum optio facere ratione eaque reiciendis quasi praesentium voluptatem quos inventore minus adipisci facilis provident autem tempore!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo quia inventore. Molestiae perspiciatis ullam quaerat debitis enim asperiores officiis non libero ad id voluptate rem modi.
          <br />
          <br />


          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, possimus fuga. Laboriosam commodi nemo ad nisi! Commodi nulla, incidunt praesentium, minus quas eius ea eveniet id labore ratione totam consequuntur.

          <br />
          <br />


          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eaque, quae quibusdam odit ipsam temporibus saepe harum quia reiciendis doloremque error, in explicabo autem debitis quo ab voluptatem fuga obcaecati.
          lorem
        </p>
      </div>
    </div>
  );
}

export default BlogPost