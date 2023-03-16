import Head from 'next/head'

import styles from '@component/styles/Home.module.css'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="ninjas" />
      </Head>
      <div  >
          <h1 className={styles.title} >Homepage</h1>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium non quisquam maxime obcaecati, perferendis accusamus. Aliquam, at harum eaque 
            possimus expedita tenetur totam? Reiciendis incidunt vero nisi numquam est?</p>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium non quisquam maxime obcaecati, perferendis accusamus. Aliquam, at harum eaque 
            possimus expedita tenetur totam? Reiciendis incidunt vero nisi numquam est?</p>
          <Link href='/ninjas' className={styles.btn} >See Ninja Listing</Link>
      </div>
    </>
  )
   
  
  
}
