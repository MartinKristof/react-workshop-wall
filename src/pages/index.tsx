import Head from 'next/head';
import styles from '@o2/styles/Home.module.css';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '@o2/components/ui/InputField';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Heading tag="h2">Test</Heading>
        <InputField name="test" label="popis" />
      </main>
    </>
  );
}
