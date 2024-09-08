import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo-constants'
import { Auth } from '@/components/screens/auth/Auth'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default function LoginPage() {
	return <Auth type='login' />
}
