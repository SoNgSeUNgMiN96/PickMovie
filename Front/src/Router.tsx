import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/Main/MainPage';
import Register from './pages/Register/Register';

const Router: React.FC = () => {
	return (
		// v6 버전 부터 Switch -> Routes , exact 삭제, component -> element로 변경
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
