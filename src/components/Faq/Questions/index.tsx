import { useState } from 'react'
import { css } from '@emotion/react'

// Components
import { Question } from './Question'

// Data
import { questionsData } from './data'

export const Questions = () => {
	const [openedQuestionIndex, setOpenedQuestionIndex] = useState<null | number>(null)

	const toggleQuestion = (id: number) => {
		if (id === openedQuestionIndex) {
			setOpenedQuestionIndex(null)
			return
		}

		setOpenedQuestionIndex(id)
	}

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				row-gap: 4px;
				width: 100%;
				max-width: 930px;
			`}
		>
			{questionsData.map((questionData) => (
				<Question
					isOpened={questionData.id === openedQuestionIndex}
					key={questionData.id}
					questionData={questionData}
					toggleQuestion={toggleQuestion}
				/>
			))}
		</div>
	)
}
