const Table = (props) => {
    return (
        <>
            <h2>{props.id}</h2>

            <table>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Level</td>
                    <td>{props.level}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>{props.message}</td>
                </tr>
                <tr>
                    <td>Resource ID</td>
                    <td>{props.resourceId}</td>
                </tr>
                <tr>
                    <td>Timestamp</td>
                    <td>{props.timestamp}</td>
                </tr>
                <tr>
                    <td>Trace ID</td>
                    <td>{props.traceId}</td>
                </tr>
                <tr>
                    <td>Span ID</td>
                    <td>{props.spanId}</td>
                </tr>
                <tr>
                    <td>Commit</td>
                    <td>{props.commit}</td>
                </tr>
                <tr>
                    <td>Parent Resource ID</td>
                    <td>{props.parentResourceId}</td>
                </tr>
            </table>
        </>
    )
}

export default Table;