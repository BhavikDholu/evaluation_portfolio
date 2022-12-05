import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home({profile}) {
  const router = useRouter()
  const {avatar_url,name,login} = profile;

  const resumelink = ()=>{
      router.push("https://drive.google.com/file/d/1NXdejID4ESWnBTpnrxQgJP6-9c17_777/view?usp=sharing");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{border:"1px solid teal",padding:"10px",textAlign:"justify"}}>
            <Image src={avatar_url}  alt="avatar" width="200" height="200" style={{borderRadius:"50%"}}/>
            <h1>{name}</h1>
            <p>{login}</p>
            <p>Full-stack Developer | JavaScript | Typescript | ReactJS | HTML | CSS | Chakra-UI | MUI</p>
            <button onClick={resumelink}>Resume</button>
        </div>
        <div style={{border:"1px soid teal",padding:"10px",textAlign:"justify"}}>
          <h1>Education</h1>
            <div>
              <h3>Masai School | full Time</h3>
              <p>May/2022 - Jan/2023</p>
            </div>
            <div>
              <h3>B.tech Mechanical</h3>
              <p>Jun/2015 - Jan/2019</p>
            </div>
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
 
  let res = await fetch("https://api.github.com/users/BhavikDholu");
  let data = await res.json();
  return {
    props: {
      profile : data
    }, // will be passed to the page component as props
  }
}