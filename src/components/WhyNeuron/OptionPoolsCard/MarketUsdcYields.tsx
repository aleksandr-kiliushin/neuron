import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color, mqMobile } from '#styles/index'

export const MarketUsdcYields = ({ marketUsdcYields }: IProps) => {
	return (
		<div
			css={css`
				padding: 18px 40px 28px;
				background-color: ${Color.Violet17};
				border-top: 1px solid ${Color.Violet11};
				border-radius: 0 0 8px 8px;
				${mqMobile} {
					display: none;
				}
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

			<div
				css={css`
					display: flex;
					column-gap: 21px;
				`}
			>
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
	)
}

interface IProps {
	/**
	 * В самом низу “Market USDC Yelds” это список из иконок и процентов других
	 * протоколов, нужно предусмотреть возможно задавать эти значения через пропсы.
	 **/
	marketUsdcYields: marketUsdcYieldsItem[]
}

interface marketUsdcYieldsItem {
	logo: string
	percent: number
}
