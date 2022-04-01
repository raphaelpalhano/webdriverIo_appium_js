import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HomeScreen extends BaseScreen{


  static launchApp() {
    super.launchApp();
    super.switchToNativeContext();

  }

  static goToHome(){
    super.clickElement(ScreenManagerMobile.homeElements.UPDATEOPTION);
    super.sleepForElement(ScreenManagerMobile.menuElements.MORETAB, 7);
  }


}
