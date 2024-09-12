import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { Button, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import Link from 'next/link'

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

	const handleLogout = async () => {
		await logout()
	}

	if (!user) {
		return <p>Loading...</p>
	}
	return (
		<div className={`p-layout border-b border-white/10 flex items-center justify-between`}>
			<User
				name={user?.name}
				description={currentUser.desc}
				avatarProps={{
					src: currentUser.image.src,
					size: 'lg'
				}}
				classNames={{
					name: 'text-18 font-medium',
					description: 'font-light opacity-60',
					base: 'gap-16',
					wrapper: 'gap-4'
				}}
			/>
			<div className={`py-16`}></div>
			<Popover placement='bottom' color={`foreground`} showArrow={true}>
				<PopoverTrigger>
					<div className={`p-8 pr-0 cursor-pointer hover:opacity-70 transition-opacity`}>
						<MoreHorizontal />
					</div>
				</PopoverTrigger>
				<PopoverContent>
					<div className='px-1 py-2 w-[160px]'>
						<ul className={`mb-16`}>
							<li className={`p-8 border-b border-g1100`}>
								<Link href='/settings'>Settings</Link>
							</li>
							<li className={` p-8 border-b border-g1100`}>
								<Link href='/friends'>My friends</Link>
							</li>
						</ul>
						<Button
							onClick={handleLogout}
							className={`px-16 py-8 text-white font-bold bg-red-600 rounded-2 w-full flex justify-center items-center cursor-pointer`}
						>
							Logout
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}
