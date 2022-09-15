import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import {getSortedPostsData} from '../lib/posts'
import {timestamp} from '../lib/utils'

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a front-end web developer who's learning about Next.JS.</p>
        <section>
          <h2>Blog</h2>
          <ul className={utilStyles.list}>
            {props.allPostsData.map(post => (
              <li className={utilStyles.listItem} key={post.slug}>
                <span className={utilStyles.postTitle}><Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link></span>
                <span className={utilStyles.postSlug}>{post.slug}</span>
                <span className={utilStyles.postDate}><Date dateString={post.date}/></span>
              </li>
            ))}
          </ul>
        </section>
        {/*<p>
          The test prop is: <span className={utilStyles.special}>{testProp}</span>. Also, Greek is <span className={utilStyles.special}>{greek}</span> and age is <span className={utilStyles.special}>{age}</span>.
        </p>
        <p>And <span className={utilStyles.special}>props</span> as a whole is: <span className={utilStyles.special}>{testStr}</span>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>*/}
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log(`running getServerSideProps at ${timestamp()}.`)
  const contextKeys = Object.keys(context)
  const test = "This is a test."
  return {
    props: {
      allPostsData: getSortedPostsData(),
      greek: "alpha",
      // hebrew: "aleph",
      time: timestamp(),
      age: 54,
      contextKeys,
      contextReq: Object.keys(context.req),
      test: "Hi! I'm a test prop!",
      // test: "You can put items into the object"
    },
    // test: "Here's your data."
  }
}
