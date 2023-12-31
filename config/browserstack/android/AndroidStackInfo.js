class AndroidStackInfo {

    static project(){
      return 'Super App Pague menos - Android'
    }

    static build(){
      return 'browserstack-build-1'
    }

    static deviceName() {
        return ['Samsung Galaxy S21']; // pass the udid or devicename
    }

    static osVersion() {
        return ['12.0']; // pass the platform version
    }

    static appName() {
        return 'bs://fc2494ba9fd2ae85f33b819a0daac1de9b315b76'; // pass the apk name
    }

    static name(){
      return 'local_test';
    }
}

module.exports = AndroidStackInfo;
