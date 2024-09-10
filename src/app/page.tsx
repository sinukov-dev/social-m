'use client'
import { Home } from '@/components/screens/home/Home'
import { PageLoader } from '@/components/ui/loader/pageloader'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ChatsPage() {
	const router = useRouter()
	const { user } = useAuth()

	const [loading, setLoading] = useState(true)

	//checking auth status
	useEffect(() => {
		if (user === null) {
			router.push('/login')
		} else if (user) {
			setLoading(false)
		}
	}, [user])

	if (loading) {
		return <PageLoader />
	}
	return <Home />
}
