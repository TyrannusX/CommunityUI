export interface IPost {
    author: string
    message: string,
    created_at: number,
    votes: number
    replies: Array<IPost>
}