import { Given } from 'cucumber';
import { MenuBar } from '../../models/screens/MenuBar';


Given('o acesso ao menu Mais', () => {
  MenuBar.goToMoreTab();
});