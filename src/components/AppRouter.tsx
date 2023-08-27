import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { routes } from "../routes";
import { ROUTE } from "../utils/consts";
import { AnimatePresence, motion } from "framer-motion";

const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AnimatePresence mode='wait'>
              <motion.div
                key={location.key} // This is important
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Component />
              </motion.div>
            </AnimatePresence>
          }
        />
      ))}

      <Route path="*" element={<Navigate to={ROUTE.ORDERS} />} />
    </Routes>
  );
};

export default AppRouter;
