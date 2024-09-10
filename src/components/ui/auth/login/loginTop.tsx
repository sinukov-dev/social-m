import styles from '@/components/ui/auth/auth.module.scss'
import Link from 'next/link'

export function LoginTop() {
	return (
		<div className={styles.top}>
			<p className={`text-48 font-bold`}>Log In</p>
			<p className={`text-16 text-center font-light text-g700`}>
				Don't have an account?
				<Link href='/signup' className={`ml-8 font-bold hover:underline text-white`}>
					Sign Up
				</Link>
			</p>
		</div>
	)
}
