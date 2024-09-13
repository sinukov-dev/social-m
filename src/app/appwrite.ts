import { Client, Account, Databases } from 'appwrite'

export const client = new Client()

client
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)

export const account = new Account(client)
export const databases = new Databases(client)
export { ID } from 'appwrite'
