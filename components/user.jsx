"use client"

import { useSession, signOut } from "next-auth/react" // https://next-auth.js.org/getting-started/client#usesession
import Styles from "@/components/UserRepos.module.css"

export default function User() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    console.error("***********Session***********")
    console.error(session)
      return (<div> 
        <br />
        <ul className={Styles.list}>
          <li>
          <img src={session.user.image} alt={session.user.name} width="32" height="32" />
          </li>
          <li><span>Email: {session.user.email}</span></li>
          <li>Name: {session.user.name}</li>
        </ul>     
    </div>)
  }
  return <a href="/api/auth/signin" className={ Styles.button}>Sign in</a>
}