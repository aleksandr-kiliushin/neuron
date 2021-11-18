import Image from 'next/image'
import { css } from '@emotion/react'

// Utils
import { useIsMobile } from '#utils/hooks'

// Styles
import { Color, mqMobile } from '#styles/index'

// Assets
import chevronSvg from '#assets/chevron.svg'

// Types
import { IQuestion } from './data'

export const Question = ({ isOpened, questionData, toggleQuestion }: IProps) => {
	const isMobile = useIsMobile()

	const { answer, id, question } = questionData

	return (
		<div
			css={css`
				border: 1px solid ${Color.Violet24};
				border-radius: 8px;
			`}
			key={id}
		>
			<div
				css={css`
					display: flex;
					justify-content: space-between;
					column-gap: 20px;
					padding: 30px 50px 30px 85px;
					background-color: ${isOpened ? Color.Light2 : 'white'};
					border-radius: 8px 8px ${isOpened ? '0 0' : '8px 8px'};
					color: ${Color.Dark1};
					font-family: Lato;
					font-size: 18px;
					font-weight: 700;
					line-height: 22px;
					cursor: pointer;
					${mqMobile} {
						padding: 18px 25px;
						font-size: 14px;
						line-height: 17px;
					}
				`}
				onClick={() => toggleQuestion(id)}
			>
				{question}

				<div
					css={css`
						transform: ${isOpened ? 'none' : 'rotate(180deg)'};
						transition: transform 0.4s;
						${mqMobile} {
							display: none;
						}
					`}
				>
					<Image alt="" src={chevronSvg} />
				</div>
			</div>

			<div
				css={css`
					display: ${isOpened ? 'static' : 'none'};
					padding: 34px 56px 46px 81px;
					background-color: white;
					border-top: 1px solid ${Color.Violet24};
					border-radius: 0 0 8px 8px;
					color: ${Color.Dark1};
					font-size: 18px;
					line-height: 22px;
					${mqMobile} {
						padding: 18px 25px;
						font-size: 13px;
						line-height: 16px;
					}
				`}
			>
				{answer}
			</div>
		</div>
	)
}

interface IProps {
	isOpened: boolean
	questionData: IQuestion
	toggleQuestion: (id: number) => void
}
