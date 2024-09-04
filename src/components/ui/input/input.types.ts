import { LucideIcon } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

export type TInputProps = {
	placeholder: string
	error?: FieldError
	// isEyeIcon?: boolean
	Icon?: LucideIcon
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & TInputProps

export type TInput = TypeInputProps
