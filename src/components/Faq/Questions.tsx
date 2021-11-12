import Image from 'next/image'
import { css } from '@emotion/react'

// Styles
import { Color } from '#styles/constants'

// Assets
import chevronSvg from '#assets/chevron.svg'

export const Questions = () => {
	const questions = [
		{ answer: '', isOpened: false, question: 'Can I stake if I have less than 32 ETH?' },
		{ answer: '', isOpened: false, question: 'Can I stake if I have less than 32 ETH?' },
		{
			answer:
				'Yes! To democratize access to Ethereum 2.0 for users who are unable to invest 32 ETH (the fixed amount required by the network), Ankr staking introduces Micropools – a proprietary solution that enables you to start staking with as little as 0.5 ETH. Simply choose the amount you want to delegate, and the system will automatically assign it to the best providers.',
			isOpened: true,
			question: 'Can I stake if I have less than 32 ETH?',
		},
		{ answer: '', isOpened: false, question: 'Can I stake if I have less than 32 ETH?' },
		{ answer: '', isOpened: false, question: 'Can I stake if I have less than 32 ETH?' },
	]

	return (
		<div css={{ display: 'flex', flexDirection: 'column', rowGap: '4px', maxWidth: '930px' }}>
			{questions.map(({ answer, isOpened, question }, index) => (
				<div key={index}>
					<div
						css={css`
							display: flex;
							justify-content: space-between;
							padding: 30px 50px 30px 85px;
							background-color: ${isOpened ? Color.Light2 : 'white'};
							border-radius: 8px 8px ${isOpened ? '0 0' : '8px 8px'};
							color: ${Color.Dark1};
							font-family: Lato;
							font-size: 18px;
							font-weight: 700;
							line-height: 22px;
						`}
					>
						{question}

						<Image
							alt=""
							css={{ transform: isOpened ? 'none' : 'rotate(180deg)' }}
							src={chevronSvg}
						/>
					</div>
					{isOpened && (
						<div
							css={css`
								padding: 34px 56px 46px 81px;
								background-color: white;
								border-radius: 0 0 8px 8px;
								color: ${Color.Dark1};
								font-size: 18px;
								line-height: 22px;
							`}
						>
							{answer}
						</div>
					)}
				</div>
			))}
		</div>
	)
}
