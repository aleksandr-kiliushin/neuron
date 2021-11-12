import React from 'react'
import { css } from '@emotion/react'

// Components
import { Header } from '#components/home/Header'
import { Intro } from '#components/home/Intro'
import { HowItWorks } from '#components/home/HowItWorks'
import { Demo } from '#components/home/Demo'
import { Faq } from '#components/home/Faq'
import { Footer } from '#components/home/Footer'
import { WhyNeuron } from '#components/home/WhyNeuron'

export default function Home() {
	return (
		<>
			<Header />
			<Intro />
			<HowItWorks />
			<Demo />
			<WhyNeuron />
			<Faq />
			<Footer />
		</>
	)
}
