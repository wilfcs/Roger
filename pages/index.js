import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
    function play() {
    var audio = document.getElementById('a1');
    audio.play();
    }
  return (
      <>
      <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"/> </Head>


        {/* <div className={` ${styles.mishra} `}>sdjfl;kasdjflkjds</div> */}
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}></div>
            <div className={styles.brandName}>Roger</div>
            
            <input type="text" className={styles.showMorse}/>
            <input type="text" className={styles.showText}/>
          </div>

        <div className={styles.body}>
          {/* <button className={` ${styles.logo} ${styles.convex}` }></button> */}
          <div className={styles.bigButton} id='bigButton' onClick={play}></div>
          <audio id='a1'>
          <source src='/sound/bottonpress.wav' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        </div>
        </div>

      </>
  )
  }
