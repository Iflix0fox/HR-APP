import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";

function App() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   title: "",
  //   salary: "",
  //   phone: "",
  //   email: "",
  //   animal: "",
  //   startDate: "",
  //   location: "",
  //   department: "",
  //   skills: "",
  // });

  // const handleClick = () => {
  //   axios
  //     .post("https://hr-app-sws8.onrender.com/employees", {
  //       ...formData,
  //       skills: formData.skills
  //         ? formData.skills.split(",").map((s) => s.trim())
  //         : [],
  //       isFavourite: false,
  //     })
  //     .then((response) => {
  //       setEmployees([...employees, response.data]);
  //     });
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // return (
  //   <Router basename="/HR-APP">
  //     <div className="app">
  //       <Header />
  //       <main className="main-content">
  //         <Routes>
  //           <Route path="/" index element={<Layout />} />
  //           <Route
  //             path="/"
  //             element={
  //               <Home
  //                 employees={employees}
  //                 handleDeleteEmployee={handleDeleteEmployee}
  //               />
  //             }
  //           />

  //           <Route path="/about" element={<About />} />
  //           <Route
  //             path="/add-employee"
  //             element={
  //               <AddEmployee
  //                 formData={formData}
  //                 setFormData={setFormData}
  //                 handleClick={handleClick}
  //               />
  //             }
  //           />
  //         </Routes>
  //       </main>
  //       <Footer />
  //     </div>
  //   </Router>
  // );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        // {
        //   path: "/add-employee",
        //   element: (
        //     <AddEmployee
        //       formData={formData}
        //       setFormData={setFormData}
        //       handleClick={handleClick}
        //     />
        //   ),
        // },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
