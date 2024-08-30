declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_APPWRITE_PROJECT: string
			NEXT_PUBLIC_APPWRITE_ENDPOINT: string
		}
	}
}
export {}
