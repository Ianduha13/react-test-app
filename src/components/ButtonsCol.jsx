const ButtonsCol = ({ buttonsText, handleFilters }) => {
	return (
		<section className='h-[440px] bg-lime-300 rounded-b-xl py-2'>
			<div className='flex flex-col gap-2  flex-grow px-2'>
				{buttonsText?.map((x) => (
					<button
						type='button'
						onClick={handleFilters}
						className='py-2 text-md px-4 bg-lime-700 text-white border border-lime-900 rounded-xl '
						key={x}
						value={x}
					>
						{x.charAt(0).toUpperCase() + x.slice(1)}
					</button>
				))}
			</div>
		</section>
	)
}
export default ButtonsCol
