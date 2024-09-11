'use client'

import { Home } from '@/components/screens/home/Home'
import { PageLoader } from '@/components/ui/loader/pageloader'
import { useAuth } from '@/context/AuthContext'
import { useRequireAuth } from '@/hooks/useRequireAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
	const { user, loading } = useRequireAuth()

	if (loading || !user) {
		return <PageLoader />
	}

	return <Home />
}
