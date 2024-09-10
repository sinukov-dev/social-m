import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { PageLoader } from '@/components/ui/loader/pageloader'

export function useAuthStatus() {
	const router = useRouter()
	const { user, logout } = useAuth()

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (user === null) {
			router.push('/login')
		} else if (user) {
			setLoading(false)
		}
	}, [user, router])

	const handleLogout = async () => {
		await logout()
	}

	const renderLoader = () => (loading || !user ? <PageLoader /> : null)
	return { user, handleLogout, renderLoader }
}
