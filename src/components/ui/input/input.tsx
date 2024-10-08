'use client'
import cn from 'clsx'
import { HTMLInputTypeAttribute, forwardRef, useState } from 'react'
import styles from './input.module.scss'
import type { TInput } from './input.types'
import { EyeOff } from 'lucide-react'

const Input = forwardRef<HTMLInputElement, TInput>(
	(
		{
			error,
			style,
			className,
			Icon,
			type,
			// type: initialType,
			...rest
		},
		ref
	) => {
		// const [type, setType] = useState<HTMLInputTypeAttribute | undefined>(initialType || 'text')

		console.log

		return (
			<div
				className={cn(styles.input, className, { [styles['input-with-icon']]: Icon })}
				style={style}
			>
				<input ref={ref} type={type} {...rest} />
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				{error && <div className={styles.error}> {error.message}</div>}
				{/* {isEyeIcon && (
					<button
						onClick={e => {
							e.preventDefault()
							setType(type === 'password' ? 'text' : 'password')
						}}
						className={`styles.eye`}
						type='button'
					>
						{type === 'password' ? <Eye /> : <EyeOff />}
					</button>
				)} */}
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
