import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/loader'
import { Link } from 'lucide-react'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	type: string
}
interface ILink extends InputHTMLAttributes<HTMLLinkElement> {
	isLoading?: boolean
	type: string
}

export function Button({ isLoading, type, children }: IButton | ILink) {
	if (type === 'button') return <button>{isLoading ? <Loader /> : children}</button>
	if (type === 'link') return <Link>{isLoading ? <Loader /> : children}</Link>
}
