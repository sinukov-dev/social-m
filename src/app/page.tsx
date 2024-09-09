'use client'
import { Home } from '@/components/screens/home/Home'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ChatsPage() {
	const { user } = useAuth()
	const router = useRouter()
	if (!user) {
		router.push('/login')
	} else {
		return <Home />
	}
}
