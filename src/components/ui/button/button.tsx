import Link from 'next/link'
import { Loader } from '../loader/loader'
import { TButton, TLink } from './button.types'
import cn from 'clsx'
import styles from './button.module.scss'

export function Button(props: TButton | TLink) {
	const { isLoading, type, children, className } = props

	if (type === 'button') {
		return (
			<button className={cn(styles.button, className)}>
				{isLoading ? <Loader /> : children}
			</button>
		)
	}

	if (type === 'link') {
		return (
			<Link className={cn(styles.button, className)} href={props.href}>
				{isLoading ? <Loader /> : children}
			</Link>
		)
	}
}
