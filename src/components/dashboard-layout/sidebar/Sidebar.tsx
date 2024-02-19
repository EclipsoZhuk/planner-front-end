'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<nav>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-xl font-bold relative'>
						EZ Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>

				<div className='relative'>
					<LogoutButton />
					<ul className='p-3'>
						{MENU.map(item => (
							<li key={item.link}>
								<MenuItem item={item} />
							</li>
						))}
					</ul>
				</div>
			</nav>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2024 &copy; With love from EZ. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
