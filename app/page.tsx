import Link from 'next/link';
import styles from './page.module.scss'
import React from 'react';

export default function Home() {
  
  
  
  
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Link href='/users'>Go to Users </Link>
      <Link href='/dashboard'>Go to dashboard </Link>
    </main>
  )
}
