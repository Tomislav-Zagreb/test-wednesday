import Head from "next/head"

export default function HeadDetails(props) {
  return (
    <Head>
      <title>{props.titleOfPage}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content="Tomislav Pilkić" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
