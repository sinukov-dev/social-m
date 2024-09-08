import { ButtonHTMLAttributes } from 'react'
import { AnchorHTMLAttributes } from 'react'

type TBaseProps = {
	isLoading?: boolean
	className?: string
}

type TButtonProps = TBaseProps & {
	type: 'button'
}

type TLinkProps = TBaseProps & {
	type: 'link'
	href: string
}

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & TButtonProps
export type TLink = AnchorHTMLAttributes<HTMLAnchorElement> & TLinkProps
