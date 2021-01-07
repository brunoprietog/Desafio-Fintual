import Head from 'next/head'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/Home.module.css'
import { Heading } from "@chakra-ui/react"

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('common:title') }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="4xl" isTruncated>
          {t('home:title') }
        </Heading>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
