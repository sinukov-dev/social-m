import Image from 'next/image'
import { ChatItem } from './ChatItem'

export function ChatList() {
	return (
		<div className={`overflow-auto flex-grow`}>
			<div>
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
			</div>
		</div>
	)
}
