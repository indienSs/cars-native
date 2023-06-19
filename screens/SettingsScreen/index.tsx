import { useSelector } from "react-redux";
import LanguageSetter from "../../components/LanguageSetter";
import PageLayout from "../../layouts/PageLayout"
import { selectLanguage } from "../../redux/reducers/appReducer";

export default function SettingsScreen() {

  const language = useSelector(selectLanguage)

  return (
    <PageLayout>
      <LanguageSetter language={language}/>
    </PageLayout>
  );
}
