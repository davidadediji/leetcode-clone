import React, { useState } from 'react';
import { problems } from '@/mock-problems-data/problems';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import Link from 'next/link';
import YoutubeModal from '../Modals/YoutubeModal';

interface ProblemsTableProps {}
export default function ProblemsTable() {
	const [youtubePlayer, setYoutubePlayer] = useState({ isOpen: false, videoId: '' });
	function closeModal() {
		setYoutubePlayer((prev) => ({ ...prev, isOpen: false, videoId: '' }));
	}
	return (
		<>
			<tbody className='text-white'>
				{problems.map((problem, idx) => {
					const difficultyColor =
						problem.difficulty === 'Easy'
							? ' text-dark-green-s'
							: problem.difficulty === 'Medium'
							? 'text-dark-yellow'
							: 'text-dark-pink';
					return (
						<tr
							className={`${idx % 2 === 1 ? 'bg-dark-layer-1' : ''}`}
							key={problem.id}
						>
							<th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
								<BsCheckCircle fontSize={'18px'} width={18} />
							</th>
							<td className=' px-6 py-4'>
								<Link
									href={`/problem/${problem.id}`}
									className=' hover:text-blue-600 cursor-pointer'
								>
									{problem.title}
								</Link>
							</td>
							<td className={` px-6 py-4 ${difficultyColor}`}>
								{problem.difficulty}
							</td>
							<td className='px-6 py-4'>{problem.category}</td>
							<td className={`px-6 py-4`}>
								{problem.videoId ? (
									<AiFillYoutube
										className='hover:text-red-600 cursor-pointer'
										fontSize='20px'
										onClick={() =>
											setYoutubePlayer({
												isOpen: true,
												videoId: problem.videoId as string,
											})
										}
									/>
								) : (
									<p className='text-gray-400'>Coming soon ...</p>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
			{youtubePlayer.isOpen && (
				<YoutubeModal youtubePlayer={youtubePlayer} closeModal={closeModal} />
			)}
		</>
	);
}
