"use client"
import React, { useState, useEffect } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' })
      if (!res.ok) {
        throw new Error("failed to fetch data")
      }
      const data = await res.json()
      setData(data)
      setIsLoading(false);
    };
    getData();
  }, []);
  console.log(data)
  return (
    <div className={styles.mainContainer}>
      {data?.map(item => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              src={item.img}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog