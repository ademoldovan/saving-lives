import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNotification,
  removeNotification,
} from "../store/sliceNotifications";

const useNotification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const showNotification = useCallback(
    (newNotification) => dispatch(addNotification(newNotification)),
    []
  );
  const hideNotification = useCallback(
    () => dispatch(removeNotification()),
    []
  );

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
export default useNotification;
