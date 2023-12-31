import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HomeScreen extends BaseScreen{

  static async launchApp() {
    super.launchApp();
    super.switchToNativeContext();
  }

  static async selectAllow(index){
    await (await ScreenManagerMobile.homeElements.LISTLOCATION(index)).click();

  }

  static async selectAllowText(text){
    if(await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)).isDisplayed()){
      await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)).click();

    }

  }

  static async selectCancelOption(){
    if(await (await ScreenManagerMobile.homeElements.CANCELOPTION()).isDisplayed()){
      await (await ScreenManagerMobile.homeElements.CANCELOPTION()).click();

    }
  }

  static async sleepApp(time){
    driver.pause(time * 1000);
  }


  static async waitAllow(text, time){
    await super.waitForElement((await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)), time);

  }

  static async waitHome(time){
    await super.waitForElement((await ScreenManagerMobile.menuElements.HOMETAB()), time);
  }

  static async waitDisplayed(){
    await (await ScreenManagerMobile.menuElements.HOMETAB()).waitForDisplayed();
  }


}
