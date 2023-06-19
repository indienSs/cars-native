import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import LanguageSetter from "../../components/LanguageSetter";
import PageLayout from "../../layouts/PageLayout";
import {changeLanguage, selectLanguage, setCategory} from "../../redux/reducers/appReducer";

export default function SettingsScreen() {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const callbacks = {
    //Смена языка в redux и сброс категорий под текущую локаль
    changeLanguage: useCallback(() => {
      dispatch(changeLanguage());
      if (language === "RU") {
        dispatch(setCategory("All"));
      } else {
        dispatch(setCategory("Все"));
      }
    }, [language]),
  };

  return (
    <PageLayout>
      <LanguageSetter language={language} onPressHandler={callbacks.changeLanguage} />
    </PageLayout>
  );
}
