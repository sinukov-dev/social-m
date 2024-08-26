import { Chat } from './chats/Chat'
import { ChatList } from './chats/ChatList'
import { CurrentUser } from './chats/CurrentUser'
import { Search } from './chats/Search'
import { Stories } from './chats/Stories'
import styles from './Home.module.scss'

export function Home() {
	return (
		<div className={`flex h-full`}>
			<div className={`flex `}>
				<CurrentUser />
				<Search />
				<Stories />
				<ChatList />
			</div>
			<div className={`w-full h-full `}>
				<Chat />
			</div>
		</div>
	)
}
