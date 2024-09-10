import styles from '@/components/ui/auth/auth.module.scss'
import Link from 'next/link'

export function SignupTop() {
	return (
		<div className={styles.top}>
			<p className={`text-48 font-bold`}>Sign Up</p>
			<p className={`text-16 text-center font-light text-g700`}>
				already have an account?
				<Link href='/login' className={`ml-8 font-bold hover:underline text-white`}>
					Log In
				</Link>
			</p>
		</div>
	)
}
