import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkProps {
	label: string;
}

export function Link({ label }: LinkProps) {
	return (
		<a
			className='flex gap-2 justify-center items-center hover:border-b hover:border-b-blue'
			href='https://www.github.com/interbrok'
		>
			<span className='text-link text-blue font-bold uppercase'>{label}</span>
			<FontAwesomeIcon
				className='text-blue w-3 h-3'
				icon={faArrowUpRightFromSquare}
			/>
		</a>
	);
}
