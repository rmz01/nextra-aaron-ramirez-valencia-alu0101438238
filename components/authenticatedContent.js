import { useSession, getSession, signIn, signOut } from "next-auth/react"
import { RemoteContent } from 'nextra/components'
import Styles from "@/components/UserRepos.module.css"


export default function AuthenticatedContent({error, dependencies}) {
  const { data: session, status } = useSession()

  if (error) {
    return <div>Error: {error}</div>
  }

  if (status === "loading") {
    return <h2 className={Styles.h2}>Loading...</h2>
  }

  if (status === "unauthenticated") {
    return  (<div>
      <h2 className={Styles.h2}>Access Denied to the private content</h2>
      <button onClick={() => signIn("github")} className={Styles.button}>Sign in</button>
    </div>)
  }

  return (
    <>
      <h2 className={Styles.h2}>Protected Content</h2>
      <p className={Styles.p}>Your email is: {session.user.email}. You can view this page because you are signed in.</p>
      <button onClick={() => signOut()} className={Styles.button}>Sign out</button>

      <RemoteContent components={dependencies} />
    </>
  )
}
