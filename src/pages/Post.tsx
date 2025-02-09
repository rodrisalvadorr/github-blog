import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../components/Header';
import {
	faCalendarDay,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../components/Link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Post() {
	return (
		<div>
			<Header />

			<header className='rounded-[10px] bg-base-profile p-8 max-w-[864px] mx-auto mt-[-88px] drop-shadow-lg'>
				<nav className='flex justify-between w-full mb-5'>
					<a
						className='flex justify-center gap-2 uppercase text-blue'
						href='#'
					>
						<FontAwesomeIcon
							className='w-3 h-3'
							icon={faChevronLeft}
						/>
						<span className='text-link'>Voltar</span>
					</a>

					<Link label='ver no github' />
				</nav>

				<h1 className='text-title-l text-base-title font-bold mb-2'>
					JavaScript data types and data structures
				</h1>

				<div className='flex gap-8'>
					<span className='flex gap-2 items-center text-text-m text-base-span'>
						<FontAwesomeIcon
							className='w-4.5 h-4.5'
							icon={faGithub}
						/>

						<p>rodrisalvadorr</p>
					</span>

					<span className='flex gap-2 items-center text-text-m text-base-span'>
						<FontAwesomeIcon
							className='w-4.5 h-4.5'
							icon={faCalendarDay}
						/>

						<p>Há 1 dia</p>
					</span>

					<span className='flex gap-2 items-center text-text-m text-base-span'>
						<FontAwesomeIcon
							className='w-4.5 h-4.5'
							icon={faComment}
						/>

						<p>5 comentários</p>
					</span>
				</div>
			</header>

			<main className='max-w-[864px] mx-auto py-10 px-8'></main>
		</div>
	);
}
