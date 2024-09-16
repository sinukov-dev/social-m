'use client'

import { Home } from '@/components/screens/home/Home'
import { PageLoader } from '@/components/ui/loader/pageloader'
import { useRequireAuth } from '@/hooks/useRequireAuth'

export default function HomePage() {
	const { user, loading } = useRequireAuth()

	if (loading || !user) {
		return <PageLoader />
	}

	return <Home />
}
