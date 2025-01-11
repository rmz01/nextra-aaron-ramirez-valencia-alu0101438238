import { useConfig } from 'nextra-theme-docs'
import styles from '@/components/UserRepos.module.css'

export default function ShowFrontmatter() {
  const { frontMatter } = useConfig()
  return (
    <ul className={styles.list}>
      {
        Object.keys(frontMatter).map(
          k => (<li key={k} className={styles.listItem}>The frontmatter value of "{k}" is "{frontMatter[k]}" </li>)
        )
      }
    </ul>)
}
