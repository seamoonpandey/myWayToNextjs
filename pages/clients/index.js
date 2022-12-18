import Link from "next/link";

export default function ClientPage() {

    const clients = [
        { id: 'max', name: 'Maximilian' },
        { id: 'min', name: 'Minuel' },
    ];
    // generally the data is to be fetched from a database but for practice we are gonna use this dummy self created reference instead


    return (
        <div>
            <h1>The clients pages</h1>
            <ul>
                {/* <li><Link href="/clients/max">Maximilian</Link></li>
                <li><Link href="/clients/manu">Manuel</Link></li> */}{/* this is just for the standard few given and fix data but we need to consider a bunch of id's and different objects */}


                {clients.map(client => <li key={client.id}><Link href={{
                    pathname: '/clients/[id]',
                    query: {
                        id: client.id,
                    },
                }}>{client.name}</Link></li>)}
                {/* here the list is generated dynamically */}
            </ul>
        </div>
    )
}
