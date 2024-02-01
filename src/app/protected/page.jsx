import {getServerSession} from 'next-auth'

export default async function ProtectedPage ()

 {
    const session = await getServerSession();
    if (session)
    return (

        <div>Private deashboard</div>
    )
}