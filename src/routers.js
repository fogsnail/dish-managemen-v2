import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import NotFound from "./components/NotFound";
const routers = [
  {
    path: "/Step1",
    exact: true,
    main: () => <Step1 />,
  },
  {
    path: "/Step2",
    exact: true,
    main: () => <Step2 />,
  },
  {
    path: "/Step3",
    exact: true,
    main: () => <Step3 />,
  },
  {
    path: "/Step4",
    exact: true,
    main: () => <Step4 />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routers;
