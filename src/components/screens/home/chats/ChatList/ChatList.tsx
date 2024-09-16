// components/ChatList.tsx
import React, { useEffect, useState } from 'react'
import { databases } from '@/app/appwrite'
import { useAuth } from '@/context/AuthContext'
import { ChatItem } from './ChatItem'

const ChatList: React.FC = () => {
	const [userData, setUserData] = useState<any>([])
	const [userChats, setUserChats] = useState<any>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const { user } = useAuth()

	useEffect(() => {
		if (!user) {
			setError('user not authenticated')
			setLoading(false)
			return
		}
		const fetchData = async () => {
			try {
				const response = await databases.getDocument(
					'appDatabase-44', // ID базы данных
					'66e4403b003cc6e56518', // ID коллекции
					user.$id
				)

				setUserData(response)
				const chats = await JSON.parse(response.chats || [])
				setUserChats(chats)
				setError('')
			} catch (error) {
				setError('Failed to fetch data')
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) return <p>Loading list of users...</p>
	if (error) return <p>{error}</p>

	return (
		<div>
			{userChats.length === 0 ? (
				<div>{userData?.name || 'User'}, you don't have chats yet</div>
			) : (
				userChats.map((chat: any, index: number) => <ChatItem key={index} data={chat} />)
			)}
		</div>
	)
}

export default ChatList
