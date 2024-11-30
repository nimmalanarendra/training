import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
// import Loading from "./components/loader/Loading";
// import NavbarHeader from "./components/common-components/navbar/NavbarHeader";
// import Footer from "./components/common-components/footer/Footer";

// import EmployeeSearch from "./pages/employee-search/EmployeeSearch";
// import ProfileEditTable from "./pages/boiler-plate/ProfileEditTable";
// import BuildNewCard from "./pages/buildNewCard/BuildNewCard";
// import EditExistingCardHistoryReport from "./pages/EditExistingCardHistoryReport";
// import BoilerPlate from "./pages/boiler-plate/BoilerPlate";

// const MainLandingPage = lazy(
// 	() => import("./pages/landing-page/MainLandingPage")
// );
// const MaintainDistributionGroups = lazy(
// 	() => import("./pages/MaintainDistributionGroups")
// );
// const ManualRecipSetup = lazy(() => import("./pages/ManualRecipSetup"));
// const UpdateEmailAttributes = lazy(
// 	() => import("./pages/UpdateEmailAttributes")
// );

const App = (): JSX.Element => {
	return (
		<div className='App'>
			<h1>welcome</h1>
			{/* <NavbarHeader />
			<div className='MainContant'>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<MainLandingPage />} />
						<Route
							path='/UpdateEmailAttributes'
							element={<UpdateEmailAttributes />}
						/>
						<Route
							path='/MaintainDistributionGroups'
							element={<MaintainDistributionGroups />}
						/>
						<Route path='/BoilerPlate' element={<BoilerPlate />}>
							<Route
								path='/BoilerPlate/profileEditTable'
								element={<ProfileEditTable />}
							/>
						</Route>
						<Route path='/ManualRecipSetup' element={<ManualRecipSetup />} />
						<Route path='/EmployeeSearch' element={<EmployeeSearch />} />
						<Route path='/BuildNewCard' element={<BuildNewCard />} />
						<Route
							path='/EditExistingCardHistoryReport'
							element={<EditExistingCardHistoryReport />}
						/>
					</Routes>
				</Suspense>
			</div>
			<Footer /> */}
		</div>
	);
};

export default App;
