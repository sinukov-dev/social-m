import { SearchIcon } from 'lucide-react'

export function Search() {
	return (
		<div className={` border-b border-white/10`}>
			<div className={`flex items-center justify-between relative`}>
				<button className={`absolute top-50% left-24`}>
					<SearchIcon />
				</button>
				<input
					type='text'
					className={`h-64 w-full bg-transparent placeholder:text-g900 placeholder:transition-colors	 focus:placeholder:text-transparent px-64`}
					placeholder='People, groups and messages'
				/>
			</div>
		</div>
	)
}
