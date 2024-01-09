import { cc } from "@/utils/cc"

enum SIZE {
	"small",
	"medium",
	"large"
}

type Props = {
	children: String
	className?: string,
  size?: SIZE,
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span',
	uppercase?: boolean
}

export default function Text({
	children, className, size = SIZE.medium, as = 'p', uppercase
} : Props) {

	let mainClasses = cc([
		className || '',
		'text-white',
		size === SIZE.small ? 'text-xl' : '',
		size === SIZE.medium ? 'text-md' : '',
		size === SIZE.large ? 'text-sm' : '',
		uppercase ? 'uppercase' : '',
	])

	const CustomTag = as

	return(
		<CustomTag className={mainClasses}>
			{children}
		</CustomTag>
	)
}