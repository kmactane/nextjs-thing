
export function timestamp() {
	const now = new Date()
	return now.toLocaleTimeString("en-US", {"hour12": false})
}

