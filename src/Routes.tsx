import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export function Router() {
	return (
		<Routes>
			<Route
				path='/'
				element={<DefaultLayout />}
			>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/posts'
					element={<Post />}
				/>
			</Route>
		</Routes>
	);
}
