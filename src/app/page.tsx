'use client'

import { Home } from '@/components/screens/home/Home'
import { PageLoader } from '@/components/ui/loader/pageloader'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
	const { user, loading } = useAuth()
	const router = useRouter()
	useEffect(() => {
		console.log('loading:', loading, 'user:', user)

		if (!loading) {
			if (!user) {
				router.replace('/login')
			}
		}
	}, [user, loading, router])

	if (loading || !user) {
		return <PageLoader />
	}

	return <Home />
}
