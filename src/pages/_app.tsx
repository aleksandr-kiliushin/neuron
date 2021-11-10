import React from 'react'
import Head from 'next/head'

// Styles
import 'src/styles/globals.css'

// Types
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Neuron Fund Dev</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
