import styles from '@/components/ui/auth/auth.module.scss'

type TAuthError = {
	error: string
}

export function AuthError({ error }: TAuthError) {
	return <div className={styles['error_block']}>{error}</div>
}
