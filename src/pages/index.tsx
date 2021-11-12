import React from 'react'

// Components
import { Header } from '#components/Header'
import { Intro } from '#components/Intro'
import { HowItWorks } from '#components/HowItWorks'
import { Demo } from '#components/Demo'
import { Faq } from '#components/Faq'
import { Footer } from '#components/Footer'
import { WhyNeuron } from '#components/WhyNeuron'

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
