import './sidebar.scss';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/EduMatesLight.svg';
import { BsFillHouseFill, BsHash, BsCollectionPlay, BsTrophyFill, BsGearFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Sidebar = () => {
	const { currentUser } = useContext(AuthContext);

	const list = [
		{
			path: '/eduMates/home',
			name: 'Home',
			icon: BsFillHouseFill,
		},
		{
			path: '/eduMates/topics',
			name: 'Topics',
			icon: BsHash,
		},
		{
			path: '/eduMates/courses',
			name: 'Courses',
			icon: BsCollectionPlay,
		},
		{
			path: '/eduMates/classroom',
			name: 'Classroom',
			icon: BsTrophyFill,
		},
		{
			path: '/eduMates/setting',
			name: 'Setting',
			icon: BsGearFill,
		},
	];
	let [hoverState, setHoverState] = useState(undefined);
	let [clickState, setClickState] = useState(0);
	const handleHover = (i) => {
		setHoverState(i);
	};
	const handleHoverLeave = () => {
		setHoverState(undefined);
	};
	const handleClick = (i) => {
		setClickState(i);
	};
	return (
		<div className='sidebar-container m-0  position-fixed'>
			<div className='mb-3 w-100 mx-auto text-center'>
				<Link to='/eduMates/home'>
					<img src={logo} alt='EduMates' className='pt-3' />
				</Link>
			</div>
			<div className='user-info'>
				<div className='user-img mb-2'>
					<img src={currentUser.photoURL} alt='user-img' />
				</div>
				<p className='user-name mb-0 f-roboto fw5'>{currentUser.displayName}</p>
				<Link to={`/eduMates/profile/${currentUser.displayName}`} className='user-profile f-roboto fw5'>
					View Profile
				</Link>
			</div>
			<div className='sidebar-list'>
				<ul className='ps-0'>
					{list.map((item, i) => {
						return (
							<li
								key={i}
								onMouseOver={() => handleHover(i)}
								onMouseLeave={handleHoverLeave}
								onClick={() => handleClick(i)}
								className={clickState === i || hoverState === i ? 'sidebar-item active' : 'sidebar-item'}>
								<item.icon className='sidebar-icon' />
								<Link to={item.path}>
									<p className='mb-0 f-roboto fw4'>{item.name}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
