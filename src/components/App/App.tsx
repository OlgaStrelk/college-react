import { Routes, Route } from "react-router-dom";
// import { Suspense, Component, type ReactNode } from "react";
import { ROUTE_CONFIG } from "../../utils/routeConfig";
import { MainLayout } from "../../ui/MainLayout";
import Home from "../../pages/Home";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

// Компонент загрузки
// const LoadingSpinner: React.FC = () => (
//   <div className={styles.loader}>Загрузка страницы...</div>
// );

// // Компонент обработки ошибок
// class ErrorBoundary extends Component<{ children: ReactNode }> {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Ошибка загрузки страницы. Попробуйте позже.</div>;
//     }
//     return this.props.children;
//   }
// }

// Кэш для компонентов

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      {/* <ErrorBoundary> */}
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        {ROUTE_CONFIG.map(({ path, component: Component, useLayout }) => (
          <Route
            key={path}
            path={path}
            element={
              useLayout ? (
                <MainLayout>
                  <Component />
                </MainLayout>
              ) : (
                <Component />
              )
            }
          />
        ))}
      </Routes>
      {/* </ErrorBoundary> */}
      {/* </Suspense> */}
    </>
  );
};

export default App;
