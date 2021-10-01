import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from "react-redux"
import {General, Redux, Actions} from "../types"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  /* Redux */
  const dispatch: (v: Actions.All) => void = useDispatch()
  const [value, setValue] = [
    useSelector((state: Redux.RootState) => state.settings.value),
    (v: General.ValueUnit) => dispatch({ type: "VALUE", payload: v }),
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS/Redux/Saga</title>
        <meta name="description" content="Build test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {value}
        <input
          type="number"
          value={value}
          onChange={(event) => {
            setValue(+event.target.value)
          }}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
