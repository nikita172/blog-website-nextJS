import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' })

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (

        <Link href={"/blog/" + item.id} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog