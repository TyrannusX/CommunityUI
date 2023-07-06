import { Table } from "flowbite-react";
import { GetCommunities } from "../services/http-service";
import { ICommunity } from "../types/community";
import { useEffect, useState } from "react";

export let CommunitiesComponent = () => {
    const [communities, setCommunities] = useState(new Array<ICommunity>);

    useEffect(() => {
        GetCommunities().then(response => {
            console.log(response);
            setCommunities(response);
        })
    }, []);

    return (
        <Table>
            {communities.map((community: ICommunity) => (
                <Table.Row>
                    <Table.Cell><a href={`/community/${community.name}`}>{community.name}</a></Table.Cell>
                    <Table.Cell>{community.description}</Table.Cell>
                    <Table.Cell>{community.population}</Table.Cell>
                </Table.Row>
            ))}
        </Table>
    )
}