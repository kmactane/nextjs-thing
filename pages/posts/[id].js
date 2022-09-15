import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import {getAllPostIds, getPostData} from '../../lib/posts'

export default function Post(props) {
	return (
		<Layout>
			<Head>
				<title>{props.postData.title} (CNA)</title>
			</Head>
			<h1>{props.postData.title}</h1>
			<p>Posted <Date dateString={props.postData.date} /></p>
			<section dangerouslySetInnerHTML={{__html: props.postData.postHtml}}>
			</section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	console.log("getStaticPaths() paths:", paths)
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}
