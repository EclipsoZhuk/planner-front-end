import { redirect } from 'next/navigation'

export default function Home() {
	redirect('/auth')
	return <div>Hello Planner</div>
}
