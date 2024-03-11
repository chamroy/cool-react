
import img from '../assets/react-logo.png'
import styles from '../components/navbar.module.css'
export default function Navbar() {
  return (
    <div>
      <navbar>
      
          <img src={img} alt="" className={styles.img} />
          <h1 >ReactFacts</h1>
          <h2 >React course - Project 1</h2>
        

      </navbar>
      <main>

      </main>
    </div>
  );
}
