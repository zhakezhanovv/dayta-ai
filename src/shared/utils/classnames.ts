/*
I prefer using classnames library for classes, but it is not allowed, therefore I created my own small library for classnames. 
It allows to use modules.
*/

export function classnames(...args: (string | undefined)[]) {
	const resultClassName = args.reduce(
		(prevClassName, currentClassName) => (currentClassName ? prevClassName + ' ' + currentClassName : prevClassName),
		'',
	)

	return resultClassName
}
