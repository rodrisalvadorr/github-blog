export function Card() {
	return (
		<a
			className='bg-base-post p-8 rounded-[10px] w-[416px] h-[260px] cursor-pointer hover:border-2 hover:border-base-label'
			href='#'
		>
			<header className='flex justify-between items-start mb-5'>
				<h2 className='text-title-m text-base-title font-bold max-w-[283px]'>
					JavaScript data types and data structures
				</h2>

				<span className='text-text-s text-base-span mt-1'>Há 1 dia</span>
			</header>

			<p className='text-text-m text-base-text line-clamp-4'>
				Programming languages all have built-in data structures, but these often
				differ from one language to another. This article attempts to list the
				built-in data structures available in JavaScript and what properties
				they have. These can be used to build other data structures. Wherever
				possible, comparisons with other languages are drawn. Dynamic typing
				JavaScript is a loosely typed and dynamic language. Variables in
				JavaScript are not directly associated with any particular value type,
				and any variable can be assigned (and re-assigned) values of all types:
				let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string
				foo = true; // foo is now a boolean
			</p>
		</a>
	);
}
