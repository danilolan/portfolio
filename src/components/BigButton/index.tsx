import { cc } from "@/app/utils/cc"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  mainClassName?: string,
  subtitle?: React.ReactNode,
  subtitleClassName?: string,
} 

export default function BigButton({children, subtitle, subtitleClassName, mainClassName, className, ...props}: Props) {
  let buttonClasses = cc([
    className || '',
    'p-4 text-white hover:[&>*:nth-child(1)]:italic hover:[&>*:nth-child(1)]:translate-x-5'
  ])
  
  let mainClasses = cc([
    mainClassName || '',
    'transition text-5xl md:text-7xl text-start py-2'
  ])

  let subtitleClasses = cc([
    subtitleClassName || '',
    'mt-2 text-sm md:text-base text-start font-light'
  ])

  return (
    <button className={buttonClasses} {...props}>
      <div className={mainClasses}>
        {children}
      </div>
      { 
        subtitle && 
        <div className={subtitleClasses}>
          {subtitle}
        </div>
      }
    </button>
  )
}
