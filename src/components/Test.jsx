// function Dashboard() {
//     return (
//       <div>
//         <h1>Dashboard</h1>
  
//         {/* This element will render either <DashboardMessages> when the URL is
//             "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
//         */}
//         <Outlet />
//       </div>
//     );
//   }
  
//   function App() {
//     return (
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route
//             path="messages"
//             element={<DashboardMessages />}
//           />
//           <Route path="tasks" element={<DashboardTasks />} />
//         </Route>
//       </Routes>
//     );
//   }