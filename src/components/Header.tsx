import logoSvg from '../assets/logo.svg';

export function Header() {
	return (
		<div className='flex justify-center items-center bg-base-input pt-16 pb-32'>
			<img src={logoSvg} />
		</div>
	);
}
