'use client'

import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import { postData } from './services/postService';
import { getData } from './services/getService';

export default function Home() {
  const [postDataResult, setPostDataResult] = useState(null);
  const [getDataResult, setGetDataResult] = useState(null);

  useEffect(() => {
    postData({ message: 'datos' })
      .then((data) => {
        setPostDataResult(data);
      })
      .catch((error) => {
        console.error('Error en llamada POST:', error);
      });

    getData()
      .then((data) => {
        setGetDataResult(data);
      })
      .catch((error) => {
        console.error('Error en llamada GET:', error);
      });
  }, []);

  return (
    <main className={styles.main}>
        <h3>Resultado de la llamada POST:</h3>
        <pre>{JSON.stringify(postDataResult, null, 2)}</pre>
        <h3>Resultado de la llamada GET:</h3>
        <pre>{JSON.stringify(getDataResult, null, 2)}</pre>
    </main>
  );
}
