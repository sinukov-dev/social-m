import Link from 'next/link'
import { Button } from '../../button/button'

export function SignupBottom() {
	return (
		<div className={`flex w-full justify-between mt-24`}>
			<Button type={'button'} className='w-50%'>
				Sign Up
			</Button>
			<div className={`w-50% w-full flex items-center justify-center`}>
				<Link href='/login' className={`transition-opacity hover:opacity-70`}>
					Log In
				</Link>
			</div>
		</div>
	)
}
