import Link from 'next/link'
import { Button } from '../../button/button'

export function LoginBottom() {
	return (
		<div className={`flex w-full justify-between mt-24`}>
			<Button type={'button'} className='w-50%'>
				Log In
			</Button>
			<div className={`w-50% w-full flex items-center justify-center`}>
				<Link href='/signup' className={`transition-opacity hover:opacity-70`}>
					Sign Up
				</Link>
			</div>
		</div>
	)
}
