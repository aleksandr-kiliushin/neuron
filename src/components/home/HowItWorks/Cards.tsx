import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

// Assets
import desktopStep1Svg from '#assets/how-it-works-desktop-step-1.svg'
import desktopStep2Svg from '#assets/how-it-works-desktop-step-2.svg'
import desktopStep3Svg from '#assets/how-it-works-desktop-step-3.svg'

export const Cards = () => {
	const cards = [
		{
			stepNumber: 1,
			image: desktopStep1Svg,
			text: 'Select an asset you want to lend or provide as liquidity',
		},
		{
			stepNumber: 2,
			image: desktopStep2Svg,
			text: "Pool's funds collateralise option perpetual strategy",
		},
		{ stepNumber: 3, image: desktopStep3Svg, text: 'Sold options generate weekly yield' },
	]

	return (
		<div
			css={css`
				display: flex;
				justify-content: space-around;
				margin-top: 50px;
			`}
		>
			{cards.map(({ image, stepNumber, text }) => (
				<div
					css={css`
						display: grid;
						grid-template-rows: 65px 22px 44px;
						row-gap: 13px;
						height: 234px;
						width: 338px;
						padding: 33px 0 0;
						background-color: ${Color.Violet7};
						border: 1px solid ${Color.Violet8};
						border-radius: 8px;
					`}
					key={stepNumber}
				>
					<Image alt="" src={image} />

					<div
						css={css`
							color: ${Color.Violet6};
							font-size: 18px;
							line-height: 22px;
							text-align: center;
						`}
					>
						Step {stepNumber}
					</div>
					<div
						css={css`
							margin-top: 5px;
							color: white;
							font-size: 18px;
							line-height: 22px;
							text-align: center;
						`}
					>
						{text}
					</div>
				</div>
			))}
		</div>
	)
}
