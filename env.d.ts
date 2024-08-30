declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_PROJECT_ID: string
			NEXT_PUBLIC_APPWRITE_ENDPOINT: string
		}
	}
}
export {}
