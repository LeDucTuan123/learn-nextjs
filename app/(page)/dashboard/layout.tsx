import styles from './style.module.scss'


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <>
            <h1>Dashboard Navigation</h1>
            <main className={styles.main} >
                {children}
            </main>
        </>
    )
}