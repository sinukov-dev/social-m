import { Chat } from './chats/Chat/Chat'
import { ChatList } from './chats/ChatList/ChatList'
import { CurrentUser } from './chats/CurrentUser/CurrentUser'
import { Search } from './chats/Search/Search'
import { Stories } from './chats/Strories/Stories'
import styles from './Home.module.scss'

export function Home() {
	return (
		<div className={`flex h-full`}>
			<div className={styles.sidebar}>
				<CurrentUser />
				<Search />
				<Stories />
				<ChatList />
			</div>
			<div className={`w-full h-full`}>
				<Chat />
			</div>
		</div>
	)
}
