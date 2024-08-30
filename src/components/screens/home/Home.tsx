import { Chat } from './chats/Chat/Chat'
import { ChatList } from './chats/ChatList/ChatList'
import { CurrentUser } from './chats/CurrentUser/CurrentUser'
import { Search } from './chats/Search/Search'
import { Stories } from './chats/Strories/Stories'
import styles from './Home.module.scss'

export function Home() {
	console.log(name)
	return (
		<div className={`flex h-full`}>
			<div className={`flex flex-col w-1/3 border-r border-white/10 min-w-[400px]`}>
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
