import { cc } from "@/app/utils/cc"

enum SIZE {
	"small",
	"medium",
	"large"
}

type Props = {
	children: React.ReactNode
	className?: string,
	boxClassName?: string, 
	titleClassName?: string
	size?: SIZE,
	value: string,
	setValue: (value: string) => void
	name: string
}

export default function Checkbox({
	children, className, boxClassName, titleClassName, size = SIZE.medium, value, setValue, name
} : Props) {

	let mainClasses = cc([
    className || '',
    'flex items-center',
		size === SIZE.small ? 'gap-1' : '',
    size === SIZE.medium ? 'gap-2' : '',
    size === SIZE.large ? 'gap-4' : '',
  ])
	let boxClasses = cc([
    boxClassName || '',
		'transition',
    size === SIZE.small ? 'border w-2 h-2' : '',
    size === SIZE.medium ? 'border w-4 h-4' : '',
    size === SIZE.large ? 'border w-6 h-6' : '',
		value === name ? 'bg-white' : 'bg-transparent'
	])
	let titleClasses = cc([
    titleClassName || '',
    size === SIZE.small ? 'text-sm' : '',
    size === SIZE.medium ? 'text-base' : '',
    size === SIZE.large ? 'text-lg' : ''
  ])

	return(
		<button className={mainClasses} onClick={() => setValue(name)}>
			<div className={boxClasses}/>
			<p className={titleClasses}>
				{children}
			</p>
		</button>
	)
}