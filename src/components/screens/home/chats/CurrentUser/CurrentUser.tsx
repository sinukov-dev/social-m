import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

const currentUser = {
	image: {
		src: 'https://placebeard.it/250/250',
		width: 100,
		height: 200
	},
	name: 'Carter Domonaui', // Замените это если ваше поле пользователя другое
	desc: 'Frontend developer'
}

export function CurrentUser() {
	const { user, logout } = useAuth()

	useEffect(() => {
		console.log('User data:', user)
	}, [user])

	const handleLogout = async () => {
		try {
			await logout()
		} catch (error) {
			console.error('Login failed', error)
		}
	}

	if (!user) {
		return <p>Loading...</p>
	}
	return (
		<div className={`p-layout border-b border-white/10 flex items-center justify-between`}>
			<div className={`flex items-center gap-16`}>
				<div className={`relative`}>
					<div className={`w-56 h-56 overflow-hidden rounded-full`}>
						<Image
							src={`${currentUser.image.src}`}
							alt={'Image'}
							width={currentUser.image.width}
							height={currentUser.image.height}
						/>
					</div>
					<div
						className={`online-checker bg-green-600 w-16 h-16 rounded-5 border-3 border-black absolute bottom-0 right-0`}
					></div>
				</div>
				<div>
					<div className={`text-16 text-bold text-white`}> {user?.name}</div>
					<div className={`text-14 text-normal text-g1000`}>{currentUser.desc}</div>
				</div>
			</div>
			<div className={`py-16`}>
				<div onClick={handleLogout} className={`p-24 bg-white text-black`}>
					logout
				</div>
				<MoreHorizontal />
			</div>
		</div>
	)
}
