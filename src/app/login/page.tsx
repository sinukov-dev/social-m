import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo-constants'
import { Login } from '@/components/screens/login/login'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default function LoginPage() {
	return <Login />
}
