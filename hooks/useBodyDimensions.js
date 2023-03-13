import { useState, useEffect } from 'react';

export default function useBodyDimensions() {
	const [bodyDimensions, setBodyDimensions] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setBodyDimensions({
				width: document.body.scrollWidth,
				height: document.body.scrollHeight,
			});
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return bodyDimensions
}
