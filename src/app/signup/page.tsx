import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo-constants'
import { SignUp } from '@/components/screens/signup/signup'

export const metadata: Metadata = {
	title: 'Sign Up',
	...NO_INDEX_PAGE
}

export default function SignUpPage() {
	return (
		<>
			<SignUp />
		</>
	)
}
