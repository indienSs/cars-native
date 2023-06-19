import { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";
import LanguageSetter from "../../components/LanguageSetter";
import PageLayout from "../../layouts/PageLayout";
import {changeLanguage, selectLanguage} from "../../redux/reducers/appReducer";

export default function SettingsScreen() {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const callbacks = {
    //Смена языка в redux
    changeLanguage: useCallback(() => {
      dispatch(changeLanguage());
    }, []),
  };

  return (
    <PageLayout>
      <LanguageSetter language={language} onPressHandler={callbacks.changeLanguage} />
    </PageLayout>
  );
}
