import { useEffect, useState } from 'react'

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false)

	const mobileWidth = 480

	useEffect(() => {
		setIsMobile(document.body.clientWidth < mobileWidth)

		const trackResizing = () => {
			const isMobile = document.body.clientWidth < mobileWidth

			setIsMobile(isMobile)
		}

		window.addEventListener('resize', trackResizing)

		return () => {
			window.removeEventListener('resize', trackResizing)
		}
	}, [])

	return isMobile
}
