import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import {useEffect, useState} from "react";

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/rafhael-s-p/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.id} repository={repository}/>
                    })
                }
            </ul>
        </section>
    )
}