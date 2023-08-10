export function classnames(...args: (string | undefined)[]) {
	const resultClassName = args.reduce(
		(prevClassName, currentClassName) => (currentClassName ? prevClassName + ' ' + currentClassName : prevClassName),
		'',
	)

	return resultClassName
}
