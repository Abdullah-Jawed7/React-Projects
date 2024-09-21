import variables from "../AppWriteVariables/variable";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(variables.appWriteURL)
      .setProject(variables.appWritePROJECTID);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // post services
  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      return await this.database.createDocument(
        variables.appWriteDATABASEID,
        variables.appWriteCOLLECTIONID,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: CreatePost::error ", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        variables.appWriteDATABASEID,
        variables.appWriteCOLLECTIONID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: UpdatePost::error ", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        variables.appWriteDATABASEID,
        variables.appWriteCOLLECTIONID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost::error ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        variables.appWriteDATABASEID,
        variables.appWriteCOLLECTIONID,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost::error ", error);
    }
  }
  async allPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        variables.appWriteDATABASEID,
        variables.appWriteCOLLECTIONID,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getAllPost::error ", error);
    }
  }

  // file services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        variables.appWriteBUCKETID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
    }
  }
  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(variables.appWriteBUCKETID, fileID);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
   filePreview(fileId) {

    
      return  this.bucket.getFilePreview(variables.appWriteBUCKETID, fileId );
  
   
    
  }
}

const service = new Service();
export default service;
