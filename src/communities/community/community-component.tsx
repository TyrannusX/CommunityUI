import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { GetCommunity } from "../../services/http-service";
import { IPost } from "../../types/post";
import { Card } from "flowbite-react";

export let CommunityComponent = () => {
    let params = useParams();
    let [posts, setPosts] = useState(new Array<IPost>())

    useEffect(() => {
        GetCommunity(params.name ?? "").then(response => {
            console.log(response);
            setPosts(response);
        })
    }, [])

    return (
        <div>
            {posts.map(entry => (
                <Card className="max-w-sm" href="#">
                    <h3>{entry.message}</h3>
                    <br />
                    <h6>Author: {entry.author}</h6>
                    <h6>Votes: {entry.votes}</h6>
                </Card>
            ))}
        </div>
    )
}