import { Home } from '@/components/screens/home/Home'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Main page',
}

export default function ChatsPage() {
	return (
		<>
			<Home />
		</>
	)
}
