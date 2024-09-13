// components/ChatList.tsx
import React, { useEffect, useState } from 'react'
import { databases } from '@/app/appwrite'

const ChatList: React.FC = () => {
	const [users, setUsers] = useState<any>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await databases.listDocuments(
					'appDatabase-44', // ID базы данных
					'66e4403b003cc6e56518' // ID коллекции
				)

				const fetchedUsers = response.documents.map((doc: any) => doc)
				setUsers(fetchedUsers)
			} catch (error) {
				setError('Failed to fetch data')
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	return (
		<div>
			{users.length > 0 ? (
				users.map((user: any) => <div>{user.participants}</div>)
			) : (
				<p>No users found.</p>
			)}
		</div>
	)
}

export default ChatList
