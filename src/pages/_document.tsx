import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Crispy Projects</title>
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
