const repositoryName = "dynamic name";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">
                        Respository Acess
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>
                    <a href="">
                        Respository Acess
                    </a>
                </li>
            </ul>
        </section>
    )
}