import Link from 'next/link';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import styles from '../styles/Home.module.css';


const SignIn = () => {
  return (
    <div>
      <Navbar />
      <form className={styles.container}>
        <label style={{fontSize: "25px"}}>
          Email Address: <br></br>
          <input type="text" name="name" className={styles.links}/>
        </label>
        <label style={{fontSize: "25px"}}>
          Password:   <br></br>
          <input type="text" name="name" className={styles.links}/>
        </label>
        <input type="submit" value="Log-in" className={styles.links}/>
      </form>
      <Footer />
    </div>
  )
}

export default SignIn;