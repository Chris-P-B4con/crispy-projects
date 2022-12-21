import Head from 'next/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Web site created using create-react-app'
        />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
        <title>Crispy Projects</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
