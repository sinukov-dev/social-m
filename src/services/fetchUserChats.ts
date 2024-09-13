import { databases } from '@/app/appwrite' // Проверьте правильность пути
import { useAuth } from '@/context/AuthContext'
import { Query } from 'appwrite'

const fetchUserChats = async () => {
	const { user } = useAuth() // Получение текущего пользователя из контекста
	console.log('sfodsfiodsfoi')
	if (!user) return []

	try {
		// Поиск всех чатов, где текущий пользователь является участником
		const response = await databases.listDocuments('appDatabase-44', '66e4403b003cc6e56518', [
			Query.equal('participants', user.$id) // Используйте Query.equal для фильтрации
		])

		return response.documents
	} catch (error) {
		console.error('Ошибка получения чатов:', error)
		return []
	}
}

export default fetchUserChats
