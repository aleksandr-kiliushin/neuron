import Image from 'next/image'
import { css } from '@emotion/react'

// Components
import { Card } from '../Card'
import { CompareYields } from './CompareYields'
import { CardText } from '../CardText'

// Styles
import { Color } from '#styles/constants'

export const OptionPoolsCard = ({ marketUsdcYields }: IProps) => {
	return (
		<Card css={{ gridArea: 'option-pools', display: 'grid', gridTemplateRows: '3fr 1fr' }}>
			<div css={{ padding: '45px 40px' }}>
				<h3 css={{ marginBottom: '17px', color: 'white' }}>Option pools</h3>

				<CardText css={{ maxWidth: '310px', marginBottom: '14px' }}>
					Option trading strategies tuned to earn an additional yield automatically on assets you
					are bullish &#128640;
				</CardText>

				<CompareYields />
			</div>

			<div
				css={css`
					padding: 18px 40px 28px;
					background-color: ${Color.Violet17};
					border-top: 1px solid ${Color.Violet11};
					border-radius: 0 0 8px 8px;
				`}
			>
				<div
					css={{
						marginBottom: '15px',
						color: Color.Violet18,
						fontSize: '14px',
						lineHeight: '17px',
					}}
				>
					Market USDC Yelds
				</div>

				<div css={{ display: 'flex', columnGap: '21px' }}>
					{marketUsdcYields.map(({ logo, percent }, index) => (
						<div
							css={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '8px' }}
							key={index}
						>
							<div css={{ paddingLeft: '3px' }}>
								<Image alt="" src={logo} />
							</div>
							<div css={{ color: Color.Violet19, fontSize: '16px', lineHeight: '19px' }}>
								{percent}%
							</div>
						</div>
					))}
				</div>
			</div>
		</Card>
	)
}

interface IProps {
	marketUsdcYields: marketUsdcYieldsItem[]
}

interface marketUsdcYieldsItem {
	logo: string
	percent: number
}
