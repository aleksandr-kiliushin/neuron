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
		<div
			css={css`
				background: linear-gradient(#2b2974, #2621bf, #1c2082, #6361f0, #ffffff);
			`}
		>
			<Header />
			<Intro />
			<HowItWorks />
			<Demo />
			<WhyNeuron />
			<Faq />
			<Footer />
		</div>
	)
}
