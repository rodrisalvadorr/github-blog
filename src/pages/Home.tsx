import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Card } from '../components/Card';

export function Home() {
	return (
		<div>
			<Header />

			<section className='flex gap-8 rounded-[10px] bg-base-profile p-8 max-w-[864px] mx-auto mt-[-88px] mb-18 drop-shadow-lg'>
				<img
					className='w-36 h-36 rounded-lg'
					src='https://www.github.com/interbrok.png'
				/>

				<div>
					<div className='flex justify-between items-start'>
						<h1 className='font-bold text-title-l text-base-title mb-2'>
							Rodrigo Salvador
						</h1>
						<a
							className='flex gap-2 justify-center items-center hover:border-b hover:border-b-blue'
							href='https://www.github.com/interbrok'
						>
							<span className='text-link text-blue font-bold uppercase'>
								Github
							</span>
							<FontAwesomeIcon
								className='text-blue w-3 h-3'
								icon={faArrowUpRightFromSquare}
							/>
						</a>
					</div>

					<p className='text-text-m text-base-text mb-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						porro blanditiis asperiores sunt, ut esse similique sed tempora
						atque, veritatis maxime iste earum.
					</p>

					<div className='flex gap-6'>
						<span className='flex gap-2 items-center'>
							<FontAwesomeIcon
								className='text-base-label w-[18px] h-[18px]'
								icon={faGithub}
							/>
							<p className='text-text-m text-base-subtitle'>rodrisalvadorr</p>
						</span>

						<span className='flex gap-2 items-center'>
							<FontAwesomeIcon
								className='text-base-label w-[18px] h-[18px]'
								icon={faBuilding}
							/>
							<p className='text-text-m text-base-subtitle'>
								Interbrok Seguros
							</p>
						</span>

						<span className='flex gap-2 items-center'>
							<FontAwesomeIcon
								className='text-base-label w-[18px] h-[18px]'
								icon={faUserGroup}
							/>
							<p className='text-text-m text-base-subtitle'>32 seguidores</p>
						</span>
					</div>
				</div>
			</section>

			<form className='flex flex-col gap-3 max-w-[864px] mx-auto mb-12'>
				<div className='flex justify-between'>
					<label
						className='text-title-s text-base-subtitle font-bold'
						htmlFor='searchInput'
					>
						Publicações
					</label>
					<span className='text-text-s text-base-span'>6 publicações</span>
				</div>
				<input
					id='searchInput'
					className='text-text-m rounded-md text-base-text px-4 py-3 bg-base-input border border-base-border outline-0 focus-within:border-blue'
					placeholder='Buscar conteúdo'
					type='text'
				/>
			</form>

			<main className='max-w-[864px] mx-auto grid grid-cols-2 gap-8 mb-16'>
				<Card />
				<Card />
				<Card />
				<Card />
			</main>
		</div>
	);
}
