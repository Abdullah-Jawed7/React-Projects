const variables ={
    appWriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    appWritePROJECTID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDATABASEID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCOLLECTIONID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBUCKETID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default  variables