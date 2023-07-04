"use client"
import React from 'react'
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const session = useSession()
  const router = useRouter()
  if (session.status === "loading") {
    return <p>Loading...</p>
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password })


  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>login with google</button>
    </div>
  )
}

export default Login