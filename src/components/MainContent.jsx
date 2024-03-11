import styles from './main.module.css'

export default function MainContent() {
    return(
       <main>
        <h1 className={styles.heading}>Fun facts about React</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan</li>
            <li>Has over 100K stars on GitHub</li>
            <li>Is maintain by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
       </main>
    )
}