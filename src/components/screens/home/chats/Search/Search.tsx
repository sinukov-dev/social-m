import { Autocomplete, AutocompleteItem, Avatar, User } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import styles from './Search.module.scss'
import { useEffect, useState } from 'react'
import { databases } from '@/app/appwrite'
import { useAuth } from '@/context/AuthContext'

export function Search() {
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
				const response = await databases.listDocuments(
					'appDatabase-44', // ID базы данных
					'66e4403b003cc6e56518' // ID коллекции
				)
				setUserData(response.documents)
				// const chats = await JSON.parse(response)
				// setUserChats(chats)
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
		<div className={` border-b border-white/10`}>
			<div className={`flex items-center justify-between relative ${styles.wrapper}`}>
				<div className={`absolute top-50% left-24`}>
					<SearchIcon />
				</div>
				<Autocomplete
					variant={'underlined'}
					placeholder='Search users'
					className={styles.search}
					aria-label=''
					classNames={{
						popoverContent: [styles.container]
					}}
					defaultItems={[]}
					size={'lg'}
				>
					{userData.map((item: any, index: number) => (
						<AutocompleteItem key={1} textValue={''}>
							<div className='flex gap-2 items-center'>
								<User
									name={item?.name}
									description={'frontend developer'}
									// avatarProps={{
									// 	src: item.image.src,
									// 	size: 'lg'
									// }}
									classNames={{
										name: 'text-18 font-medium',
										description: 'font-light opacity-60',
										base: 'gap-16',
										wrapper: 'gap-4'
									}}
								/>
							</div>
						</AutocompleteItem>
					))}
				</Autocomplete>
			</div>
		</div>
	)
}
