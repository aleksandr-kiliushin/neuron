import { css } from '@emotion/react'

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
		<div
			css={css`
				background: linear-gradient(
					180deg,
					#2b2974 0%,
					#2621bf 17.19%,
					#1c2082 39.06%,
					#6361f0 70.31%,
					#ffffff 86.98%
				);
			`}
		>
			<Header />
			<Intro />
			<HowItWorks />
			<Demo />
			{/* <WhyNeuron />
			<Faq />
			<Footer /> */}
		</div>
	)
}
