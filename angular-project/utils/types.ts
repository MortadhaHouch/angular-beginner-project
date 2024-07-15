type Todo = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
type Comment = {
    postId:number,
    id:number,
    name: string,
    email: string,
    body: string
}
type Post = {
    userId:number,
    id:number,
    title:string,
    body:string
}
type Album = {
    userId:number,
    id:number,
    title:string,
}
type Photo = {
    albumId:number,
    id:number,
    title:string,
    thumbnailUrl:string
}
type User = {
    userId:number,
    name:string,
    username:string,
    email:string
}
type Address = {
    street:string,
    suite:string,
    city:string,
    zipCode:string
}
export {
    Todo,
    Comment,
    Post,
    Album,
    Photo,
    User,
    Address
}