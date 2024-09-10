import { Loader } from './loader'

export function PageLoader() {
	return (
		<div className={`pos-50-50 w-screen h-screen flex justify-center items-center`}>
			<Loader />
		</div>
	)
}
